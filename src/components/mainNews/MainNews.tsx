import { NextPage } from "next";
import s from "./MainNews.module.scss";

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
  return (
    <div className={s.MainNews__content}>
      {data.map((elem, index) => (
        <div className={s.MainNews__content__card} key={index}>
          <h2>{elem.title}</h2>
          <div className={s.MainNews__content__card__wrapper}>
            <span className={s.MainNews__content__card__number}>{elem.number}</span>
            <p>{elem.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainNews;
