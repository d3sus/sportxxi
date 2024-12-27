"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";
import s from "./MainFilters.module.scss";

const MainFilters: NextPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([{ label: "Весь спорт", value: "all" }]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredData = data.filter((item) => activeFilter === "all" || item.filter === activeFilter);

  const fetching = async () => {
    const response = await fetch("http://localhost:5500/news");
    const fetchedData = await response.json();

    const uniqueCategories = [
      { label: "Весь спорт", value: "all" },
      ...Array.from(new Set(fetchedData.map((item: any) => item.filter))).map((filter: string) => ({
        label: filter.charAt(0).toUpperCase() + filter.slice(1), // Преобразуем название фильтров
        value: filter,
      })),
    ];

    setCategories(uniqueCategories);
    setData(fetchedData);
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className={s.MainFilters__wrapper}>
      <div className={s.MainFilters__filters}>
        <div className={s.MainFilters__filters__wrapper}>
          {categories.map((filter) => (
            <span
              key={filter.value}
              className={`${s.MainFilters__filters__link} ${activeFilter === filter.value ? s.active : ""}`}
              onClick={() => handleFilterChange(filter.value)}
            >
              {filter.label}
            </span>
          ))}
        </div>
      </div>
      <div className={s.MainFilters__news}>
        {filteredData.map((elem, index) => (
          <div className={s.MainFilters__news__card} key={index}>
            <img className={s.MainFilters__news__card__image} src={elem.url} />
            <p className={s.MainFilters__news__card__text}>{elem.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainFilters;
