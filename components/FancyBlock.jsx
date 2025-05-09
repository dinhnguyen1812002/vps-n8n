import Image from "next/image";
import { assetPrefix } from "@/next.config";

const FancyBlock = () => {
  const cardsData = [
    {
      iconSrc: "/images/icon/icon_72.svg",
      title: "An toàn đảm bảo",
      description: "Bạn sẽ không bao giờ phải lo lắng về an toàn dữ liệu.",
      delay: "100",
    },
    {
      iconSrc: "/images/icon/icon_72.svg",
      title: "Chính sách hoàn tiền",
      description: "Cam kết hoàn tiền 100% nếu bạn không hài lòng với dịch vụ.",
      delay: "200",
    },
    {
      iconSrc: "/images/icon/icon_72.svg",
      title: "Hỗ trợ dịch vụ 24/7",
      description:
        "Đội ngũ hỗ trợ luôn sẵn sàng 24/7 để giải đáp mọi thắc mắc của bạn.",
      delay: "300",
    },
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="col-lg-4 col-md-6 d-flex"
          data-aos="fade-up"
          data-aos-delay={card.delay}
        >
          <div className={`card-style-eleven d-flex w-100 mt-85 lg-mt-40`}>
            <div className="icon d-flex align-items-center justify-content-center position-relative rounded-circle">
              <Image
                width={24}
                height={24}
                src={assetPrefix + card.iconSrc}
                alt="icon"
                className="lazy-img"
              />
            </div>
            <div className="text">
              <h4 className="mb-10">{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </div>
          {/* /.card-style-eleven */}
        </div>
      ))}
    </>
  );
};

export default FancyBlock;
