// components/AnimatedSection.js

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./AnimatedSection.module.css";
import ParallaxComponent from "./ParallaxComponent";
import ErrorBoundary from "./ErrorBoundary";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const heroRef = useRef(null);
  const isAnimationInitialized = useRef(false);
  const timelineRef = useRef(null);
  const router = useRouter();

  const [imageSrc, setImageSrc] = useState("/assets/bacgroundMain.webp");

  useEffect(() => {
    const updateImageSrc = () => {
      // Меняем изображение при ширине экрана < 768px
      if (window.innerWidth < 768) {
        setImageSrc("/assets/bacgroundM.png"); // Укажите путь к изображению для мобильных устройств
      } else {
        setImageSrc("/assets/bacgroundMain.webp"); // Изображение для больших экранов
      }
    };

    // Устанавливаем начальное изображение
    updateImageSrc();

    // Обновляем изображение при изменении размера окна
    window.addEventListener("resize", updateImageSrc);

    // Удаляем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("resize", updateImageSrc);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isAnimationInitialized.current) return;

      if (wrapperRef.current && imageRef.current && heroRef.current) {
        isAnimationInitialized.current = true;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
            markers: false,
          },
        });

        tl.to(imageRef.current, {
          scale: 2,
          z: 350,
          transformOrigin: "center center",
          ease: "power1.inOut",
        }).to(
          heroRef.current,
          {
            scale: 1.1,
            transformOrigin: "center center",
            ease: "power1.inOut",
          },
          "<"
        );

        timelineRef.current = tl;
      }

      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    const handleRouteChange = () => {
      if (timelineRef.current) {
        timelineRef.current.scrollTrigger &&
          timelineRef.current.scrollTrigger.kill();
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("scroll", handleScroll);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      handleRouteChange();
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ErrorBoundary>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.content}>
          <section className={styles.section} ref={heroRef}>
            <ParallaxComponent />
          </section>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={imageSrc} // Используем динамический источник изображения
            alt="image"
            ref={imageRef}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AnimatedSection;
