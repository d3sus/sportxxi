import { NextPage } from "next";
import s from "./NewsCard.module.scss";
import Link from "next/link";

interface Props {
  title: string;
  date: string;
  id: string;
  filter: string;
}

const NewsCard: NextPage<Props> = ({ title, date, id }) => {
  return (
    <div className={s.NewsCard}>
      <div className={s.NewsCard__wrapper}>
        <h2 className={s.NewsCard__title}>{title}</h2>
        <h3 className={s.NewsCard__date}>{date}</h3>
      </div>
      <Link className={s.NewsCard__link} href={`/news/${id}`}>
        Подробнее
      </Link>
    </div>
  );
};

export default NewsCard;
