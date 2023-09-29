## Massive Shoes Cup

### Install & Use

1. #### Clone & install dependencies

```bash
cd <your-working-dir>
git clone https://github.com/listingslab/massive-shoes-cup
cd massive-shoes-cup && npm run setup
```

2. #### Create & Seed Database 

If you don't already have one you'll need a Postgres Server which you can get from **[enterprisedb](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)**. Create a new database called `massive_shoes_cup`. Using **[pg_restore](https://www.postgresql.org/docs/current/app-pgrestore.html)** from the file `/backend/sql/massive_shoes_cup.sql` _should_ produce a single table called **events** with 5 rows of data. Next you might need to adjust the connection settings in **[/backend/src/db.ts](/backend/src/db.ts)**

```javascript
const pgConfig: PoolShape = {
  user: 'postgres',
  password: '',
  host: 'localhost',
  database: 'massive_shoes_cup',
  port: 5432,
}
```

3. #### Start the API

```bash
cd <your-working-dir>/massive_shoes_cup && npm run api
```

This should yield an endpoint at http://localhost:4000/api/events. 

