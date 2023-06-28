import React from "react";
import s from "./Slider.module.scss";
import CardClider from "../Card-slider/CardClider";

const slide = [1, 2, 3, 4, 5, 6, 7];
const delay = 4000;

const Slider = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slide.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={s.slideshow}>
      <div
        className={s.slideshowSlider}
        style={{
          transform: `translate3d(${-index * 100 - index * 3}%, 0, 0)`,
        }}
      >
        {slide.map((el, i) => (
          <CardClider key={i} />
        ))}
      </div>

      <div className={s.slideshowDots}>
        {slide.map((_, idx) => (
          <div
            key={idx}
            className={
              index === idx
                ? `${s.slideshowDot} ${s["active"]}`
                : `${s.slideshowDot}`
            }
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
