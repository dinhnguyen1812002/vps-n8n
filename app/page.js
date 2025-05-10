/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import IncludedPlan from "@/components/IncludedPlan";
import Reason from "@/components/Reason";
import Partner from "@/components/Partner";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import CallToActions from "@/components/CallToActions";
import OpenChat from "@/components/OpenChat";
import FaqOpenChat from "@/components/FaqOpenChat";
import { assetPrefix } from "@/next.config";
import ProcedureSteps from "@/components/Procedure";
// import Benefits from "@/components/Benefits"
const title = "[2025] Dịch Vụ VPS Tích Hợp n8n Sẵn | Giá Rẻ – Cấu Hình Cao";
const description =
  "Dịch vụ thuê VPS n8n | Cài đặt n8n 1-click – Free subdomain – Tự động hóa quy trình, tiết kiệm thời gian – CPU AMD/Intel – SSD NVMe – Hiệu suất cao, ổn định.";

const keywords =
  "đăng ký hosting, thuê hosting, mua hosting, dịch vụ thuê hosting, web hosting, thuê hosting giá rẻ, cho thuê hosting, bảng giá thuê hosting, hosting giá rẻ, hosting wordpress, dịch vụ hosting, dịch vụ web hosting, website hosting, giá hosting, hosting chất lượng, hosting chất lượng cao, mua hosting giá rẻ chất lượng, hosting giá rẻ chất lượng, hosting tốc độ cao, hosting hỗ trợ tốt, gói hosting doanh nghiệp, hosting ssd, thuê hosting uy tín, dịch vụ hosting uy tín";

export const metadata = {
  metadataBase: new URL("https://interdata.vn/vps-n8n/"),
  title,
  description,
  keywords,
  icons: {
    icon: "https://interdata.vn/assets/favicon.ico",
    shortcut:
      "https://interdata.vn/assets/favicon.ico",
    apple:
      "https://interdata.vn/assets/favicon.ico",
    other: {
      rel: "https://interdata.vn/assets/favicon.ico",
      url: "https://interdata.vn/assets/favicon.ico",
    },
  },
  alternates: {
    canonical: "https://interdata.vn/vps-n8n/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://interdata.vn/vps-n8n/",
    title,
    description,
    images: "https://interdata.vn/thue-hosting/ogimage.png",
  },
  robots: {
    index: true,
    follow: true,
  },

};

