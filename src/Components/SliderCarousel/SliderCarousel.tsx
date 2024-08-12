import { Grid } from "@mui/material";
import { useState } from "react";
import { useSliderCarouselStyles } from "./SliderCarouseul.style";
import { useTheme } from "react-jss";
import { joinStyleClasses } from "../../Utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderCarousel = ({
  cards,
}: {
  cards: { original: string[]; small: string[] };
}) => {
  const theme = useTheme<AppTheme>();
  const classes = { ...useSliderCarouselStyles({ theme }) };
  const [loaded, setLoaded] = useState<Record<number, boolean>>();
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Grid className={classes.carouselContainer}>
      <Slider {...settings}>
        {cards.original.map((img, key) => (
          <div className={classes.imgContainer}>
            <div
              className={joinStyleClasses(
                classes.imgSkeleton,
                !loaded?.[key] ? classes.loadingImgAnimation : ""
              )}
              style={{
                backgroundImage: !loaded?.[key]
                  ? `url(${cards.small[key]})`
                  : "",
              }}
            >
              <img
                className={classes.img}
                src={img}
                alt="project image"
                loading="lazy"
                onLoad={() => setLoaded((prev) => ({ ...prev, [key]: true }))}
              />
            </div>
          </div>
        ))}
      </Slider>
    </Grid>
  );
};
