/* eslint-disable @next/next/no-img-element */
import { assetPrefix } from "@/next.config.js";
const cards = [

  {
    id: 1,
    icon: "/images/icon/7x24h-svgrepo-com.png",
    title: "Hỗ trợ kỹ thuật 24/7",
    description:
      "Đội ngũ kỹ thuật viên giàu kinh nghiệm của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Bất kỳ lúc nào bạn cần, chúng tôi luôn có mặt để giải quyết mọi vấn đề, đảm bảo hệ thống hoạt động ổn định.",
    delayAnim: "100",
  },

  {
    id: 2,
    icon: "/images/icon/lite-speed.png",
    title: "LiteSpeed Web Server",
    description:
      "Sử dụng LiteSpeed Web Server, InterData cải thiện tốc độ tải trang và khả năng xử lý đồng thời nhiều yêu cầu, mang lại hiệu suất vượt trội cho website của bạn, nâng cao trải nghiệm người dùng và tối ưu hóa SEO.\n",
    delayAnim: "300",
  },
  {
    id: 3,
    icon: "/images/icon/giao-dien.png",
    title: "Giao diện quản lý thân thiện",
    description:
      "Giao diện quản lý hosting tại InterData thân thiện và dễ sử dụng, giúp bạn dễ dàng thực hiện các thao tác quản trị như cài đặt phần mềm, quản lý tài nguyên và theo dõi hiệu suất, tiết kiệm thời gian và công sức.\n",
    delayAnim: "300",
  },
  {
    id: 4,
    icon: "/images/icon/chuyen-du-lieu.png",
    title: "Hỗ trợ chuyển dữ liệu",
    description:
      "InterData cung cấp dịch vụ hỗ trợ chuyển dữ liệu từ nhà cung cấp cũ sang hệ thống của chúng tôi, đảm bảo quá trình di chuyển suôn sẻ và an toàn. Đội ngũ kỹ thuật của chúng tôi sẽ hỗ trợ bạn từng bước để đảm bảo quá trình này diễn ra hiệu quả.",
    delayAnim: "300",
  },
];

const IncludedPlan = () => {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="col-lg-5 col-sm-6 mb-4 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay={card.delayAnim}
            >
              <div className="card-style-eleven text-center text-lg-start w-100 border border-gray-300 p-4 shadow-md">
              <div className="small-icon-container align-items-center justify-content-center position-relative rounded-circle">
                  <img
                    src={assetPrefix + card.icon}
                    alt="illustration"
                    className="lazy-img small-icon"
                  />
                </div>
                <h3 className="mt-3 mb-2 ">{card.title}</h3>
                
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

//vẫn bị cắt chữ chờ fix

export default IncludedPlan;
