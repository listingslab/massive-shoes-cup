import {PoolShape} from "../../types"
const {Pool} = require('pg')

const pgConfig: PoolShape = {
  user: 'listingslab',
  password: 'test123',
  host: 'localhost',
  database: 'massive_shoes_cup',
  port: 5433,
}

const postgresDB = new Pool(pgConfig)
module.exports = postgresDB
