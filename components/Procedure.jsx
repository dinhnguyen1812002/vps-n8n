import { assetPrefix } from "@/next.config";
import Image from "next/image";

export default function Procedure() {
    const items = [
        {
            icon: "/procedure/goi-vps.png",
            title: "Chọn gói VPS phù hợp",
            desc: "Bảng giá thuê VPS n8n, kiểm tra các thông số về CPU, RAM, SSD và băng thông để lựa chọn gói VPS phù hợp với quy mô và yêu cầu tự động hóa của Quý khách",
            number: "01"
        },

        {
            icon: "/procedure/os-ubuntu.png",
            title: `Chọn OS "Ubuntu-20.04-n8n`,
            desc: `Khi cấu hình VPS, chọn OS template "Ubuntu-22.04-n8n", hoàn tất đăng ký và thanh toán. Hệ thống sẽ tự động cài đặt n8n sẵn sàng cho Quý khách sử dụng.`,
            number: "02"
        },
        {
            icon: "/procedure/n8n-logo.png",
            title: "Truy cập n8n",
            desc: "Sau khi VPS được khởi tạo và n8n cài đặt, InterData sẽ gửi đường dẫn truy cập vào n8n qua Email.",
            number: "03"
        },
    ];

    return (
        <section className=" x-py-12 x-px-4 x-md:px-12 x-mt-6  mb-10 ">
            <div className="title-box mb-4 mb-xl-45 wow fadeIn text-center w-lg-75 mx-auto" style={{ visibility: 'visible' }}>
                <div className="tt tt-custom-bg mb-2">HƯỚNG DẪN</div>
                <h2 className="tt-md tt-gradient text-uppercase mb-0">
                    QUY TRÌNH SET UP N8N VỚI VPS <br />
                    TẠI INTERDATA CHỈ VỚI VÀI CLICK
                </h2>

                <p className="x-text-xl text-uppercase mb-0d x-font-bold x-mt-5">
                    Self-host n8n trên VPS mang lại nhiều lợi thế cho người dùng cần sự linh hoạt
                    và kiểm soát cao trong việc tự động hóa quy trình.
                    Đây là lựa chọn tối ưu để khai thác toàn bộ tiềm năng của n8n.
                </p>
            </div>
            <div className="x-grid x-grid-cols-3 x-md:grid-cols-3 x-gap-8 x-mt-12">
                {/* Content boxes with icons, titles and descriptions */}
                {items.map((item, idx) => (
                    <div key={idx} className="x-flex x-flex-col x-items-center x-text-center">
                        <div className="x-mb-4">
                            <Image src={assetPrefix + item.icon} width={50} height={50} alt={item.title} />
                        </div>
                        <h3 className="x-font-bold x-text-xl x-mb-2">{item.title}</h3>
                        <p className="x-text-gray-500 x-mb-6">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Separate row for numbers with a connecting line */}
            <div className="x-relative x-mt-4">
                {/* Connecting dashed line from number 1 to number 3 */}
                <div className="x-absolute x-border-t-2 x-border-dashed x-border-gray-300 x-top-1/2 x-left-[calc(16.67%+12px)] x-right-[calc(16.67%+12px)] x-z-0"></div>

                {/* Numbers container */}
                <div className="x-grid x-grid-cols-3 x-md:grid-cols-3 x-gap-8 x-relative z-10">
                    {items.map((item, idx) => (
                        <div key={idx} className="x-flex x-justify-center">
                            <div className="x-bg-white x-border x-border-dashed x-border-gray-300 x-rounded-full x-px-4 x-py-2 x-text-[#1890ff] x-font-semibold">
                                {item.number}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}