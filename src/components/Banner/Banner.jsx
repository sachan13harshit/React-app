import { Carousel } from "nuka-carousel";
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import './Banner.css';
const banners = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Feb/NC/D21052619_WLA_BAU_GW-heroes_Headsets_FPF_FEB_DesktopTallHero_3000x1200._CB660350658_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/MI/Final/MI_Gw_3000x1200._CB659658858_.jpg"
];

function Banner() {
  return (
    <div className="banner">
      <Carousel
      autoplay
      className="h-banner"
      scrollDistance="slide"
      renderCenterLeftControls={({ previousSlide }) => (
        <Icon>
            className="h-banner__control"
            
        </Icon>
      )}

    >
      {
        banners.map((bannerSrc) => {
          return <img key={bannerSrc} src={bannerSrc} alt={"b"} />
        })
      }
    </Carousel>
    </div>

  )
 
}

export default Banner;