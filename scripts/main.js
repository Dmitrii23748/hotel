const swiperOur = new Swiper(".swiper__our", {
    pagination: {
      el: ".swiper-pagination__our",
      dynamicBullets: true,
      clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
  });

  const swiperNews = new Swiper(".news-swiper", {
    pagination: {
      el: ".news__swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
  });