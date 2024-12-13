import { NextPage } from "next";
import s from "./page.module.scss";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className={s.newsPage}>
      <div className={s.newsPage__wrapper}>
        <div className={s.newsPage__image}>Фотка</div>
        <div className={s.newsPage__metki}>
          <h2>Заголовок</h2>
          <div className={s.newsPage__metki__tips}>
            <p className={s.newsPage__metki__tips__tip}>Киберспорт</p>
            <p className={s.newsPage__metki__tips__tip}>Киберспорт</p>
            <p className={s.newsPage__metki__tips__tip}>Киберспорт</p>
            <p className={s.newsPage__metki__tips__tip}>Киберспорт</p>
          </div>
        </div>
      </div>
      <div className={s.newsPage__text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi veniam fuga quidem minus quia, id asperiores esse, aliquid ut, cupiditate
        harum! Molestiae sed reiciendis odio optio consequatur praesentium quae temporibus?
      </div>
    </div>
  );
};

export default Page;
