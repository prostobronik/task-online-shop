import React from "react";
import s from "./CardMainInfo.module.scss";
import sber from "../../../assets/image/card-main-info/sber.png";
import ozon from "../../../assets/image/card-main-info/ozon.png";
import wb from "../../../assets/image/card-main-info/wb.png";
import ya from "../../../assets/image/card-main-info/ya-market.png";

import auto from "../../../assets/image/card-main-info/auto.png";
import bank from "../../../assets/image/card-main-info/bank.png";
import garage from "../../../assets/image/card-main-info/garage.png";
import birka from "../../../assets/image/card-main-info/birka.png";

const CardMainInfo = () => {
  return (
    <div className={s.cardMainInfo}>
      <div className={s.card + " " + s.card_1}>
        <div className={s.card_info}>
          <h3>Идеально для маркетплейсов</h3>
          <p>Подробные описания, характеристики и фотографии товаров</p>
        </div>
        <img className={s.sber} src={sber} alt="Logo" />
        <img className={s.wb} src={wb} alt="Logo" />
        <img className={s.ya} src={ya} alt="Logo" />
        <img className={s.ozon} src={ozon} alt="Logo" />
      </div>

      <div className={s.card + " " + s.card_2}>
        <div className={s.card_info}>
          <h3>Работаем официально</h3>
          <p>
            Белая бухгалтерия: договора, закрывающие документы, ЭДО, оплата по
            счету или на сайте
          </p>
        </div>
        <img src={bank} alt="Банк" className={s.bank} />
      </div>

      <div className={s.card + " " + s.card_3}>
        <div className={s.card_info}>
          <h3>Цены от производителей без наценок</h3>
          <p>
            Недорогие, но качественные товары + Прогрессирующая система скидок и
            бонусов
          </p>
        </div>
        <img src={birka} alt="Бирка" className={s.birka} />
      </div>
      <div className={s.card + " " + s.card_4}>
        <div className={s.card_info}>
          <h3>Быстрая обработка заказов. Доставка в РФ и СНГ</h3>
          <p>
            Отгружаем заказ до любой транспортной компании. Отправка в течение
            1-3 дней с момента получения оплаты
          </p>
        </div>
        <img src={auto} alt="Авто" className={s.auto} />
      </div>
      <div className={s.card + " " + s.card_5}>
        <div className={s.card_info}>
          <h3>Собственный склад и офис</h3>
          <p>
            Будем рады угостить ваc чашечкой кофе в нашем офисе с Екатеринбурге
          </p>
        </div>
        <img src={garage} alt=" Гараж" className={s.garage} />
      </div>
    </div>
  );
};

export default CardMainInfo;
