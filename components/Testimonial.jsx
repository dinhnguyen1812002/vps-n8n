/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination ,Autoplay} from "swiper/modules";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/styles/partner.css";
import "swiper/css/autoplay";

export default function Testimonial() {
  function initReadMore() {
    const descElements = document.querySelectorAll(".desc");

    descElements.forEach((desc) => {
      const content = desc.querySelector(".desc-content");
      const existingButton = desc.querySelector(".btn-read-more");
      if (!content) return;

      const contentHeight = content.scrollHeight;

      if (contentHeight > 150) {
        desc.classList.add("truncated");

        if (!existingButton) {
          const button = document.createElement("button");
          button.className = "btn-read-more container";
          button.textContent = "Xem thêm";
          desc.appendChild(button);

          button.addEventListener("click", function () {
            desc.classList.toggle("expanded");
            button.textContent = desc.classList.contains("expanded")
              ? "Thu gọn"
              : "Xem thêm";
          });
        }
      } else {
        if (existingButton) {
          existingButton.remove();
        }
        desc.classList.remove("truncated", "expanded");
      }
    });
  }

  useEffect(() => {
    initReadMore();
  }, []);

  return (
    <section className="block-bg bg-feedbacks py-5 py-xl-6">
      <div className="container">
        <div className="title-box text-center mb-4 mb-xl-6 w-lg-75 mx-auto">
          <div className="tt tt-custom-bg mb-2 fadeIn">TESTIMONIALS</div>
          <h2 className="tt-md tt-gradient mb-0 zoomOutIn">
          KHÁCH HÀNG NÓI GÌ VỀ INTERDATA
          </h2>
          <p className="x-text-xl mb-0d x-font-bold">
          Sự hài lòng và thành công của Quý khách là minh chứng rõ ràng nhất cho chất lượng dịch vụ VPS n8n tại InterData.

          </p>
        </div>
      </div>
      <div className="feedback__wrapper fadeInUp">
        <Swiper
          className="feedback__slider"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          speed={350}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          // autoplay={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ el: ".feedback__pagination", clickable: true }}
          navigation={{
            nextEl: ".feedback__navigation .next",
            prevEl: ".feedback__navigation .previous",
          }}
          breakpoints={{
            540: { slidesPerView: 1.5, slidesPerGroup: 1 },
            768: { slidesPerView: 2.25, slidesPerGroup: 2 },
            992: { slidesPerView: 3, slidesPerGroup: 3 },
            1200: { slidesPerView: 3.5, slidesPerGroup: 3 },
            1400: { slidesPerView: 4, slidesPerGroup: 4 },
            1600: { slidesPerView: 4.5, slidesPerGroup: 4 },
            1700: { slidesPerView: 5, slidesPerGroup: 2 },
          }}
        >
          <SwiperSlide>
            <div className="block">
              <div className="thumb-res kh wide1">
                <img
                  src="images/skin/customer/logo-seoviet.png"
                  alt="Lê Minh Hưng SEO Việt"
                  slug="le-minh-hung-seo-viet"
                />
              </div>
              <div className="info">
                <div className="desc">
                  <p className="desc-content">
                    Sau 1 thời gian trải nghiệm và đã sử dụng dịch vụ của
                    InterData thì Hưng đáng giá chất lượng dịch vụ khá là tốt.
                    <br />
                    Hưng cũng dùng dịch vụ rất nhiều bên ở việt nam rồi thì thấy
                    dịch vụ không thua kém bất kể bên nào nhiều khi còn nhỉnh
                    hơn các bên. Hệ thống ổn định, đặc biệt giá thành tốt hơn so
                    với các bên trên thị trường.
                    <br />
                    Mong muốn của Hưng cũng như tất cả khách hàng là InterData
                    sẽ duy trì sự ổn định bền vững ở hiện tại và tương lai. Để
                    web của khách hàng tập trung vào công việc phát triển doanh
                    nghiệp.
                  </p>
                  <br />
                </div>
                <div className="author">Lê Hưng</div>
                <div className="job">SEO Việt</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="thumb-res kh wide1">
                <img
                  src="images/skin/customer/logo-realdev.png"
                  alt="Vĩnh Minh Đạo - RealDev"
                  title=" Vĩnh Minh Đạo - RealDev"
                  slug="vinh-minh-dao-realdev"
                />
              </div>
              <div className="info">
                <div className="desc">
                  <p className="desc-content">
                    Với tư cách là đơn vị sử dụng trực tiếp và cung cấp dịch vụ
                    website đến khách hàng Toàn quốc. Mình đã sử dụng dịch vụ
                    của các đơn vị cung cấp VPS, Hosting, Dedicate từ trong nước
                    đến nước ngoài.
                    <br />
                    Bên mình có kinh nghiệm trong việc tự vận hành Dedicate, VPS
                    nên rất chú trọng vào việc lựa chọn nhà cung cấp dịch vụ lưu
                    trữ.
                    <br />
                    Được biết đến InterData là công ty chuyên sâu về giải pháp
                    liền mạch như phần cứng cao cấp, hỗ trợ Anti-DDoS, độ trễ
                    thấp và đường truyền kết nối mạnh. Sau khi sử dụng dịch vụ
                    VPS tại đây, mình rất ấn tượng với cấu hình chuẩn chỉnh và
                    giá trị thực tế của dịch vụ. Vì thế mình đánh giá rất cao
                    thái độ cầu thị của toàn thể công ty InterData và chất lượng
                    sản phẩm dịch vụ.
                  </p>
                  <br />
                </div>
                <div className="author">Vĩnh Minh Đạo</div>
                <div className="job">RealDev</div>
              </div>
            </div>
          </SwiperSlide>
          {/* Add other SwiperSlide components here similarly */}

          <SwiperSlide>
            <div className="block">
              <div className="thumb-res kh wide1">
                <img
                  src="images/skin/customer/balico.png"
                  alt="Trịnh Bảo - Balico"
                  slug=" trinh-bao-balico"
                  title="Trịnh Bảo - Balico"
                />
              </div>
              <div className="info">
                <div className="desc">
                  <p className="desc-content">
                    Mình thấy khá hài lòng với dịch vụ Cloud AMD của InterData.
                    Website chạy ổn định, hiệu suất và các tính năng đều đáp ứng
                    tốt nhu cầu của mình. <br />
                    Có lúc cũng gặp vài trục trặc nhỏ, nhưng đội ngũ kỹ thuật xử
                    lý rất nhanh và nhiệt tình. <br />
                    Nhìn chung, dùng dịch vụ của InterData mình cảm thấy rất yên
                    tâm.
                  </p>
                  <br />
                </div>

                <div className="author">Trịnh Bảo</div>
                <div className="job">BALICO</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="thumb-res kh wide1">
                <img
                  src="images/skin/customer/logo-themewpgiare-truongphong.png"
                  alt="Trường Phong"
                  slug="truong-phong"
                  title=" Trường Phong"
                />
              </div>
              <div className="info">
                <div className="desc">
                  <p className="desc-content">
                    Từ lúc chuyển qua dùng VPS của InterData, mình thấy website
                    chạy mượt hơn hẳn, hiếm khi gặp lỗi.
                    <br />
                    Đội ngũ hỗ trợ cũng rất chuyên nghiệp, lúc nào cần là phản
                    hồi liền. Hiện tại thì mình hoàn toàn hài lòng với dịch vụ
                    này.
                  </p>
                </div>

                <div className="author">Trường Phong</div>
                <div className="job">
                  CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ TRƯỜNG PHONG
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="block">
              <div className="thumb-res kh wide1">
                <img
                  src="images/skin/customer/logo-umix-vietnam.png"
                  alt=" Thắng Nguyễn - Umix Việt Nam"
                  slug="thang-nguyen-umix-viet-nam"
                  title="Thắng Nguyễn - Umix Việt Nam"
                />
              </div>
              <div className="info">
                <div className="desc">
                  <p className="desc-content">
                    Tôi đã chuyển website Umix sang chạy ở Interdata, điều tôi
                    hài lòng nhất chính là sự nhiệt tình cả các bạn, hỗ trợ mọi
                    vấn đề một cách nhanh chóng ngay cả lúc nửa đêm.
                  </p>
                  <br />
                  <br />
                </div>

                <div className="author">Thắng Nguyễn</div>
                <div className="job">UMIX VIỆT NAM</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="thumb-res kh wide1">
                <img
                  src="images/skin/customer/logo-digizone-vietnam.png"
                  alt="Trần Mạnh Hùng - Digizone Việt Nam"
                  slug="tran-manh-hung-digizone-viet-nam"
                  title="Trần Mạnh Hùng - Digizone Việt Nam"
                />
              </div>
              <div className="info">
                <div className="desc">
                  <p className="desc-content">
                    Bên mình là Agency về thiết kế web và Ads nên rất chú trọng
                    quan tâm về tính ổn định, bảo mật của VPS, Hosting để đảm
                    bảo chất lượng dịch vụ của bên anh với khách hàng. Từ khi
                    dùng dịch vụ của InterData thì mình thấy hạ tầng bên
                    InterData mạnh, với thường cập nhật các dòng cấu hình server
                    mới, tốc độ kết nối nhanh và đội ngũ hỗ trợ nhiệt tình. Mình
                    tin tưởng vào chất lượng dịch vụ của InterData sẽ luôn đảm
                    bảo được tính ổn định và bảo mật cao, đáp ứng tốt nhu cầu
                    cho các dự án của bên anh.
                  </p>
                  <br />
                </div>

                <div className="author">Trần Mạnh Hùng</div>
                <div className="job">DIGIZONE VIỆT NAM</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="thumb-res kh wide1">
                <img
                  src="images/skin/customer/logo-donghohaitrieu.png"
                  alt="dang-hai-trieu-dong-ho-hai-trieu"
                  slug="tran-manh-hung-digizone-viet-nam"
                  title="Đặng Hải Triều - Đồng Hồ Hải Triều"
                />
              </div>
              <div className="info">
                <div className="desc">
                  <p className="desc-content">
                    Chất lượng dịch vụ rất tốt! <br />
                    Đội ngũ hỗ trợ mau chóng, phối hợp nhịp nhàng để hỗ trợ mấy
                    ca khó! Linh hoạt xử lý mấy tình huống ngoài phạm vi trách
                    nhiệm luôn. Rất tuyệt vời.
                  </p>
                  <br />
                  <br />
                </div>

                <div className="author">Đặng Hải Triều</div>
                <div className="job">ĐỒNG HỒ HẢI TRIỀU</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="thumb-res kh wide1">
                <img
                  src="images/skin/customer/logo-jobkey.png"
                  alt="Tạ Quốc Khánh"
                  slug="ta-quoc-khanh"
                  title="Tạ Quốc Khánh"
                />
              </div>
              <div className="info">
                <div className="desc">
                  <p className="desc-content">
                    Tôi đang sử dụng nhiều VPS tại Interdata chạy hàng nghìn
                    trang web từ 2022 đến nay. Cảm nhận của tôi về dịch vụ là
                    rất tốt, website hoạt động ổn định, đội ngũ hỗ trợ kỹ thuật
                    nhiệt tình và nhanh chóng.
                    <br />
                    Tôi sẽ giới thiệu thêm cho bạn bè và đối tác của mình về
                    dịch vụ của Interdata trong thời gian tới.
                  </p>
                  <br />
                </div>

                <div className="author">Tạ Quốc Khánh</div>
                <div className="job">Công Ty Cổ Phần Jobke</div>
              </div>
            </div>
          </SwiperSlide>

          <div className="feedback__pagination" />
        </Swiper>
      </div>
    </section>
  );
}
