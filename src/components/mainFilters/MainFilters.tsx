"use client";

import { NextPage } from "next";
import { useState } from "react";
import s from "./MainFilters.module.scss";

const data = [
  {
    src: "url",
    filter: "football",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsa animi dolore odit quos quibusdam dolores aperiam, dignissimos, laborum sed obcaecati. Voluptatibus enim suscipit hic quis consectetur mollitia ex quas!",
  },
  {
    src: "url",
    filter: "basketball",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsa animi dolore odit quos quibusdam dolores aperiam, dignissimos, laborum sed obcaecati. Voluptatibus enim suscipit hic quis consectetur mollitia ex quas!",
  },
  {
    src: "url",
    filter: "esports",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsa animi dolore odit quos quibusdam dolores aperiam, dignissimos, laborum sed obcaecati. Voluptatibus enim suscipit hic quis consectetur mollitia ex quas!",
  },
  {
    src: "url",
    filter: "football",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsa animi dolore odit quos quibusdam dolores aperiam, dignissimos, laborum sed obcaecati. Voluptatibus enim suscipit hic quis consectetur mollitia ex quas!",
  },
  {
    src: "url",
    filter: "all",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsa animi dolore odit quos quibusdam dolores aperiam, dignissimos, laborum sed obcaecati. Voluptatibus enim suscipit hic quis consectetur mollitia ex quas!",
  },
];

const filters = [
  { label: "Весь спорт", value: "all" },
  { label: "Футбол", value: "football" },
  { label: "Баскетбол", value: "basketball" },
  { label: "Киберспорт", value: "esports" },
];

const MainFilters: NextPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredData = data.filter((item) => activeFilter === "all" || item.filter === activeFilter);

  return (
    <div className={s.MainFilters__wrapper}>
      <div className={s.MainFilters__filters}>
        <div className={s.MainFilters__filters__wrapper}>
          {filters.map((filter) => (
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
            <div className={s.MainFilters__news__card__image}></div>
            <p className={s.MainFilters__news__card__text}>{elem.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainFilters;
