import { NextPage } from "next";
import s from "./page.module.scss";
import Image from "next/image";

interface Props {}

const Page: NextPage<Props> = async ({ params }) => {
  const response = await fetch(`http://localhost:5500/news/${params.id}`);
  const data = await response.json();
  return (
    <div className={s.newsPage}>
      <div className={s.newsPage__wrapper}>
        <img alt="Фотография новости" src={data[0].url} className={s.newsPage__image} />
        <div className={s.newsPage__metki}>
          <h2>{data[0].title}</h2>
          <div className={s.newsPage__metki__tips}>
            <p className={s.newsPage__metki__tips__tip}>{data[0].filter}</p>
          </div>
        </div>
      </div>
      <div className={s.newsPage__text}>{data[0].text}</div>
    </div>
  );
};

export default Page;
