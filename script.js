const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
  user: "nxqbaghoqakvjm",
password: "f55dc50a02892d0619215c01f52f6fd5b4cdddd394ddb658e66bd758b67d2731",
database: "d7g3scrduqgu2c",
port: 5432,
host: "water-my-plants-app-team132.herokuapp.com",
});

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  });

