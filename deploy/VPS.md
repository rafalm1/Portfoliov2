# Wdrożenie na VPS (z asystentem AI)

> **Nieużywane na razie.** Strona działa na Netlify bez asystenta AI (zobacz [DEPLOY.md](../DEPLOY.md)). Ta instrukcja jest na wypadek, gdybyś chciał przywrócić asystenta z lokalnym modelem Ollama: wtedy potrzebny jest własny serwer i domena, a w `.env` trzeba ustawić `VITE_AI_ASSISTANT=true` przed `npm run build`.

Jeden serwer VPS (Ubuntu 24.04), na którym działa wszystko:

```
przeglądarka ──HTTPS──> nginx :443 ──> Node/Express :4000 ──> Ollama :11434
                                        ├─ /api/*   (API, czat)
                                        └─ /*       (zbudowany frontend z dist/)
```

- **Express** serwuje i API, i zbudowany frontend, więc jest jeden proces do pilnowania.
- **nginx** obsługuje HTTPS (certyfikat Let's Encrypt) i przekazuje ruch do Expressa.
- **Ollama** uruchamia lokalny model `qwen2.5:3b` dla asystenta AI.
- **Dane o doświadczeniu** (`content/portfolio.json`) nie są w repo. Kopiujesz je na serwer ręcznie przez `scp`.

W przykładach poniżej użytkownik Linuksa to `rafal`, a aplikacja leży w `/srv/portfolio`. Jeśli zmienisz którąś z tych nazw, popraw ją też w `deploy/portfolio.service`.

---

## 0. Przed startem (na swoim komputerze)

1. Upewnij się, że kod jest wypchnięty na GitHuba (`git push`) i że **nie ma w nim** folderu `content/`:
   ```powershell
   git status --ignored
   ```
   `content/` ma się pojawić w sekcji „Ignored files”.
2. Sprawdź lokalnie wersję produkcyjną:
   ```powershell
   npm run build
   $env:NODE_ENV='production'; npm run server
   ```
   Otwórz http://localhost:4000. Strona i zakładka Doświadczenie powinny działać. Zatrzymaj serwer (Ctrl+C) i wyczyść zmienną: `Remove-Item Env:NODE_ENV`.
3. Wygeneruj klucz SSH, jeśli go nie masz:
   ```powershell
   ssh-keygen -t ed25519
   ```
   Klucz publiczny jest w `C:\Users\<ty>\.ssh\id_ed25519.pub`.

## 1. Serwer VPS

Kup VPS z **Ubuntu 24.04** i co najmniej **4 GB RAM**. Zalecane jest 8 GB, bo sam model `qwen2.5:3b` zajmuje ok. 2–3 GB. Wystarczą 2–4 vCPU. Przykładowi dostawcy: Hetzner Cloud, OVH, Contabo, Mikrus.

Przy tworzeniu serwera wklej swój klucz publiczny SSH. Zapisz adres IP serwera, dalej nazywany `IP_SERWERA`.

## 2. Pierwsze logowanie i zabezpieczenie

```bash
ssh root@IP_SERWERA

apt update && apt upgrade -y
adduser rafal
usermod -aG sudo rafal
rsync --archive --chown=rafal:rafal ~/.ssh /home/rafal

ufw allow OpenSSH
ufw enable
exit
```

Od teraz loguj się jako `rafal`:

```bash
ssh rafal@IP_SERWERA
```

## 3. Node.js, git i nginx

```bash
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt install -y nodejs git nginx
node -v    # v24.x

sudo ufw allow 'Nginx Full'
```

## 4. Ollama i model

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull qwen2.5:3b
curl http://127.0.0.1:11434/api/tags   # lista ma zawierać qwen2.5:3b
```

Ollama instaluje się jako usługa systemowa, startuje sama i nasłuchuje tylko lokalnie.

## 5. Aplikacja

```bash
sudo mkdir -p /srv/portfolio
sudo chown rafal:rafal /srv/portfolio
git clone https://github.com/rafalm1/Portfoliov2.git /srv/portfolio
cd /srv/portfolio
mkdir -p content
```

**Dane o doświadczeniu.** Wyślij je z Windowsa, w PowerShellu na swoim komputerze:

```powershell
scp C:\Users\nowak\AllProjects\Portfolio\Portfoliov2\content\portfolio.json rafal@IP_SERWERA:/srv/portfolio/content/
```

**Konfiguracja `.env`.** Z powrotem na serwerze:

```bash
cd /srv/portfolio
cp .env.example .env
nano .env
```

Ustaw:

```
NODE_ENV=production
PORT=4000
HOST=127.0.0.1
TRUST_PROXY=1
OLLAMA_URL=http://127.0.0.1:11434
OLLAMA_MODEL=qwen2.5:3b
```

**Budowanie:**

```bash
npm ci
npm run build
```

## 6. Usługa systemd (żeby aplikacja działała stale i wstawała po restarcie)

```bash
sudo cp deploy/portfolio.service /etc/systemd/system/portfolio.service
sudo systemctl daemon-reload
sudo systemctl enable --now portfolio

systemctl status portfolio            # ma być "active (running)"
curl http://127.0.0.1:4000/api/health # {"status":"ok",...,"ai":"online"}
```

Logi aplikacji: `journalctl -u portfolio -f`

## 7. nginx

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/portfolio
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t                # "syntax is ok"
sudo systemctl reload nginx
```

Sprawdź w przeglądarce `http://IP_SERWERA`. Strona powinna się otworzyć, na razie bez HTTPS.

## 8. Domena (DNS)

U rejestratora domeny `rafalmalyszko.net` ustaw rekordy:

| Typ | Nazwa | Wartość    |
| --- | ----- | ---------- |
| A   | @     | IP_SERWERA |
| A   | www   | IP_SERWERA |

Usuń stare rekordy A/CNAME wskazujące na obecny hosting. Od tej chwili domena prowadzi na nowy serwer, a stara strona przestaje być widoczna. Zmiana DNS rozchodzi się od kilku minut do kilku godzin. Sprawdzisz to poleceniem:

```bash
nslookup rafalmalyszko.net
```

## 9. HTTPS (Let's Encrypt)

Gdy domena wskazuje już na serwer:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d rafalmalyszko.net -d www.rafalmalyszko.net
```

Gdy certbot zapyta o przekierowanie z HTTP na HTTPS, wybierz **redirect**. Certyfikat odnawia się automatycznie. Test odnawiania: `sudo certbot renew --dry-run`.

## 10. Sprawdzenie

- https://rafalmalyszko.net otwiera stronę.
- Zakładki Doświadczenie i Umiejętności pokazują dane, a kula 3D się kręci.
- https://rafalmalyszko.net/api/health zwraca `"ai":"online"`.
- Asystent AI odpowiada. Pytanie spoza gotowych odpowiedzi, np. „Jak podchodzisz do code review?”, idzie do modelu.
- Odświeżenie strony na `/experience` nie daje błędu 404.

---

## Aktualizacje

**Nowa wersja kodu** (po `git push` z Twojego komputera):

```bash
ssh rafal@IP_SERWERA
cd /srv/portfolio
bash deploy/update.sh
```

**Zmiana danych o doświadczeniu** (edytujesz lokalnie `content/portfolio.json`):

```powershell
scp C:\Users\nowak\AllProjects\Portfolio\Portfoliov2\content\portfolio.json rafal@IP_SERWERA:/srv/portfolio/content/
ssh rafal@IP_SERWERA "sudo systemctl restart portfolio"
```

Serwer wczytuje dane przy starcie, dlatego potrzebny jest restart.

## Gdy coś nie działa

| Objaw                                         | Co sprawdzić                                                                        |
| --------------------------------------------- | ----------------------------------------------------------------------------------- |
| 502 Bad Gateway                               | Aplikacja nie działa: `systemctl status portfolio`, `journalctl -u portfolio -n 50` |
| `Portfolio content not found` w logach        | Brak `/srv/portfolio/content/portfolio.json`, skopiuj go `scp`                      |
| Asystent: „chwilowo niedostępny”              | `systemctl status ollama`, `ollama list` (czy jest `qwen2.5:3b`)                    |
| Odpowiedzi AI pojawiają się dopiero w całości | W konfiguracji nginx brakuje `proxy_buffering off` dla `/api/chat`                  |
| Pusta kula 3D                                 | Konsola przeglądarki (F12): szukaj błędów „Content Security Policy”                 |

## Bezpieczeństwo danych

`content/portfolio.json` nie trafia do repozytorium, bo jest w `.gitignore`. Wszystko, co strona pokazuje, jest jednak publiczne dla odwiedzających: każdy może otworzyć `/api/experience`. Ten układ chroni tylko przed udostępnianiem danych w publicznym kodzie na GitHubie.

Kopię zapasową `content/portfolio.json` trzymaj poza repo, np. na prywatnym dysku. Na GitHubie jej nie ma.
