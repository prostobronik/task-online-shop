import React from "react";
import s from "./Footer.module.scss";
import visa from "../../assets/icon/Footer/visa.svg";
import mir from "../../assets/icon/Footer/mir.svg";
import mastercard from "../../assets/icon/Footer/mastercard.svg";
import vk from "../../assets/icon/Footer/vk.svg";
import telegramm from "../../assets/icon/Footer/telegramm.svg";
import home from "../../assets/icon/Footer/home_filled.svg";
import phine from "../../assets/icon/Footer/local_phone.svg";
import mail from "../../assets/icon/Footer/mail.svg";
import right from "../../assets/icon/Footer/right.svg";
import { ReactComponent as Up } from "../../assets/icon/Footer/up.svg";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer_menu}>
        <div className={s.menu_company + " " + s.menu}>
          <nav>
            <ul className={s.top_menu}>
              <li>
                <p className={s.down}>Компания</p>
                <ul className={s.submenu}>
                  <li>
                    <a href="!#">О компании</a>
                  </li>
                  <li>
                    <a href="!#">Блог</a>
                  </li>
                  <li>
                    <a href="!#">Стать поставщиком</a>
                  </li>
                  <li>
                    <a href="!#">Стать инвестором</a>
                  </li>
                  <li>
                    <a href="!#">Контакты</a>
                  </li>
                  <li>
                    <a href="!#">Пользовательское соглашение</a>
                  </li>
                  <li>
                    <a href="!#">Политика конфиденциальности и оферта</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className={s.menu_buy + " " + s.menu}>
          <nav>
            <ul className={s.top_menu}>
              <li>
                <p className={s.down}>Покупателям</p>
                <ul className={s.submenu}>
                  <li>
                    <a href="!#">Каталог</a>
                  </li>
                  <li>
                    <a href="!#">Корзина</a>
                  </li>
                  <li>
                    <a href="!#">Избранные товары</a>
                  </li>
                  <li>
                    <a href="!#">Личный кабинет</a>
                  </li>
                  <li>
                    <a href="!#">Доставка</a>
                  </li>
                  <li>
                    <a href="!#">Оплата </a>
                  </li>
                  <li>
                    <a href="!#">Обмен и возврат</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className={s.menu_ + " " + s.menu}></div>
        <div className={s.menu_email + " " + s.menu}>
          <div className={s.email}>
            <p>Следите за новинками и акциями</p>
            <input
              className={s.input_right_icon}
              type="email"
              placeholder="Адрес электронной почты"
              style={{ backgroundImage: `url(${right})` }}
            />
          </div>
          <div className={s.email_info}>
            <p>
              Нажимая кнопку, я соглашаюсь на получение информации, принимаю
              условия политики конфиденциальности и пользовательского
              соглашения, даю согласие на обработку персональных данных{" "}
            </p>
          </div>

          <div className={s.icons}>
            <a href="mailto:yandex.ru">
              {" "}
              <img src={mail} alt="email" />
            </a>
            <a href="tel:+79001111111">
              {" "}
              <img src={phine} alt="Телефон" />
            </a>
            <a href="!#" target="_blank">
              {" "}
              <img src={home} alt="Дом" />
            </a>
            <div className={s.icons_social}>
              <a href="!#" target="_blank">
                {" "}
                <img src={vk} alt="VK" />
              </a>
              <a href="!#" target="_blank">
                {" "}
                <img src={telegramm} alt="Telegramm" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={s.footer_copy}>
        <div className={s.copyright}>
          <p>&copy; 2023</p>
        </div>
        <div className={s.footer_img}>
          <img src={mastercard} alt="" />
          <img src={visa} alt="" />
          <img src={mir} alt="" />
        </div>
      </div>
      <button className={s.chevron_up}>
        <Up />
      </button>
    </div>
  );
};

export default Footer;