export default function Component() {
  return (
    <>
      <Header />
      <Hero />
      <div className="partner-section-four position-relative pt-100 sm-pt-70">
        <div className="wrapper m-auto">
          <div className="partner_slider_one row">
            <Partner />
          </div>
        </div>
      </div>

      <>
        <div className="pricing-section-four pt-170 lg-pt-100" id="pricing">
          <div className="container">
            <div className="row">
              <div className="col-xxl-10 col-md-9 m-auto">
                <div
                  className="title-style-seven text-center"
                  data-aos="fade-up"
                >
                  <div className="title-box mb-4 mb-xl-45 wow fadeIn text-center w-lg-75 mx-auto" style={{ visibility: 'visible' }}>
                    <div className="tt tt-custom-bg mb-2">LINH HOẠT</div>
                    <h2 className="tt-md tt-gradient text-uppercase mb-3">
                      BẢNG GIÁ THUÊ VPS TÍCH HỢP N8N <br />
                      GIÁ RẺ - CHẤT LƯỢNG CAO
                    </h2>
                    <p className="x-text-xl">
                      InterData cung cấp nhiều gói dịch vụ VPS tích hợp sẵn n8n,
                      được thiết kế để đáp ứng đa dạng nhu cầu sử dụng với mức giá rẻ và chất lượng cao.
                      Dưới đây là thông tin chi tiết về các gói VPS phổ biến:
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="wrapper pricing-table-area-four m-auto pt-40 lg-pt-30">
            <div className="row x-flex x-justify-center">
              <Pricing />
            </div>
          </div>
          {/* <OpenChat /> */}
        </div>

        <div className="fancy-feature-twentyThree mt-50 lg-mt-100">
          <div className="fancy-feature-twentyThree mt-100 lg-mt-100 ">
            <div className="container">
              <div
                className="title-style-seven text-center pb-20"
                data-aos="fade-up"
              >
                <div className="title-box mb-4 mb-xl-45 wow fadeIn text-center w-lg-75 mx-auto" style={{ visibility: 'visible' }}>
                  <div className="tt tt-custom-bg mb-2">LỢI ÍCH</div>
                  <h2 className="tt-md tt-gradient text-uppercase mb-3">
                    TẠI SAO CHỌN VPS ĐỂ SELF-HOST N8N?
                  </h2>
                  <p className="x-text-xl mb-1">
                    Self-host n8n trên VPS mang lại nhiều lợi thế cho người dùng cần sự linh hoạt
                    và kiểm soát cao trong việc tự động hóa quy trình.
                    Đây là lựa chọn tối ưu để khai thác toàn bộ tiềm năng của n8n.
                  </p>
                </div>
              </div>
              {/* /.title-style-seven */}
              <div className="row gx-xl-5">
                {/* <Benefits /> */}
                {<Reason />}
              </div>
            </div>
            {/* /.container */}
          </div>

          <div className="container x-mt-10">
            <div
              className="title-style-seven text-center pb-20"
              data-aos="fade-up"
            >
              <div className="title-box mb-4 mb-xl-45 wow fadeIn text-center w-lg-75 mx-auto mt-100" style={{ visibility: 'visible' }}>
                <div className="tt tt-custom-bg mb-2">ƯU ĐIỂM</div>
                <h2 className="tt-md tt-gradient text-uppercase mb-3">
                  DỊCH VỤ VPS N8N INTERDATA <br />
                  TĂNG TỐC TỰ ĐỘNG HÓA
                </h2>
                <p className="x-text-xl mb-0d ">
                  InterData cung cấp giải pháp VPS có tích hợp bản OS được cài
                  n8n để Quý khách có thể triển khai 
                  và  vận hành n8n một cách hiệu quả, nhanh chóng,
                  tận dụng tối đa sức mạnh của công cụ tự động hóa này
                </p>
              </div>
            </div>
            {/* /.title-style-seven */}
            <div className="row gx-xl-5">
              <IncludedPlan />
            </div>
          </div>

        </div>

        <div className="fancy-feature-twentyThree mt-35">
          <div className="container">
            <div className="border-top">
              <div className="row gx-xxl-5">

              </div>
            </div>
          </div>

        </div>
        <ProcedureSteps />
        <Testimonial />
        <Blog />


        <div className="fancy-feature-twentyFive mt-100 lg-mt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 m-auto" data-aos="fade-up">
                <div
                  className="title-style-seven text-center lg-pb-50"
                  data-aos="fade-up"
                >
                  <div className="title-box mb-4 mb-xl-45 wow fadeIn text-center w-lg-75 mx-auto" style={{ visibility: 'visible' }}>
                    <div className="tt tt-custom-bg mb-2">FAQs</div>
                    <h2 className="tt-md tt-gradient text-uppercase mb-3">
                      MỘT SỐ CÂU HỎI THƯỜNG GẶP
                    </h2>
                    <p className="x-text-xl  mb-0d ">
                    Sau đây là giải đáp cho một số thắc mắc phổ biến về <br />
                     dịch vụ VPS tích hợp n8n tại InterData:

                </p>
                  </div>
                </div>

              </div>
              <div data-aos="fade-up">
                <Faq />
                {/* <FaqOpenChat /> */}
              </div>
            </div>
          </div>

        </div>

        <CallToActions />

        <div className="footer-style-seven p-30 theme-basic-footer">
          <div className="bg-wrapper position-relative">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-2 footer-intro mb-40">

                </div>

              </div>

            </div>

          </div>

        </div>

        <Footer />
      </>
    </>
  );
}
