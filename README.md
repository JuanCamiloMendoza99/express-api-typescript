# express-api-typescript

Learning repo — a small REST API in **Express + TypeScript**, built to practise typing an
HTTP layer end to end (the classic "flight diaries" exercise).

## What it demonstrates

- **Typed domain model** — `DiaryEntry` with `Weather` and `Visibility` enums.
- **Derived types instead of duplicated ones** — `Omit<DiaryEntry, "comment">` for the
  public view and `Omit<DiaryEntry, "id">` for the create payload, so the shapes can't
  drift apart.
- **Runtime validation at the edge** — `toNewDiaryEntry` parses `req.body` (which is
  `any` no matter what TypeScript believes) into a validated object, throwing a typed
  error the route turns into a 400.
- **Layering** — routes → services → data, with no business logic in the router.

## Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/ping` | Health check |
| `GET` | `/api/diaries` | All entries, without the sensitive `comment` field |
| `GET` | `/api/diaries/:id` | One entry, or `404` |
| `POST` | `/api/diaries` | Create an entry; `400` with a message if the body is invalid |

## Running it

```bash
npm install
npm run dev     # ts-node-dev on http://localhost:3000
npm run tsc     # type-check and build to build/
npm start       # run the compiled build
```

## Stack

TypeScript · Express · ts-node-dev · ts-standard
