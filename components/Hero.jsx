/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { assetPrefix } from "@/next.config.js";

import { CheckBadgeIcon } from "@heroicons/react/24/solid";
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
const Hero = () => {
  return (
    <div className="hero-banner-seven">
      <div className="bg-wrapper position-relative pt-200 pb-20 md-pt-150">
        <div className="container x-flex x-items-center x-justify-center">
          <div className="row">
            <div className="col-lg-6 col-md-7" data-aos="fade-right">
              <Link
                href="#pricing"
                className="slogan d-inline-block !x-pl-0.5 md:!x-pl-2"
              >
           
                {/* <i className="fas fa-chevron-right" /> */}
                Mạnh mẽ & Linh hoạt
              </Link>
              <h1 className="md:text-[60px] font-extrabold md:leading-[17px] !x-font-black tx-dark mt-25 !x-text-3xl md:text-4xl ">
                {/* Thuê Hosting Giá Rẻ Chất Lượng Cao */}
                DỊCH VỤ THUÊ VPS TÍCH HỢP N8N 
                <br />
                GIÁ RẺ – CẤU HÌNH CAO – ỔN ĐỊNH
              </h1>
              <p className="text-base  pt-35 pe-xxl-5 md-pt-30 ">
                <a href="https://interdata.vn/vps-n8n/">VPS n8n</a>  tại InterData là dịch vụ thuê máy chủ ảo (VPS) được tích hợp OS template cài sẵn n8n, 
              lý tưởng cho cá nhân và doanh nghiệp muốn tự động hóa quy trình công việc, tiết kiệm thời gian và tối ưu hóa hiệu suất.
              </p>
              <div className="x-flex">
                <span className="icon">
                  <CheckBadgeIcon className="x-w-6 x-h-6 x-text-blue-600" />
                </span>
                <span >Thiết lập n8n chỉ với 1-click đơn giản</span>
              </div>
              <p className="x-flex">
              <span className="icon">
                    <CheckBadgeIcon className="x-w-6 x-h-6 x-text-blue-600" />
                  </span>
                  <span >Thiết lập n8n chỉ với 1-click đơn giản</span>
              </p>
              <ul className="x-list-none x-space-y-2 x-list-inside x-mt-3 x-mb-3">
                <li className="x-flex">
                <span className="icon">
                    <CheckBadgeIcon className="x-w-6 x-h-6 x-text-blue-600" />
                  </span>
                  <span >Thiết lập n8n chỉ với 1-click đơn giản</span>
                </li>
                <li className="x-flex" >
                  <CheckBadgeIcon className="x-w-6 x-h-6 x-text-blue-600" />
                  Công cụ n8n phiên bản mới nhất
                </li>
                <li className="x-flex ">
                  <CheckBadgeIcon className="x-w-6 x-h-6 x-text-blue-600" />
                  Miễn phí subdomain
                </li>
                <li className="x-flex">
                  <CheckBadgeIcon className="x-w-6 x-h-6 x-text-blue-600" />
                  CPU AMD Epyc/Intel Xeon, SSD NVMe U.2
                </li>
                <li className="x-flex">
                  <CheckBadgeIcon className="x-w-6 x-h-6 x-text-blue-600" />
                  Hiệu suất cao - Ổn định - Uptime 99,9%
                </li>
                <li className="x-flex">
                  <CheckBadgeIcon className="x-w-6 x-h-6 x-text-blue-600" />
                  Hỗ trợ kỹ thuật nhanh chóng 24/7
                </li>
                <li className="x-flex">
                <CheckBadgeIcon className="x-w-6 x-h-6 x-text-blue-600" />
                  Kích hoạt tự động, sử dụng ngay lập tức
                </li>
              </ul>
              <a
                href="Bảng giá VPS n8n"
               
                className="btn-fourteen fw-500 tran3s !x-text-white mt-10"
              >
                Bảng giá
              </a>
            </div>
          </div>

          <div
            className="x-absolute x-right-0 x-w-[50%] x-top-[20%] x-hidden md:x-block"
            data-aos="fade-left"
          >
            <img
              src={assetPrefix + "/images/illustration/vps-n8n.png"}
              alt="illustration"
              className="lazy-img main-illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
