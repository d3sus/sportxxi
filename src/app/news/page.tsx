"use client";

import { NextPage } from "next";
import { useState } from "react";
import s from "./page.module.scss";
import NewsCard from "@/components/newsCard/NewsCard";

const data = [
  {
    title: "Лига чемпионов: Победа Манчестер Сити",
    date: "2024-12-10",
    filter: "football",
    id: "1",
  },
  {
    title: "НБА: Леброн Джеймс набирает 40 очков",
    date: "2024-12-11",
    filter: "basketball",
    id: "2",
  },
  {
    title: "Киберспорт: NAVI побеждают в финале",
    date: "2024-12-09",
    filter: "esports",
    id: "3",
  },
  {
    title: "Футбол: Реал Мадрид объявляет новый состав",
    date: "2024-12-08",
    filter: "football",
    id: "4",
  },
  {
    title: "Баскетбол: Финал Евролиги",
    date: "2024-12-07",
    filter: "basketball",
    id: "5",
  },
  {
    title: "Киберспорт: Обзор турнира по Dota 2",
    date: "2024-12-06",
    filter: "esports",
    id: "6",
  },
  {
    title: "Общие новости спорта",
    date: "2024-12-05",
    filter: "all",
    id: "7",
  },
];

const Page: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className={s.news}>
      <input className={s.news__input} placeholder="Поиск по новостям" value={searchQuery} onChange={handleSearchChange} />

      {filteredData.map((elem, index) => (
        <NewsCard key={index} title={elem.title} date={elem.date} id={elem.id} filter={elem.filter} />
      ))}
    </div>
  );
};

export default Page;
