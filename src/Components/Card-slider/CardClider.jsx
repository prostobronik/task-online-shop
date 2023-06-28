import React from "react";
import s from "./CardSlider.module.scss";
import image1 from "../../assets/image/slider/1.png";
import image2 from "../../assets/image/slider/2.png";
import image3 from "../../assets/image/slider/3.png";
import image4 from "../../assets/image/slider/4.jpg";

const CardClider = () => {
  return (
    <div className={s.card_slider}>
      <img className={s.img_1} src={image1} alt="" />
      <img className={s.img_2} src={image2} alt="" />
      <img className={s.img_3} src={image3} alt="" />
      <img className={s.img_4} src={image4} alt="" />

      <div className={s.slider_info}>
        <h2>Сезон подготовки к новогодним продажам открыт!</h2>
        <nav>
          <ul>
            <li>Искуственные елки</li>
            <li>Гирлянды</li>
            <li>Игрушки и украшения</li>
            <li>Пиротехника</li>
            <li>Новогодние подарки</li>
          </ul>
        </nav>
        <button className={s.btn_slider}>Перейти к каталогу</button>
      </div>
    </div>
  );
};

export default CardClider;
