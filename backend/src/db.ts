import {PoolShape} from "../../types"
const {Pool} = require('pg')

const pgConfig: PoolShape = {
  user: 'postgres',
  host: 'localhost',
  database: 'massive_shoes',
  password: '',
  port: 5432,
}

const postgresDB = new Pool(pgConfig)
// console.log("hey.", postgresDB)
module.exports = postgresDB
