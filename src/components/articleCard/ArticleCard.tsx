import { NextPage } from "next";
import s from "./ArticleCard.module.scss";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  author: string;
  id: string;
  text: string;
}

const ArticleCard: NextPage<Props> = ({ title, subtitle, author, id, text }) => {
  return (
    <div className={s.ArticleCard}>
      <div className={s.ArticleCard__wrapper}>
        <h2 className={s.ArticleCard__title}>{title}</h2>
        <h3 className={s.ArticleCard__subtitle}>{subtitle}</h3>
        <p className={s.ArticleCard__author}>Автор: {author}</p>
      </div>
      <div className={s.ArticleCard__info}>
        <p className={s.ArticleCard__text}>{text}</p>
        <Link className={s.ArticleCard__link} href={`/articles/${id}`}>
          Читать полностью
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
