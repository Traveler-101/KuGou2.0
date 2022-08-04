import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import styled from "styled-components";

const BannersWrapper = styled.div`
    padding-top: 2rem;
    height: 9.5rem;
    .swiper-pagination-bullet-active {
            background: #00BFFF;
    }
`
function Banners({ bannerList }) {
  const [bannerSwiper, setBannerSwiper] = useState(null)
  useEffect(() => {
    if (bannerList.length && !bannerSwiper) {
      let bannerSwiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: { el: '.swiper-pagination' }
      })
      setBannerSwiper(bannerSwiper)
    }
  }, [bannerList.length, bannerSwiper])

  return (
    <BannersWrapper>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            bannerList.map(item => {
              return (
                <div className="swiper-slide"
                  key={item.imageUrl}>
                  <div className="slider-nav">
                    <img src={item.imageUrl}
                      width="100%"
                      height="100%"
                      alt="" />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </BannersWrapper>
  );
}

export default React.memo(Banners)
