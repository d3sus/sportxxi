const express = require("express");
const pool = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/news", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM news");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/news/add", async (req, res) => {
  const { title, url, date, filter, text } = req.body;

  if (!title || !url || !date || !filter || !text) {
    return res.status(400).json({ error: "Missing parameter" });
  }
  try {
    const result = await pool.query("INSERT INTO news (title, date, filter, url, text ) VALUES ($1, $2, $3, $4, $5) RETURNING *", [
      title,
      date,
      filter,
      url,
      text,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/news/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query(`SELECT * FROM news WHERE id = ${id}`);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/articles", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM articles");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post("/articles/add", async (req, res) => {
  const { title, author, subtitle, text } = req.body;

  if (!title || !author || !subtitle || !text) {
    return res.status(400).json({ error: "Missing parameter" });
  }
  try {
    const result = await pool.query("INSERT INTO articles (title, subtitle, author, text) VALUES ($1, $2, $3, $4) RETURNING *", [
      title,
      subtitle,
      author,
      text,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get("/article/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query(`SELECT * FROM articles WHERE id = ${id}`);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/photos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM photos");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/photos/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query(`SELECT * FROM photos WHERE id = ${id}`);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/photos/add", async (req, res) => {
  const { title, src, category } = req.body;

  if (!title || !src || !category) {
    return res.status(400).json({ error: "Missing parameter" });
  }
  try {
    const result = await pool.query("INSERT INTO photos (title, src, category) VALUES ($1, $2, $3) RETURNING *", [title, src, category]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/matches/add", async (req, res) => {
  const { date, category, team1, score1, score2, team2, status } = req.body;

  if (!date || !category || !team1 || !team2 || score1 === undefined || score2 === undefined || !status) {
    return res.status(400).send("Все поля обязательны.");
  }

  try {
    const query = `
      INSERT INTO matches (date, category, team1, score1, score2, team2, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [date, category, team1, score1, score2, team2, status];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Ошибка при добавлении записи:", error);
    res.status(500).send("Ошибка сервера.");
  }
});

app.get("/matches", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM matches");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5500;

app.listen(PORT, () => {});
