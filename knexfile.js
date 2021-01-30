// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/plantsApp.db3'
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: { 
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
    pool: {
      min: 2,
      max: 10
    },
    
},
staging: {
  client: 'postgresql',
  connection: {
    database: 'plantsAPP',
    user:     'username',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
},
testing: {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: '.data/testDB.db3'
  },
  migrations: {
    directory: "./data/migrations"
  },
  seeds: {
    directory: "./data/seeds"
  },
}
  

};
