const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

var app = express();

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    var result = await client.query('SELECT * FROM test_table');   
   
    if (!result) {
      return res.send('No data found');
      }else{
      result.rows.forEach(row=>{
      console.log(row);
      }); 
      }

  res.render('pages/db', {'data': result.rows});
  client.release();

  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

app.get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  




