import { NextPage } from "next";
import s from "./page.module.scss";
import ArticleCard from "@/components/articleCard/ArticleCard";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className={s.Page}>
      <ArticleCard title={"title"} subtitle="subtitle" author="Ну я" id="1" />
    </div>
  );
};

export default Page;
