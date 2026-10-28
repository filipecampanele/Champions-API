# ⚽ Champions League API

API REST com **Node.js + TypeScript + Express**, organizada em camadas
(routes → controllers → services → repositories → data).

## Rodando
```bash
npm install
npm run start:dev
```

## Endpoints

| Método | Rota             | Descrição                              |
|--------|------------------|----------------------------------------|
| GET    | `/api/players`       | Lista todos os jogadores               |
| GET    | `/api/players/:id`   | Busca jogador por id                   |
| POST   | `/api/players`       | Cadastra um jogador                    |
| PATCH  | `/api/players/:id`   | Atualiza estatísticas (`{"statistics": {...}}`) |
| DELETE | `/api/players/:id`   | Remove um jogador                      |
| GET    | `/api/clubs`         | Lista clubes (lidos de `clubs.json`)   |

Exemplo de POST:
```json
{
  "id": 6,
  "name": "Erling Haaland",
  "club": "Manchester City",
  "nationality": "Norway",
  "position": "Striker",
  "statistics": { "overall": 91, "pace": 89, "shooting": 93, "passing": 66, "dribbling": 80, "defending": 45, "physical": 88 }
}
```
