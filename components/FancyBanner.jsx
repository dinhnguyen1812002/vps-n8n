/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { assetPrefix } from "@/next.config.js";

const FancyBanner = () => {
  const bannerData = [
    {
      title: "AN TOÀN VÀ BẢO MẬT",
      mainTitle: "Dữ liệu của bạn được backup thường xuyên.",
      description:
        "Cloud Hosting của chúng tôi đảm bảo website của bạn hoạt động xuyên suốt và ổn định mọi lúc mọi nơi.",
      buttonLabel: "",
      illustration: "/images/illustration/illustration-1.svg",
      illustrationAlt: "illustration",
      illustrationPosition: "right",
      aos: "fade-right",
    },
    {
      title: "HỖ TRỢ 24/7",
      mainTitle: "Hỗ trợ chuyển đổi website miễn phí.",
      description:
        "Chúng tôi sẽ giúp bạn chuyển đổi website từ máy chủ cũ sang máy chủ mới một cách nhanh chóng và dễ dàng.",
      buttonLabel: "",
      illustration: "/images/illustration/main-illustration-4.svg",
      illustrationAlt: "illustration",
      illustrationPosition: "left",
      aos: "fade-left",
    },
  ];

  return (
    <div className="fancy-feature-twentyFour mt-225 lg-mt-130">
      <div className="container">
        {bannerData.map((data, index) => (
          <div className="block-style-four mt-200 lg-mt-100" key={index}>
            <div className="row align-items-center">
              <div
                className={`col-xl-5 col-lg-6 order-lg-${
                  data.illustrationPosition === "left" ? "first" : "last"
                }`}
                data-aos={data.aos}
              >
                <div className="title-style-eight">
                  <div className="sc-title text-uppercase">{data.title}</div>
                  <h2 className="main-title tx-dark fw-bold">
                    {data.mainTitle}
                  </h2>
                </div>
                <p className="fs-20 lh-lg mt-35 lg-mt-20">{data.description}</p>
                {data.buttonLabel !== "" && (
                  <Link
                    href="#"
                    className="btn-fifteen fw-500 position-relative d-inline-flex align-items-center"
                  >
                    <span>{data.buttonLabel}</span>
                    <img
                      src={assetPrefix + "/images/icon/icon_69.svg"}
                      alt={data.illustrationAlt}
                      className="ms-2"
                    />
                  </Link>
                )}
              </div>
              <div
                className={`col-xl-7 col-lg-6 col-md-8 m-auto order-lg-${
                  data.illustrationPosition === "left" ? "last" : "first"
                }`}
                data-aos={data.aos}
              >
                <div
                  className={`illustration-holder md-mt-60 x-flex x-justify-center ${
                    data.illustrationPosition === "left"
                      ? "md:x-justify-end"
                      : ""
                  }`}
                >
                  <img
                    src={assetPrefix + data.illustration}
                    alt={data.illustrationAlt}
                    className="lazy-img x-w-2/3"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FancyBanner;
