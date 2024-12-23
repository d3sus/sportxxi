"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import s from "./page.module.scss";
import ArticleCard from "@/components/articleCard/ArticleCard";

interface Article {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  text: string;
}

// const articles: Article[] = [
//   { id: "1", title: "React Basics", subtitle: "Getting started with React", author: "Вася", text: "Какой-то текст" },
//   { id: "2", title: "Next.js Guide", subtitle: "Learn Next.js step by step", author: "Петя", text: "Какой-то текст" },
//   { id: "3", title: "TypeScript Tips", subtitle: "Advanced TypeScript features", author: "Толя", text: "Какой-то текст" },
//   { id: "4", title: "CSS Tricks", subtitle: "Mastering layouts and animations", author: "Воля", text: "Какой-то текст" },
//   {
//     id: "4",
//     title: "CSS Tricks",
//     subtitle: "Mastering layouts and animations",
//     author: "Воля",
//     text: "Какой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текстКакой-то текст",
//   },
// ];

const Page: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const fetching = async () => {
    const response = await fetch("http://localhost:5500/articles");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetching();
  }, []);

  const filteredArticles = data.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={s.Page}>
      <input className={s.Page__input} placeholder="Поиск по статьям" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article) => (
          <ArticleCard
            text={article.text}
            key={article.id}
            title={article.title}
            subtitle={article.subtitle}
            author={article.author}
            id={article.id}
          />
        ))
      ) : (
        <p className={s.Page__noResults}>Статей не найдено</p>
      )}
    </div>
  );
};

export default Page;
