const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const session = require('express-session');

const corsoptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsoptions)); 

app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'stage'
});

connection.connect();

app.get("/test", (req, res) => {
  res.send("Hello World");
});

app.get('/chart', (req, res) => {
  connection.query('SELECT * FROM chart', function (error, results, fields) {
    if (error) {
      console.log('Error: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

app.get('/affaire', (req, res) => {
  connection.query('SELECT id,sum(prix_unitaire*qte_vendu) as affaire,anne FROM affaire GROUP BY anne ', function (error, results, fields) {
    if (error) {
      console.log('Error: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

app.get('/affichage', (req, res) => {
  connection.query('SELECT * FROM affaire order by anne', function (error, results, fields) {
    if (error) {
      console.log('Error: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

app.get('/globalsells', (req, res) => {
  connection.query('SELECT sum(prix_unitaire*qte_vendu) as tot_earns,sum(qte_vendu) as total_vendu FROM affaire', function (error, results, fields) {
    if (error) {
      console.log('Error: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

app.get('/bestseller', (req, res) => {
  connection.query('SELECT libelle,qte_vendu,sum(qte_vendu) as totalsells FROM affaire where qte_vendu=(select max(qte_vendu)from affaire)', function (error, results, fields) {
    if (error) {
      console.log('Error: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

app.get('/soldproducts', (req, res) => {
  connection.query('SELECT sum(qte_vendu) as quantity FROM affaire', function (error, results, fields) {
    if (error) {
      console.log('Error: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

app.get('/client', (req, res) => {
  connection.query('SELECT count(*) as nbr_client FROM client', function (error, results, fields) {
    if (error) {
      console.log('Error: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

app.get('/comptes', (req, res) => {
  connection.query('SELECT * FROM compte where nom !="admin" and id!=1', function (error, results, fields) {
    if (error) {
      console.log('Error: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

app.delete('/admin/:id', (req, res) => {
  const accountId = req.params.id;

  // Execute the DELETE query to delete the account with the specified ID
  const queryString = 'DELETE FROM compte WHERE id = ?';
  connection.query(queryString, [accountId], (error, results, fields) => {
    if (error) {
      console.log('Error: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      // Account successfully deleted
      res.status(200).send('Account deleted successfully');
    }
  });
});

app.get('/stock', (req, res) => {
  connection.query('SELECT nom,prix,description,quantité as qnt FROM produit', function (error, results, fields) {
    if (error) {
      console.log('Error: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});
app.post('/register', (req, res) => {
  const { nom, prenom, date_n, mail, mdp } = req.body;

  // Assuming 'compte' is the table for user accounts
  const queryString = 'INSERT INTO compte (nom, prenom, date_n, mail, mdp, status) VALUES (?, ?, ?, ?, ?,"Delete")';
  connection.query(queryString, [nom, prenom, date_n, mail, mdp], function (error, results, fields) {
    if (error) {
      console.log('Error: ', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('User registered successfully');
    }
  });
});

app.post('/login', (req, res) => {
  const { mail, passwd } = req.body;

  const queryString = 'SELECT * FROM compte WHERE mail = ? AND mdp = ?';
  connection.query(queryString, [mail, passwd], function (error, results, fields) {
      if (error) {
          console.log('Error: ', error);
          res.status(500).send('Internal Server Error');
      } else if (results.length === 1) {
          req.session.isLoggedIn = true;
          req.session.user = { mail };

          // Check if the user is admin
          const isAdmin = mail === 'admin';
          res.status(200).json({ isAdmin }); // Send isAdmin flag in the response
      } else {
          res.status(401).send('Invalid email or password');
      }
  });
});

app.post('/logout', (req, res) => {
  req.session.destroy((error) => {
      if (error) {
          console.log('Error: ', error);
          res.status(500).send('Internal Server Error');
      } else {
          res.status(200).send('Logout successful');
      }
  });
});


app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
