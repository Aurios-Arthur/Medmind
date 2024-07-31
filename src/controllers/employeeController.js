const db = require('../database');

// Cria um novo funcionário
exports.create = (req, res) => {
  const { name, position, email, password } = req.body;

  const query = 'INSERT INTO employees (name, position, email, password) VALUES (?, ?, ?, ?)';
  const values = [name, position, email, password];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Erro ao criar funcionário:', err);
      res.status(500).send('Erro ao criar funcionário');
      return;
    }
    res.status(201).send(`Funcionário ${name} criado com sucesso!`);
  });
};
