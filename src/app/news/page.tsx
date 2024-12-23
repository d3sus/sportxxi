"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";
import s from "./page.module.scss";
import NewsCard from "@/components/newsCard/NewsCard";

const Page: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const fetching = async () => {
    const response = await fetch("http://localhost:5500/news");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetching();
  }, []);

  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className={s.news}>
      <input className={s.news__input} placeholder="Поиск по новостям" value={searchQuery} onChange={handleSearchChange} />

      {filteredData.map((elem, index) => (
        <NewsCard url={elem.url} key={index} title={elem.title} date={elem.date} id={elem.id} filter={elem.filter} />
      ))}
    </div>
  );
};

export default Page;
