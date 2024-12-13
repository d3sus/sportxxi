import { NextPage } from "next";
import s from "./page.module.scss";
import MainNews from "@/components/mainNews/MainNews";
import MainFilters from "@/components/mainFilters/MainFilters";

const Page: NextPage = ({}) => {
  return (
    <div className={s.Page}>
      <h1 className={s.Page__title}>Главные новости</h1>
      <MainNews />
      <MainFilters />
    </div>
  );
};

export default Page;
