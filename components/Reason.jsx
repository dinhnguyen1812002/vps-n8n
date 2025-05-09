/* eslint-disable @next/next/no-img-element */
import { assetPrefix } from "@/next.config.js";

const cards = [
  {
    id: 1,
    icon: "/images/icon/backup.svg",
    title: "Toàn quyền quản trị",
    description: `Quý khách sẽ có toàn quyền truy cập root, cho phép cài đặt n8n và tùy chỉnh cấu hình hệ thống theo nhu cầu, đồng thời tích hợp các ứng dụng một cách linh hoạt.`,
    delayAnim: "100",
  },
  {
    id: 2,
    icon: "/images/icon/pendrive.svg",
    title: "Tối ưu chi phí",
    description:
      "Với việc sử dụng VPS, chi phí duy trì n8n sẽ hợp lý hơn khi quy trình tự động hóa phức tạp, bởi Quý khách chỉ trả một mức phí cố định cho tài nguyên VPS đã chọn.",
    delayAnim: "200",
  },
  {
    id: 3,
    icon: "/images/icon/update-svgrepo-com.svg",
    title: "Bảo mật cao",
    description:
      "Khi tự host n8n trên VPS, toàn bộ dữ liệu và thông tin xác thực được lưu trữ trực tiếp, giúp Quý khách kiểm soát bảo mật dữ liệu một cách tối đa và hiệu quả.",
    delayAnim: "300",
  },
  {
    id: 4,
    icon: "/images/icon/manage.svg",
    title: "Nâng cấp linh hoạt",
    description:
      "VPS cung cấp khả năng nâng cấp dễ dàng tài nguyên như CPU, RAM và dung lượng lưu trữ khi nhu cầu tăng cao, giúp duy trì hiệu suất ổn định cho n8n trong suốt quá trình sử dụng.",
    delayAnim: "100",
  }
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
            <h3 className="mt-30 mb-20 lg-mb-10">{card.title}</h3>
            <p style={{ textAlign: "left" }}>{card.description}</p>
          </div>
          {/* /.card-style-eleven */}
        </div>
      ))}
    </div>
  );
};

export default IncludedPlan;
