"use client";
import { NextPage } from "next";
import s from "./page.module.scss";
import { useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [newsUrl, setNewsUrl] = useState();
  const [newsTitle, setNewsTitle] = useState();
  const [newsDate, setNewsDate] = useState();
  const [newsFilter, setNewsFilter] = useState();
  const [newsText, setNewsText] = useState();
  const [newsMessage, setNewsMessage] = useState();
  const addNews = async (url, title, date, filter, text) => {
    try {
      const response = await fetch("http://localhost:5500/news/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, title, date, filter, text }),
      });
      if (response.ok) {
        const result = await response.json();
        setNewsMessage(`News added successfully! ID: ${result.id}`);
        setNewsTitle("");
        setNewsUrl("");
        setNewsDate("");
        setNewsText("");
        setNewsFilter("");
      } else {
        const error = await response.json();
        setNewsMessage(`Error: ${error.error || "Failed to add news"}`);
      }
    } catch (err) {
      setNewsMessage(`Error: ${err.message}`);
    }
  };

  const [articleTitle, setArticleTitle] = useState();
  const [articleSubtitle, setArticleSubtitle] = useState();
  const [articleAuthor, setArticleAuthor] = useState();
  const [articleText, setArticleText] = useState();
  const [articleMessage, setArticleMessage] = useState();

  const addArticle = async (title, subtitle, author, text) => {
    try {
      // Разбиваем текст на абзацы
      const paragraphs = text
        .split("\n")
        .filter((line) => line.trim() !== "") // Убираем пустые строки
        .map((line) => `<p>${line.trim()}</p>`); // Обрезаем пробелы и оборачиваем в <p>

      // Объединяем абзацы в единую строку
      const formattedText = paragraphs.join("");

      const response = await fetch("http://localhost:5500/articles/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, subtitle, author, text: formattedText }),
      });

      if (response.ok) {
        const result = await response.json();
        setArticleMessage(`News added successfully! ID: ${result.id}`);
        setArticleTitle("");
        setArticleSubtitle("");
        setArticleAuthor("");
        setArticleText("");
      } else {
        const error = await response.json();
        setArticleMessage(`Error: ${error.error || "Failed to add news"}`);
      }
    } catch (err) {
      setArticleMessage(`Error: ${err.message}`);
    }
  };

  const [photoTitle, setPhotoTitle] = useState();
  const [photoCategory, setPhotoCategory] = useState();
  const [photoSrc, setPhotoSrc] = useState();
  const [photoMessage, setPhotoMessage] = useState();

  const addPhoto = async (title, category, src) => {
    try {
      const response = await fetch("http://localhost:5500/photos/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, category, src }),
      });
      if (response.ok) {
        const result = await response.json();
        setPhotoMessage(`News added successfully! ID: ${result.id}`);
        setPhotoTitle("");
        setPhotoSrc("");
        setPhotoCategory("");
      } else {
        const error = await response.json();
        setPhotoMessage(`Error: ${error.error || "Failed to add news"}`);
      }
    } catch (err) {
      setPhotoMessage(`Error: ${err.message}`);
    }
  };

  const [tableDate, setTableDate] = useState();
  const [tableCategory, setTableCategory] = useState();
  const [tableTeam1, setTableTeam1] = useState();
  const [tableTeam2, setTableTeam2] = useState();
  const [tableScore1, secTableScore1] = useState();
  const [tableScore2, secTableScore2] = useState();
  const [tableStatus, setTableStatus] = useState();
  const [tableMessage, setTableMessage] = useState();

  const addTableRow = async (date, category, team1, team2, score1, score2, status) => {
    try {
      const response = await fetch("http://localhost:5500/matches/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, category, team1, team2, score1, score2, status }),
      });
      if (response.ok) {
        const result = await response.json();
        setTableMessage(`Row added successfully! ID: ${result.id}`);
        setTableDate("");
        setTableCategory("");
        setTableTeam1("");
        setTableTeam2("");
        secTableScore1("");
        secTableScore2("");
        setTableStatus("");
      } else {
        const error = await response.json();
        setTableMessage(`Error: ${error.error || "Failed to add row"}`);
      }
    } catch (err) {
      setTableMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div className={s.Page}>
      <div className={s.Page__block}>
        <h2 className={s.Page__block__title}>Добавить запись в Новости</h2>
        <div className={s.Page__block__wrapper}>
          <div className={s.Page__block__wrapper__input}>
            <p>Ссылка на фотографию</p>
            <input placeholder="url" className={s.Page__block__input} value={newsUrl} onChange={(e) => setNewsUrl(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Название новости</p>
            <input placeholder="title" className={s.Page__block__input} value={newsTitle} onChange={(e) => setNewsTitle(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Дата новости</p>
            <input placeholder="date" className={s.Page__block__input} value={newsDate} onChange={(e) => setNewsDate(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Категория новости</p>
            <input placeholder="filter" className={s.Page__block__input} value={newsFilter} onChange={(e) => setNewsFilter(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Текст новости</p>
            <p><textarea placeholder="text" className={s.Page__block__input} value={newsText} onChange={(e) => setNewsText(e.target.value)} /></p>
          </div>
          <button className={s.Page__block__button} onClick={() => addNews(newsUrl, newsTitle, newsDate, newsFilter, newsText)}>
            Добавить запись
          </button>
          <span>{newsMessage}</span>
        </div>
      </div>
      <div className={s.Page__block}>
        <h2 className={s.Page__block__title}>Добавить запись в Статьи</h2>
        <div className={s.Page__block__wrapper}>
          <div className={s.Page__block__wrapper__input}>
            <p>Название статьи</p>
            <input placeholder="title" className={s.Page__block__input} value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Подзаголовок статьи</p>
            <input
              placeholder="subtitle"
              className={s.Page__block__input}
              value={articleSubtitle}
              onChange={(e) => setArticleSubtitle(e.target.value)}
            />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Автор Статьи</p>
            <input placeholder="author" className={s.Page__block__input} value={articleAuthor} onChange={(e) => setArticleAuthor(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Текст статьи</p>
            <p><textarea placeholder="text" className={s.Page__block__input} value={articleText} onChange={(e) => setArticleText(e.target.value)} /></p>
          </div>
          <button className={s.Page__block__button} onClick={() => addArticle(articleTitle, articleSubtitle, articleAuthor, articleText)}>
            Добавить запись
          </button>
          <span>{articleMessage}</span>
        </div>
      </div>
      <div className={s.Page__block}>
        <h2 className={s.Page__block__title}>Добавить запись в Фото</h2>
        <div className={s.Page__block__wrapper}>
          <div className={s.Page__block__wrapper__input}>
            <p>Название фотографии</p>
            <input placeholder="title" className={s.Page__block__input} value={photoTitle} onChange={(e) => setPhotoTitle(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Ссылка на фото</p>
            <input placeholder="url" className={s.Page__block__input} value={photoSrc} onChange={(e) => setPhotoSrc(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Категория фотографии</p>
            <input placeholder="category" className={s.Page__block__input} value={photoCategory} onChange={(e) => setPhotoCategory(e.target.value)} />
          </div>
          <button className={s.Page__block__button} onClick={() => addPhoto(photoTitle, photoCategory, photoSrc)}>
            Добавить запись
          </button>
          <span>{photoMessage}</span>
        </div>
      </div>
      <div className={s.Page__block}>
        <h2 className={s.Page__block__title}>Добавить запись в таблицу Результаты</h2>
        <div className={s.Page__block__wrapper}>
          <div className={s.Page__block__wrapper__input}>
            <p>Дата игры</p>
            <input placeholder="date" type="date" className={s.Page__block__input} value={tableDate} onChange={(e) => setTableDate(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Категория игры</p>
            <input placeholder="category" className={s.Page__block__input} value={tableCategory} onChange={(e) => setTableCategory(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Название команды 1</p>
            <input placeholder="team1" className={s.Page__block__input} value={tableTeam1} onChange={(e) => setTableTeam1(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Название команды 2</p>
            <input placeholder="team2" className={s.Page__block__input} value={tableTeam2} onChange={(e) => setTableTeam2(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Счет команды 1</p>
            <input placeholder="score1" className={s.Page__block__input} value={tableScore1} onChange={(e) => secTableScore1(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Счет команды 2</p>
            <input placeholder="score2" className={s.Page__block__input} value={tableScore2} onChange={(e) => secTableScore2(e.target.value)} />
          </div>
          <div className={s.Page__block__wrapper__input}>
            <p>Статус игры</p>
            <input placeholder="status" className={s.Page__block__input} value={tableStatus} onChange={(e) => setTableStatus(e.target.value)} />
          </div>

          <button
            className={s.Page__block__button}
            onClick={() => addTableRow(tableDate, tableCategory, tableTeam1, tableTeam2, tableScore1, tableScore2, tableStatus)}
          >
            Добавить запись
          </button>
          <span>{tableMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
