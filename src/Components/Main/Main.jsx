import React from "react";
import s from "./Main.module.scss";
import CardMainInfo from "./Card-main-info/CardMainInfo";
import ContentInfo from "./Content-info/ContentInfo";
import Catalog from "./Catalog/Catalog";
const Main = () => {
  return (
    <div className={s.main}>
      <CardMainInfo />
      <Catalog />
      <ContentInfo />
    </div>
  );
};

export default Main;
