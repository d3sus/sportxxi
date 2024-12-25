"use client";
import { useState } from "react";
import { NextPage } from "next";
import s from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={s.Header}>
      <Link className={s.Header__logo} href={"/"}>
        SportXXI
      </Link>

      <button className={s.Header__burger} onClick={toggleMenu}>
        <span className={s.BurgerBar}></span>
        <span className={s.BurgerBar}></span>
        <span className={s.BurgerBar}></span>
      </button>

      <nav className={`${s.Header__nav} ${isMenuOpen ? s.Header__nav_open : ""}`}>
        <Link className={s.Header__link} href={"/news"}>
          Новости
        </Link>
        <Link className={s.Header__link} href={"/articles"}>
          Статьи
        </Link>
        <Link className={s.Header__link} href={"/photo"}>
          Фото
        </Link>
        <Link className={s.Header__link} href={"/result"}>
          Результаты
        </Link>
      </nav>

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
