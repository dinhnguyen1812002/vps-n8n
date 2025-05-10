// /* eslint-disable @next/next/no-img-element */
// "use client";

// import Slider from "react-slick";
// import MenuData from "../data/menu.json";
// import { assetPrefix } from "@/next.config.js";

// const Partner = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 4,
//         },
//       },

//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//     ],
//   };

//   return (
//     <Slider {...settings} arrows={false}>
//       {MenuData.map((menu, index) => {
//         if (menu.type !== "partner") {
//           return;
//         }

//         return menu.items.map((brand, index) => (
//           <a
//             href={brand.link}
//             title={brand.label}
//             target="_blank"
//             className="item"
//             key={index}
//             rel="nofollow"
//           >
//             <img
//               src={assetPrefix + brand.logo}
//               alt={brand.label}
//               className="m-auto x-h-[40px]"
//             />
//           </a>
//         ));
//       })}
//     </Slider>
//   );
// };

// export default Partner;
/* eslint-disable @next/next/no-img-element */
"use client";

import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect } from "react";
// import "/styles/partner.css";

 
// import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { assetPrefix } from "@/next.config";
export default function Partners() {

 
  useEffect(() => {
    if (document.querySelector(".news__slider")) {

      new Swiper(".news__slider", {
        modules: [Navigation, Pagination], 
        slidesPerView: 1,
        spaceBetween: 24,
        speed: 350,
        loop: true,
        loopAdditionalSlides: 0,
        autoplay: { delay: 1500, disableOnInteraction: !1 },
        pagination: { el: ".news__pagination", clickable: !0 },
        navigation: {
          nextEl: ".news__navigation .next",
          prevEl: ".news__navigation .previous",
        },
        breakpoints: {
          540: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.25, slidesPerGroup: 2 },
          992: { slidesPerView: 3, slidesPerGroup: 3 },
        },
      });
    }
  }, []);
    return(
        <section className="block-bg bg-news mt-5 p-5">
        <div className="container">
        <div className="title-box mb-4 mb-xl-45 wow fadeIn text-center w-lg-75 mx-auto"  style={{visibility: 'visible'}}>
            <div className="tt tt-custom-bg mb-2">INTERDATA</div>
            <h2 className="tt-md tt-gradient text-uppercase mb-3">
            BÁO CHÍ NÓI GÌ VỀ CHÚNG TÔI?
            </h2>
            <p className="x-text-xl  mb-0d ">
              InterData liên tục nỗ lực mang đến các giải pháp VPS chất lượng <br/> và nhận được sự ghi nhận từ cộng đồng.
            </p>
          </div>
          <div className="news__wrapper">
            <div className="news__slider swiper">
              <div className="swiper-wrapper mt-2">
                <div className="swiper-slide">
                  <div className="block">
                    <a className="absolute"  title="" rel="nofollow"
                      href="https://vnexpress.net/interdata-dua-giai-phap-viet-ra-thi-truong-quoc-te-4539197.html"></a>
                    <div className="thumb-res wide">
                      <img src= {assetPrefix + "/images/skin/news/news.png"}/>
                    </div>
                    <div className="info">
                      <div className="partner">
                        <img src= {assetPrefix + "/images/skin/news/logo-news-1.png"}/>
                      </div>
                      <div className="tt">
                        InterData đưa giải pháp Việt ra thị trường quốc tế
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <a className="absolute"  title="" rel="nofollow"
                      href="https://thanhnien.vn/interdata-va-vnpt-hop-tac-chien-luoc-va-khai-thac-ha-tang-datacenter-185240701161300605.htm"></a>
                    <div className="thumb-res wide">
                      <img src= {assetPrefix + "/images/skin/news/news-1.png"}/>
                    </div>
                    <div className="info">
                      <div className="partner">
                        <img src= {assetPrefix + "/images/skin/news/logo-news.png"}/>
                      </div>
                      <div className="tt">
                        InterData và VNPT hợp tác chiến lược và khai thác hạ
                        tầng Datacenter
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <a className="absolute"  title="" rel="nofollow"
                      href="https://cafef.vn/interdata-tang-mien-phi-luu-tru-web-nvme-dung-luong-6gb-toc-do-mang-1gbps-20230223134836995.chn"></a>
                    <div className="thumb-res wide">
                      <img src= {assetPrefix + "/images/skin/news/news-2.png"}/>
                    </div>
                    <div className="info">
                      <div className="partner">
                        <img src= {assetPrefix + "/images/skin/news/logo-news-2.png"}/>
                      </div>
                      <div className="tt">
                        InterData tặng miễn phí lưu trữ web NVMe dung lượng
                        6GB, tốc độ mạng 1Gbps
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <a className="absolute"  title="" rel="nofollow"
                      href="https://vtv.vn/cong-nghe/greencloud-hop-tac-cung-interdata-trien-khai-ha-tang-server-tai-viet-nam-20230411104845847.htm"></a>
                    <div className="thumb-res wide">
                      <img src= {assetPrefix + "/images/skin/news/vtv.png"}/>
                    </div>
                    <div className="info">
                      <div className="partner">
                        <img src= {assetPrefix + "/images/skin/news/vtv.jpg"}/>
                      </div>
                      <div className="tt">
                        GreenCloud hợp tác cùng InterData triển khai hạ tầng Server tại Việt Nam
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <a className="absolute"  title="" rel="nofollow"
                      href="https://thegioikinhdoanh.vn/hi-tech/interdata-tang-mien-phi-luu-tru-web-nvme-dung-luong-6gb-toc-do-mang-1gbps.html"></a>
                    <div className="thumb-res wide">
                      <img src= {assetPrefix + "/images/skin/news/aChau.png"}/>
                    </div>
                    <div className="info">
                      <div className="partner">
                        <img src= {assetPrefix + "/images/skin/news/THE_GIOI_KINH_DOANH_cbc2b.png"}/>
                      </div>
                      <div className="tt">
                        InterData tặng miễn phí lưu trữ web NVMe dung lượng 6GB, tốc độ mạng 1Gbps
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">

                    <a className="absolute"  title="" rel="nofollow"
                      href="https://dantri.com.vn/suc-manh-so/interdata-ra-mat-goi-cloud-server-network-port-10gbps-tai-viet-nam-20221123162831826.htm"></a>
                    <div className="thumb-res wide">
                      <img src= {assetPrefix + "/images/skin/news/nhansu.webp"}/>
                    </div>
                    <div className="info">
                      <div className="partner">
                        <img src= {assetPrefix + "/images/skin/news/bao-dien-tu-dan-tri.png"}/>
                      </div>
                      <div className="tt">
                        InterData ra mắt gói Cloud Server Network Port 10Gbps tại Việt Nam
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <a className="absolute"  title="" rel="nofollow"
                      href="https://www.24h.com.vn/doanh-nghiep/interdata-va-eztech-ky-ket-thoa-thuan-hop-tac-chien-luoc-cung-cap-giai-phap-ha-tang-datacenter-c849a1569291.html"></a>
                    <div className="thumb-res wide">
                      <img src= {assetPrefix + "/images/skin/news/24h.jpg"}/>
                    </div>
                    <div className="info">
                      <div className="partner">
                        <img src= {assetPrefix + "/images/skin/news/24hh.png"}/>
                      </div>
                      <div className="tt">
                        InterData và EZTech ký kết thỏa thuận hợp tác
                        chiến lược cung cấp giải pháp hạ tầng Datacenter
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="block">
                    <a className="absolute"  title="" rel="nofollow"
                      href="https://vietnamnet.vn/interdata-hop-tac-vnpt-khai-thac-ha-tang-datacenter-va-cac-dich-vu-the-manh-2301215.html"></a>
                    <div className="thumb-res wide">
                      <img src= {assetPrefix + "/images/skin/news/vnpt.jpg"}/>
                    </div>
                    <div className="info">
                      <div className="partner">
                        <img src= {assetPrefix + "/images/skin/news/bao-vietnamnet.png"}/>
                      </div>
                      <div className="tt">
                        InterData hợp tác VNPT khai thác hạ tầng Datacenter và các dịch vụ thế mạnh
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <a className="absolute"  title="" rel="nofollow"
                      href="https://ttvn.toquoc.vn/interdata-tang-mien-phi-luu-tru-web-nvme-dung-luong-6gb-toc-do-mang-1gbps-2023022311353656.htm"></a>
                    <div className="thumb-res wide">
                      <img src= {assetPrefix + "/images/skin/news/aChau.png"}/>
                    </div>
                    <div className="info">
                      <div className="partner">
                        <img src= {assetPrefix + "/images/skin/news/Toquoc.jpg"}/>
                      </div>
                      <div className="tt">
                        InterData tặng miễn phí lưu trữ web NVMe dung lượng 6GB, tốc độ mạng 1Gbps
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <a className="absolute"  title="" rel="nofollow"
                      href="https://baolamdong.vn/thong-tin-can-biet/202405/le-ky-ket-mou-giua-interdata-va-truong-dai-hoc-yersin-da-lat-b180e1a/"></a>
                    <div className="thumb-res wide">
                      <img src= {assetPrefix + "/images/skin/news/lamdong1.jpg"}/>
                    </div>
                    <div className="info">
                      <div className="partner">
                        <img src= {assetPrefix + "/images/skin/news/lamdong.png"}/>
                      </div>
                      <div className="tt">
                        Lễ ký kết MOU giữa InterData và Trường Đại học Yersin Đà Lạt
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <a className="absolute"  title="" rel="nofollow"
                      href="https://vtcnews.vn/interdata-hop-tac-cung-eztech-phat-trien-ha-tang-server-cloud-gpu-ar872150.html"></a>
                    <div className="thumb-res wide">
                      <img src= {assetPrefix + "/images/skin/news/24h.jpg"}/>
                    </div>
                    <div className="info">
                      <div className="partner">
                        <img src= {assetPrefix + "/images/skin/news/LOGO-vtc.png"}/>
                      </div>
                      <div className="tt">
                        InterData hợp tác cùng EZTech phát triển hạ tầng server cloud GPU
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <a className="absolute"  title="" rel="nofollow"
                      href="https://www.vietnam.vn/interdata-hop-tac-vnpt-khai-thac-ha-tang-datacenter-va-cac-dich-vu-the-manh/"></a>
                    <div className="thumb-res wide">
                      <img src= {assetPrefix + "/images/skin/news/vnpt.jpg"}/>
                    </div>
                    <div className="info">
                      <div className="partner">
                        <img src= {assetPrefix + "/images/skin/news/logo-bao-vietnam.png"}/>
                      </div>
                      <div className="tt">
                        InterData hợp tác VNPT khai thác hạ tầng Datacenter và các dịch vụ thế mạnh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="news__pagination"></div> */}
            </div>
          
            <div className="news__navigation">
              <button className="swiper-nav-button previous">
                <i className="fa fa-angle-left"></i>
              </button>
              <button className="swiper-nav-button next">
                <i className="fa fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}