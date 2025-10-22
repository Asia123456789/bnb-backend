# 🏡 BNB Backend

Detta är backend-delen för BNB-projektet, byggd med **TypeScript**, **Hono**, och **Supabase**.  
Projektet hanterar användare, boenden (listings) och bokningar (bookings) via ett REST API.

---

## 🚀 Teknisk översikt

**Teknologier som används:**
- Node.js + TypeScript
- Hono (Express-liknande framework)
- Supabase (PostgreSQL + Auth)
- Dotenv (för miljövariabler)
- ts-node (för att köra TypeScript direkt)

---

## 📁 Projektstruktur

bnb-backend/
│
├── src/
│   ├── data/
│   │   ├── schema.sql
│   │   ├── relations.sql
│   │   ├── policies.sql
│   │   └── seed.sql
│   │
│   ├── config/
│   │   └── supabaseClient.ts
│   │
│   ├── routes/
│   │   └── (kommer senare)
│   │
│   ├── index.ts
│   └── ...
│
├── .env
├── package.json
├── tsconfig.json
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Klona repot
```bash
git clone <din-repo-url>
cd bnb-backend

 2️⃣ Installera beroenden
npm install

3️⃣ Skapa en .env-fil i projektroten

Fyll i din Supabase-info:

SUPABASE_URL=https://<ditt-projekt>.supabase.co
SUPABASE_ANON_KEY=<din-anon-key>
PORT=3000

🧠 SQL-struktur

Alla SQL-filer finns i src/data/ och används för att sätta upp databasen i Supabase.

Fil	Funktion
schema.sql	Skapar tabeller
relations.sql	Lägger till relationer och index
policies.sql	Hanterar säkerhetspolicies (RLS)
seed.sql	Innehåller testdata
Så här kör du dem i Supabase:

Gå till Supabase

Öppna ditt projekt

Gå till SQL Editor

Klistra in innehållet från varje .sql-fil i följande ordning:

schema.sql

relations.sql

policies.sql

seed.sql

Kör skripten ett i taget

🧩 Supabase

Projektet använder Supabase som databas och autentiseringstjänst.

Tabeller:

listings → representerar boenden

bookings → representerar bokningar

Relationer:

En listing ägs av en användare (owner_id)

En booking tillhör både en användare (user_id) och en listing (listing_id)

🧰 Utveckling

Starta utvecklingsservern:

npm run dev


Servern startar på: http://localhost:3000

💾 Git & Versionhantering

Första committen:

chore: initial backend setup with Hono + Supabase integration

📌 Nästa steg

Skapa routes för listings och bookings

Implementera autentisering med Supabase Auth

Lägg till testdata från seed.sql

Lägg till dokumentation för API-endpoints i README

👨‍🏫 Projektinformation

Kurs: Backend 2 – Nackademin

Lärare: Jonatan Vahlberg

Student: [Ditt namn här]

Inlämningsuppgift: BNB Backend API

Status: Backend-grund klar (Supabase + server igång)