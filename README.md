## Massive Shoes Cup

This is a finished technical test, which are used in the recruitment process for Software Development. The original brief is underneath

### Install & run

1. #### Clone & install dependencies

If you have use a working directory, change to it then run

```bash
git clone https://github.com/listingslab/massive-shoes-cup
cd massive-shoes-cup && npm run setup
```

2. #### Create & Seed Database 

If you don't already have one you'll need a Postgres Server which you can get from **[enterprisedb](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)**. Create a new database called **`massive_shoes_cup`**. Using **[pg_restore](https://www.postgresql.org/docs/current/app-pgrestore.html)** from the file `/backend/sql/massive_shoes_cup.sql` _should_ produce a single table called **events** with 5 rows of data. Next you might need to adjust the connection settings in **[/backend/src/db.ts](/backend/src/db.ts)**

```javascript
const pgConfig: PoolShape = {
  user: 'postgres',
  password: '',
  host: 'localhost',
  database: 'massive_shoes_cup',
  port: 5432,
}
```

3. #### Start API

Assume that all npm commands are run from the project root. To start the API and expose the endpoint the frontend will connect to, run `npm run api`. This should yield the desired endpoint at http://localhost:4000/api/events/. If not, or if you want to make changes to the code you'll want to turn on the TypeScript compiler by running `npm run api:dev`. With nodemon taking care of reloading the app on change, the dev environment is easy to use

4. #### Start Frontend

run `npm start`. The react app should open automatically http://localhost:3000, connect to the endpoint and display the events as specs. If there are connection problems or errors these will be shown as meaningful error notifications in the app for easy debugging

5. #### QA

Try the following network scenarios

- Start api first, then frontend, RESET
- Turn off the API and click RESET in the app
- Turn off the Postgres server, but have the API running, RESET app

![massive shoes](frontend/public/massive-shoes.webp)

___

## Full-Stack Developer Assignment

Online Betting Dashboard Objective: Develop a simple online betting dashboard that displays a list of sports events, the corresponding odds for the events, and allows users to place bets. Use Node.js, PostgreSQL, React, and TypeScript for this assignment


1. #### Backend (Node.js with PostgreSQL)  

Connect the server with a PostgreSQL database. Create a table for sports events with the following columns: event_id (Primary Key) event_name (e.g., “Soccer: Team A vs. Team B”) odds (Decimal value, e.g., “1.75") Seed the database with 5 sample sports events. [massive_shoes_cup.sql](backend/sql/massive_shoes_cup.sql). Implement an API endpoint /api/events to fetch all the sports events [backend/src/index.ts](backend/src/index.ts)

2. #### Frontend (React with TypeScript) 

Fetch and display the list of sports events from the API. Beside each event, show a button or link to place a bet. 

When the “place bet” option is clicked, it should open a modal or a new component to input the bet amount. No need for actual payment or confirmation – just a simple acknowledgment like “Bet placed successfully!“.

### Requirements

1. Use TypeScript for both frontend and backend. [types.d.ts](types.d.ts)
2. Style the dashboard minimally with CSS or any CSS framework of your choice. 
3. Pay attention to error handling (e.g., database connection issues, fetching API). 
4. Write clear and maintainable code. 
5. Include a README with instructions to set up and run the application.
Bonus (optional): Implement simple authentication to the system.
