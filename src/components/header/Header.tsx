import { NextPage } from "next";
import s from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header: NextPage = ({}) => {
  return (
    <header className={s.Header}>
      <Link className={s.Header__logo} href={"/"}>
        SportXXI
      </Link>
      <Link className={s.Header__link} href={"/news"}>
        Новости
      </Link>
      <Link className={s.Header__link} href={"/articles"}>
        Статьи
      </Link>
      <Link className={s.Header__link} href={"/photo"}>
        Фото
      </Link>

      <div className={s.Header__socials}>
        <Link href={"/"}>
          <Image src={"/HeaderIcon1.svg"} width={34} height={34} alt="YouTube" />
        </Link>
        <Link href={"/"}>
          <Image src={"/HeaderIcon2.svg"} width={34} height={34} alt="Telegram" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
