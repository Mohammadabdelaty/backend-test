const pool = require('./index');

// Create the table if it doesn’t exist with necessary colomns
async function initArticleTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS articles (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      body TEXT NOT NULL,
      published BOOLEAN DEFAULT false,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(query);
}

// Insert a new article without id and created_at (auto-generated) by pg
async function createArticle({ title, body, published }) {
  const result = await pool.query(
    `INSERT INTO articles (title, body, published) VALUES ($1, $2, $3) RETURNING *`,
    [title, body, published]
  );
  return result.rows[0];
}

// Get all articles
async function getArticles() {
  const result = await pool.query(`SELECT * FROM articles ORDER BY id DESC`);
  return result.rows;
}

module.exports = {
  initArticleTable,
  createArticle,
  getArticles,
};