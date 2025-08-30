const express = require('express');
const { initArticleTable, createArticle, getArticles } = require('./models/article');

const app = express();
app.use(express.json());

// Initialize DB
(async () => {
  try {
    await initArticleTable();
    console.log('✅ Database connected & table ready.');
  } catch (err) {
    console.error('❌ Error initializing DB:', err);
  }
})();

// Routes
app.post('/articles', async (req, res) => {
  try {
    const article = await createArticle(req.body);
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/articles', async (req, res) => {
  try {
    const articles = await getArticles();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('🚀 Server running on port 3000'));