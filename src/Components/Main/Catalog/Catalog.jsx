import React from "react";
import s from "./Catalog.module.scss";
import image1 from "../../../assets/image/catalog/image1.png";
import image2 from "../../../assets/image/catalog/image2.png";
import image3 from "../../../assets/image/catalog/image3.png";
import image4 from "../../../assets/image/catalog/image4.png";

import { ReactComponent as Heart } from "../../../assets/image/catalog/heart.svg";
import { ReactComponent as Basket } from "../../../assets/icon/Catalog/basket.svg";
import { ReactComponent as Right } from "../../../assets/icon/Footer/right.svg";

import HorizontalScroll from "react-scroll-horizontal";

const Catalog = () => {
  return (
    <div className={s.catalog}>
      <div className={s.chevron_right}>
        <Right />
      </div>
      <div className={s.catalog_title}>
        <p>Каталог</p>
        <span>/ Все товары</span>
      </div>

      <div className={s.conteiner}>
        <HorizontalScroll className={s.scrollHorizontal} reverseScroll={true}>
          {/* Отдельная карточка товара */}
          <div className={s.content}>
            <div className={s.chevron}>
              <span>В наличии</span>
            </div>
            <Heart className={s.heart} />
            <img src={image1} alt="Товар" />
            <div className={s.content_hover}>
              <p>Сосна с эффектом инея и шишками (от 60 до 300см.)</p>
              <div className={s.description_content}>
                <span className={s.price_tel}>999 331 р.</span>
                <p>Высота:</p>
                <div className={s.btn_desc}>
                  <button>60см</button>
                  <button>90см</button>
                  <button>120см</button>
                  <button>150см</button>
                  <button>180см</button>
                  <button>210см</button>
                  <button>240см</button>
                  <button>270см</button>
                  <button>300см</button>
                </div>
              </div>
              <div className={s.content_footer}>
                <p className={s.price_decktop}>999 331 р.</p>
                <button>
                  <Basket className={s.basket} />
                  <span>В корзину</span>
                </button>
              </div>
            </div>
            <div className={s.content_info}>
              <p>Ель рожденственная с белыми кончиками</p>
              <span>6 331 р.</span>
            </div>
          </div>

          {/* Отдельная карточка товара */}
          <div className={s.content}>
            <div className={s.chevron}>
              <span>В наличии</span>
            </div>
            <Heart className={s.heart} />
            <img src={image2} alt="Товар" />
            <div className={s.content_hover}>
              <p>Сосна с эффектом инея и шишками (от 60 до 300см.)</p>
              <div className={s.description_content}>
                <span className={s.price_tel}>999 331 р.</span>
                <p>Высота:</p>
                <div className={s.btn_desc}>
                  <button>60см</button>
                  <button>90см</button>
                  <button>120см</button>
                  <button>150см</button>
                  <button>180см</button>
                  <button>210см</button>
                  <button>240см</button>
                  <button>270см</button>
                  <button>300см</button>
                </div>
              </div>
              <div className={s.content_footer}>
                <p className={s.price_decktop}>999 331 р.</p>
                <button>
                  <Basket className={s.basket} /> <span>В корзину</span>
                </button>
              </div>
            </div>
            <div className={s.content_info}>
              <p>Сосна с эффектом инея и шишками (от 60 до 300см.)</p>
              <span>6 331 р.</span>
            </div>
          </div>
          {/* Отдельная карточка товара */}
          <div className={s.content}>
            <div className={s.chevron}>
              <span>В наличии</span>
            </div>
            <Heart className={s.heart} />
            <img src={image3} alt="Товар" />
            <div className={s.content_hover}>
              <p>Сосна с эффектом инея и шишками (от 60 до 300см.)</p>
              <div className={s.description_content}>
                <span className={s.price_tel}>999 331 р.</span>
                <p>Высота:</p>
                <div className={s.btn_desc}>
                  <button>60см</button>
                  <button>90см</button>
                  <button>120см</button>
                  <button>150см</button>
                  <button>180см</button>
                  <button>210см</button>
                  <button>240см</button>
                  <button>270см</button>
                  <button>300см</button>
                </div>
              </div>
              <div className={s.content_footer}>
                <p className={s.price_decktop}>999 331 р.</p>
                <button>
                  <Basket className={s.basket} /> <span>В корзину</span>
                </button>
              </div>
            </div>
            <div className={s.content_info}>
              <p>Ель комбинированная “Уральская снежная”</p>
              <span>6 331 р.</span>
            </div>
          </div>
          {/* Отдельная карточка товара */}
          <div className={s.content}>
            <div className={s.chevron}>
              <span>В наличии</span>
            </div>
            <Heart className={s.heart} />
            <img src={image4} alt="Товар" />
            <div className={s.content_hover}>
              <p>Сосна с эффектом инея и шишками (от 60 до 300см.)</p>
              <div className={s.description_content}>
                <span className={s.price_tel}>999 331 р.</span>
                <p>Высота:</p>
                <div className={s.btn_desc}>
                  <button>60см</button>
                  <button>90см</button>
                  <button>120см</button>
                  <button>150см</button>
                  <button>180см</button>
                  <button>210см</button>
                  <button>240см</button>
                  <button>270см</button>
                  <button>300см</button>
                </div>
              </div>
              <div className={s.content_footer}>
                <p className={s.price_decktop}>999 331 р.</p>
                <button>
                  <Basket className={s.basket} />
                  <span>В корзину</span>
                </button>
              </div>
            </div>
            <div className={s.content_info}>
              <p>Ель комбинированная “Уральская весная” </p>
              <span>6 331 р.</span>
            </div>
          </div>
          {/* Отдельная карточка товара */}
          <div className={s.content}>
            <div className={s.chevron}>
              <span>В наличии</span>
            </div>
            <Heart className={s.heart} />
            <img src={image4} alt="Товар" />
            <div className={s.content_hover}>
              <p>Сосна с эффектом инея и шишками (от 60 до 300см.)</p>
              <div className={s.description_content}>
                <span className={s.price_tel}>999 331 р.</span>
                <p>Высота:</p>
                <div className={s.btn_desc}>
                  <button>60см</button>
                  <button>90см</button>
                  <button>120см</button>
                  <button>150см</button>
                  <button>180см</button>
                  <button>210см</button>
                  <button>240см</button>
                  <button>270см</button>
                  <button>300см</button>
                </div>
              </div>
              <div className={s.content_footer}>
                <p className={s.price_decktop}>999 331 р.</p>
                <button>
                  <Basket className={s.basket} />
                  <span>В корзину</span>
                </button>
              </div>
            </div>
            <div className={s.content_info}>
              <p>Ель комбинированная “Уральская весная” </p>
              <span>6 331 р.</span>
            </div>
          </div>
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default Catalog;
