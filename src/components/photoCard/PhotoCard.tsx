import { NextPage } from "next";
import s from "./PhotoCard.module.scss";

interface Props {
  src: string;
  title: string;
  id: string;
}

const PhotoCard: NextPage<Props> = ({ src, title, id }) => {
  return (
    <div className={s.PhotoCard}>
      <img src={src} alt="Фотография события" width={1000} height={1000} className={s.PhotoCard__img} />
      <h3 className={s.PhotoCard__title}>{title}</h3>
    </div>
  );
};

export default PhotoCard;
