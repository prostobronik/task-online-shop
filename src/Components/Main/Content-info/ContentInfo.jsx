import React from "react";
import s from "./ContentInfo.module.scss";
import contentImg from "../../../assets/image/content-main/content-img.png";
import contentImgTel from "../../../assets/image/content-main/img-tel.png";

const ContentInfo = () => {
  return (
    <div className={s.content_info}>
      <div className={s.content_text}>
        <div className={s.title}>
          <h3>О нас</h3>
        </div>
        <img className={s.content_img_tel} src={contentImgTel} alt="Склад" />
        <p>
          Мы надежный поставщик для маркетплейсов. Мы рады предложить вам
          недорогие, но качественные товары с качественными описаниями и
          фотографиями.<br></br> У нас вы можете купить замечательные товары:
          искуственные елки, гирлянды, пиротехнику, электронику, одежду, обувь,
          аксессуары.Минимальная сумма заказа всего 10 000 руб.{" "}
        </p>
      </div>
      <img className={s.content_img} src={contentImg} alt="Склад" />
    </div>
  );
};

export default ContentInfo;
