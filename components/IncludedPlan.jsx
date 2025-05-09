/* eslint-disable @next/next/no-img-element */
import { assetPrefix } from "@/next.config.js";


//   {
//     id: 1,
//     icon: "/images/icon/icon_72.svg",
//     title: "LiteSpeed Web Server",
//     description:
//       "Tăng tốc website lên hơn 500% so với sử dụng NGINX và 600% so với Apache với LSWS cùng LSCache, ESI và Crawler.",
//     delayAnim: "100",
//   },
//   {
//     id: 2,
//     icon: "/images/icon/icon_72.svg",
//     title: "SSD NVMe U2",
//     description:
//       "Hệ thống lưu trữ sử dụng hoàn toàn ổ cứng SSD dòng Enterprise hiệu năng cao để tăng tốc độ website.",
//     delayAnim: "200",
//   },
//   {
//     id: 3,
//     icon: "/images/icon/icon_72.svg",
//     title: "PHP Mới Nhất",
//     description:
//       "Chúng tôi đảm bảo luôn cập nhật các phiên bản PHP mới nhất đảm bảo cho website của bạn luôn được bảo vệ khỏi các lỗ hổng bảo mật cũng như tối ưu về tốc độ tải trang.",
//     delayAnim: "300",
//   },
//   {
//     id: 4,
//     icon: "/images/icon/icon_72.svg",
//     title: "Đường Truyền Ổn Định",
//     description:
//       "Chúng tôi đảm bảo rằng đường truyền mạng nhanh và ổn định nhất và liên tục tối ưu hóa đường truyền mạng của mình để giữ cho trang web của bạn tải nhanh nhất có thể.",
//     delayAnim: "100",
//   },
//   {
//     id: 5,
//     icon: "/images/icon/icon_72.svg",
//     title: "Backup Thường Xuyên",
//     description:
//       "Mặc định chúng tôi sẽ backup hàng tuần. Tuy nhiên chúng tôi có thể backup hàng ngày hoặc bất cứ khi nào quý khách yêu cầu.",
//     delayAnim: "200",
//   },
//   {
//     id: 6,
//     icon: "/images/icon/icon_72.svg",
//     title: "Dễ Dàng Nâng Cấp",
//     description:
//       "Trong quá trình sử dụng nếu vượt quá tài nguyên cho phép, quý khách có thể mua thêm hoặc liên hệ với nhân viên để được hướng dẫn.",
//     delayAnim: "300",
//   },
// ];
const cards = [
  {
    id: 1,
    icon: "/images/icon/hdd-svgrepo-com.svg",
    title: "Set-up n8n nhanh chóng",
    description: `Với bản OS tích hợp n8n, Quý khách chỉ cần chọn template khi đăng ký dịch vụ, VPS sẽ tự động cài đặt n8n và sẵn sàng cho hoạt động, tiết kiệm thời gian cấu hình.`,
    delayAnim: "100",
  },
  {
    id: 2,
    icon: "/images/icon/time-svgrepo-com.svg",
    title: "Hạ tầng VPS mạnh mẽ",
    description:
      "VPS n8n sử dụng CPU AMD Epyc hoặc Intel Xeon, kết hợp SSD NVMe U.2, mang lại tốc độ đọc/ghi vượt trội, hỗ trợ xử lý dữ liệu nhanh chóng và ổn định cho n8n.",
    delayAnim: "200",
  },
  {
    id: 3,
    icon: "/images/icon/safe-and-stable-svgrepo-com.svg",
    title: "Support 24/7",
    description:
      "Đội ngũ kỹ thuật InterData hỗ trợ Quý khách giải quyết vấn đề về hạ tầng VPS, đảm bảo trải nghiệm sử dụng n8n trên VPS diễn ra suôn sẻ và hiệu quả.",
    delayAnim: "300",
  },
  {
    id: 4,
    icon: "/images/icon/support-online-center-svgrepo-com.svg",
    title: "Đa dạng các gói VPS",
    description:
      "InterData cung cấp đa dạng gói VPS tích hợp n8n với cấu hình linh hoạt, phù hợp với nhiều nhu cầu sử dụng và ngân sách khác nhau, giúp khách hàng lựa chọn giải pháp tối ưu.",
    delayAnim: "100",
  },
  
];
const IncludedPlan = () => {
  return (
    <div className="row">
      {cards.map((card) => (
        <div
          className="col-lg-3 col-sm-6 d-flex"
          key={card.id}
          data-aos="fade-up"
          data-aos-delay={card.delayAnim}
        >
          <div className="card card-style-eleven text-center text-lg-start w-100  lg-mt-50 xs-mt-40" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", textAlign: "center" }}>
            <div className="icon d-flex align-items-center justify-content-center position-relative" style={{ marginBottom: "15px" }}>
              <img
                src={assetPrefix + card.icon}
                alt="illustration"
                className="lazy-img"
                style={{ display: "block", margin: "0 auto" }}
              />
            </div>
            <h3 className="mt-30 mb-20 lg-mb-10 x-whitespace-nowrap">{card.title}</h3>
            <p style={{ textAlign: "left" }}>{card.description}</p>
          </div>
          {/* /.card-style-eleven */}
        </div>
      ))}
    </div>
  );
};

export default IncludedPlan;