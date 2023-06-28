import React from "react";
import s from "./Header.module.scss";
import viber from "../../assets/icon/Header/viber.svg";
import telegremm from "../../assets/icon/Header/telegramm.svg";
import burgerCatalog from "../../assets/icon/Header/menu-bureger-catalog.svg";
import menuBerger from "../../assets/icon/Header/menu-burger.svg";

import { ReactComponent as Entrance } from "../../assets/icon/Header/entrance.svg";
import { ReactComponent as Basket } from "../../assets/icon/Header/basket.svg";
import { ReactComponent as Heart } from "../../assets/icon/Header/heart.svg";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header_nav}>
        <nav className={s.header_menu}>
          <ul>
            <li>
              <a href="!#">О нас</a>
            </li>
            <li>
              <a href="!#">Оплата и доставка</a>
            </li>
            <li>
              <a href="!#">Товары из китая</a>
            </li>
            <li>
              <a href="!#">Статьи</a>
            </li>
          </ul>
        </nav>
        <div className={s.header_icon}>
          <a href="!#" target="_blank">
            {" "}
            <img src={telegremm} alt="Telegramm" />
          </a>
          <a href="!#" target="_blank">
            <img src={viber} alt="Viber" />
          </a>
        </div>
      </div>
      <div className={s.header_search}>
        <button className={s.header_btn_catalog}>
          <img src={burgerCatalog} alt="burger" />
          Каталог
        </button>
        <form action="" method="get">
          <input
            name="s"
            placeholder="Напишите, что вы ищете..."
            type="search"
          />
          <p> Найти</p>
        </form>
        <div className={s.header_serch_icon}>
          <img className={s.menu_burger} src={menuBerger} alt="Бургер" />
          <div className={s.btn_icon}>
            <button>
              <Entrance />
              <p> Войти</p>
            </button>
            <button>
              <Heart />
              <p>Избранное</p>
            </button>
            <button>
              <Basket />
              <p>Корзина</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
