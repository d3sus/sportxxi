"use client";
import { NextPage } from "next";
import s from "./MainNews.module.scss";
import { useEffect, useState } from "react";

const data = [
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nulla aliquam illo doloremque voluptate voluptatem, porro culpa quas dignissimos aperiam natus nisi facere at dolorem vel aspernatur dicta quisquam itaque.",
    number: "1",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nulla aliquam illo doloremque voluptate voluptatem, porro culpa quas dignissimos aperiam natus nisi facere at dolorem vel aspernatur dicta quisquam itaque.",
    number: "2",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nulla aliquam illo doloremque voluptate voluptatem, porro culpa quas dignissimos aperiam natus nisi facere at dolorem vel aspernatur dicta quisquam itaque.",
    number: "3",
  },
  {
    title: "Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nulla aliquam illo doloremque voluptate voluptatem, porro culpa quas dignissimos aperiam natus nisi facere at dolorem vel aspernatur dicta quisquam itaque.",
    number: "4",
  },
];

const MainNews: NextPage = ({}) => {
  const [data, setData] = useState([]);

  const fetching = async () => {
    const response = await fetch("http://localhost:5500/news");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetching();
  }, []);
  return (
    <div className={s.MainNews__content}>
      {data.slice(0, 4).map((elem, index) => (
        <div className={s.MainNews__content__card} key={index}>
          <h2 className={s.MainNews__content__title}>{elem.title}</h2>
          <div className={s.MainNews__content__card__wrapper}>
            <span className={s.MainNews__content__card__number}>{index + 1}</span>
            <p>{elem.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainNews;
