"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./SliderCustom.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderCustom() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={styles.sliderMain}>
      <div className={styles.boxSlider} key="slide1">
        <Image
          src="/assets/slide1.webp"
          alt="book"
          className={styles.slickSlide}
          width={260}
          height={550}
        />
        <h3>
          Every project is unique, and we approach development with the
          individual business in mind, creating sites that are not only
          beautiful but also effective
        </h3>
      </div>

      <div className={styles.boxSlider} key="slide2">
        <Image
          src="/assets/slide2.webp"
          alt="book"
          className={styles.slickSlide}
          width={250}
          height={550}
        />
        <h3>
          All project work is done in close collaboration with you. We keep you
          informed every step of the way and are willing to listen to every
          suggestion to achieve the best possible result
        </h3>
      </div>

      <div className={styles.boxSlider} key="slide3">
        <Image
          src="/assets/slide3.webp"
          alt="book"
          className={styles.slickSlide}
          width={250}
          height={550}
        />
        <h3>
          it's about quality and reliability. We believe that a good website
          should serve its owner for years to come, and that's what we provide
          for our clients
        </h3>
      </div>

      <div className={styles.boxSlider} key="slide4">
        <Image
          src="/assets/slide4.webp"
          alt="book"
          className={styles.slickSlide}
          width={250}
          height={550}
        />
        <h3>
          We don't just launch a website, we build the foundation for the long
          term growth of your online business. The website we create will grow
          and evolve with you
        </h3>
      </div>
    </Slider>
  );
}
