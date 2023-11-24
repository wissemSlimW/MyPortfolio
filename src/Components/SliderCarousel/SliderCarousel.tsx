import { Grid } from "@mui/material";
import { MouseEvent, TouchEvent, useRef, useState } from "react";
import { useSliderCarouselStyles } from "./SliderCarouseul.style";
import { useTheme } from "react-jss";
import { joinStyleClasses } from "../../Utils";

export const SliderCarousel = ({ cards }: { cards: { original: string[], small: string[] } }) => {
  const theme = useTheme<AppTheme>()
  const classes = { ...useSliderCarouselStyles({ theme }) };
  const [move, setMove] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState<Record<number, boolean>>()
  const handleMouseMove = (e: MouseEvent) => {
    const width = ref.current?.getBoundingClientRect().width || 0;
    const val = (e.clientX / width) * 540;
    setMove((prev) => ((val % 90 !== 0) ? val : prev));
  };
  const handleTouchMove = (e: TouchEvent) => {
    const width = ref.current?.getBoundingClientRect().width || 0;
    const val = (e.touches[0].clientX / width) * 540;
    setMove((prev) => (val % 90 !== 0 ? val : prev));
  };

  return (
    <Grid className={classes.carouselContainer} {...{ ref }}>
      <Grid
        className={classes.box}
        style={{
          transform: `perspective(2000vw) rotateX(-2deg) rotateY(${move}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {cards.original.map((img, key) => (
          <Grid
            component="span"
            {...{ key }}
            style={{
              transform: `rotateY(calc(${key}* ${360 / cards.original.length
                }deg)) translateZ(${(500 * cards.original.length) / (2 * Math.PI)}px)`,
            }}
          ><Grid className={joinStyleClasses(!loaded?.[key] ? classes.loadingImgAnimation : '')} style={!loaded?.[key] ? { backgroundImage: `url(${cards.small[key]})` } : {}}>
              <img src={img} loading="lazy" onLoad={() => setLoaded(prev => ({ ...prev, [key]: true }))} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
