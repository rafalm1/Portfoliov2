# Wdrożenie na Netlify

Portfolio składa się z dwóch stron na Netlify

| Strona                              | Projekt       | Co to jest                                                    |
| ----------------------------------- | ------------- | ------------------------------------------------------------- |
| https://rafalmalyszko.netlify.app   | `Portfoliov3` | Laptop 3D, czyli strona, którą widzą odwiedzający             |
| https://rafalmalyszkov2.netlify.app | `Portfoliov2` | Ta strona, wyświetlana w ramce (iframe) na ekranie laptopa 3D |

**Ta instrukcja wdraża `Portfoliov2` na `rafalmalyszkov2`.** Laptop 3D od razu pokaże nową wersję, bez żadnych zmian w `Portfoliov3`.

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

Otworzy się przeglądarka. Kliknij **Authorize** na koncie, na którym masz obie strony.

### 2. Podłącz projekt do strony `rafalmalyszkov2`

```powershell
npx netlify-cli link --name rafalmalyszkov2
```

Uważaj, żeby to było **`rafalmalyszkov2`**, a nie `rafalmalyszko` (to laptop 3D). Jeśli terminal nie znajdzie strony, uruchom samo `npx netlify-cli link` i wybierz ją z listy. Powstanie folder `.netlify/`, który git ignoruje.

### 3. Wyłącz automatyczne budowanie z GitHuba (przeglądarka)

```powershell
npx netlify-cli open:admin
```

Otworzy się panel strony `rafalmalyszkov2`. Stara v2 najpewniej budowała się automatycznie z repo `Portfoliov2` na GitHubie. Gdyby tak zostało, Netlify po każdym `git push` próbowałby zbudować stronę bez `content/portfolio.json`.

Wejdź w **Site configuration → Build & deploy → Continuous deployment** i kliknij **Stop builds**. Jeśli nie ma tam podpiętego repo, nic nie rób.

Ustawień strony `rafalmalyszko` (laptop 3D) nie zmieniasz. Może dalej budować się z repo `Portfoliov3`.

### 4. Wdrożenie próbne (podgląd)

```powershell
npm run deploy:preview
```

Na końcu dostaniesz **Draft URL** w stylu `https://<coś>--rafalmalyszkov2.netlify.app`. To podgląd, a obecna strona się nie zmienia. Sprawdź na nim:

- stronę główną i przełączanie PL/EN,
- zakładkę **Doświadczenie** (dane muszą się wczytać),
- zakładkę **Umiejętności** (kula 3D),
- odświeżenie strony na `/experience` (ma nie być błędu 404).

### 5. Wdrożenie na produkcję

```powershell
npm run deploy
```

Od teraz nowa wersja jest pod https://rafalmalyszkov2.netlify.app, a laptop 3D na https://rafalmalyszko.netlify.app pokazuje ją na ekranie. Odśwież laptopa z Ctrl+F5, żeby przeglądarka nie pokazała starej wersji z pamięci.

**Wycofanie zmian:** uruchom `npx netlify-cli open:admin`, w zakładce **Deploys** kliknij poprzednie wdrożenie (stara v2), a potem **Publish deploy**. Wraca w kilka sekund.

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
