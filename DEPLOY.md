# Wdrożenie na Netlify

Strona działa na Netlify (https://rafalmalyszko.netlify.app) za darmo:

- **Frontend** to zbudowane pliki z `dist/`.
- **Dane o doświadczeniu** wysyła funkcja Netlify `netlify/functions/experience.ts` pod adresem `/api/experience`.
- **Asystent AI jest ukryty.** Kod zostaje w repo, włącza się zmienną `VITE_AI_ASSISTANT=true`. Wersja z asystentem wymaga serwera, zobacz [deploy/VPS.md](deploy/VPS.md).

**Ważne:** `content/portfolio.json` nie jest na GitHubie, dlatego stronę wdrażasz **ze swojego komputera** komendą `npm run deploy`, a nie automatycznie z GitHuba. Netlify CLI buduje stronę lokalnie i dołącza dane do funkcji.

---

## Pierwsze wdrożenie (jednorazowo)

Wszystkie komendy uruchamiasz w folderze `Portfoliov2` (PowerShell albo terminal w VS Code).

### 1. Zaloguj się do Netlify

```powershell
npx netlify-cli login
```

Otworzy się przeglądarka. Zaloguj się tym samym kontem, na którym jest `rafalmalyszko.netlify.app`.

### 2. Podłącz projekt do istniejącej strony

```powershell
npx netlify-cli link
```

Wybierz opcję z listy stron (np. „Search by full or partial project name”) i wskaż stronę `rafalmalyszko`. Powstanie folder `.netlify/`, który git ignoruje.

### 3. Wyłącz automatyczne budowanie z GitHuba

Obecna strona (laptop 3D) najpewniej buduje się automatycznie z repo `Portfoliov3`. Gdyby tak zostało, każdy push do `Portfoliov3` nadpisałby nową stronę starą.

W panelu Netlify: **Site configuration → Build & deploy → Continuous deployment**, a potem **Stop builds** albo **Unlink repository**.

### 4. Wdrożenie próbne (podgląd)

```powershell
npm run deploy:preview
```

Na końcu dostaniesz link w stylu `https://<coś>--rafalmalyszko.netlify.app`. To podgląd, a obecna strona się nie zmienia. Sprawdź na nim:

- stronę główną i przełączanie PL/EN,
- zakładkę **Doświadczenie** (dane muszą się wczytać),
- zakładkę **Umiejętności** (kula 3D),
- odświeżenie strony na `/experience` (ma nie być błędu 404).

### 5. Wdrożenie na produkcję

```powershell
npm run deploy
```

Od teraz pod https://rafalmalyszko.netlify.app jest nowa strona.

**Wycofanie zmian:** w panelu Netlify w zakładce **Deploys** kliknij poprzednie wdrożenie (stary laptop 3D), a potem **Publish deploy**. Wraca w kilka sekund.

---

## Kolejne aktualizacje

Zmieniłeś kod albo `content/portfolio.json`? Wystarczy:

```powershell
npm run deploy
```

Jeśli chcesz najpierw podejrzeć zmiany, uruchom `npm run deploy:preview`.

`git push` na GitHuba nie wdraża strony, tylko zapisuje kod. Wdrożenie to zawsze `npm run deploy`.

---

## Gdy coś nie działa

| Objaw                                                          | Co sprawdzić                                                                        |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Błąd przy `deploy`: nie można znaleźć `content/portfolio.json` | Plik musi istnieć lokalnie w `Portfoliov2/content/`. Przywróć go z kopii zapasowej. |
| „Nie udało się wczytać doświadczenia”                          | Panel Netlify → **Logs → Functions → experience**                                   |
| Po odświeżeniu podstrony błąd 404                              | Czy `netlify.toml` jest w folderze, z którego robisz deploy                         |
| Na stronie pojawiła się stara wersja                           | Czy na pewno wyłączyłeś budowanie z GitHuba (krok 3)                                |

## Kopia zapasowa danych

`content/portfolio.json` istnieje **tylko na Twoim komputerze**. Trzymaj jego kopię w bezpiecznym miejscu, np. na prywatnym dysku w chmurze. Bez niego nie zrobisz kolejnego wdrożenia.

Wszystko, co pokazuje strona, jest publiczne dla odwiedzających: każdy może otworzyć `/api/experience`. Ten układ chroni tylko przed publikowaniem danych w kodzie na GitHubie.
