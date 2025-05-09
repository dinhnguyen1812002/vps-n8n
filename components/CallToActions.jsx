"use client";

import Link from "next/link";
import React from "react";
import { livechat } from "@/lib/utils";
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
const CallToActions = () => {
  return (
    <div
      className="fancy-short-banner-ten position-relative mt-225 lg-mt-100"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="bg-wrapper position-relative pt-50 pb-65 lg-pt-40 lg-pb-50">
          <div className="row">
            <div className="row x-justify-center">

              {/* End .col-6 */}
              <div className="title-box mb-4 mb-xl-45 wow fadeIn text-center w-lg-75 mx-auto" style={{ visibility: 'visible' }}>
                <div className="tt tt-custom-bg mb-2 x-text-white">LINH HOẠT</div>
                <h2 className="tt-md x-text-white text-uppercase mb-0">
                  BẢNG GIÁ THUÊ VPS TÍCH HỢP N8N <br />
                  GIÁ RẺ - CHẤT LƯỢNG CAO
                </h2>
                <p className="x-text-lg x-font-bold x-text-white">
                  InterData cung cấp nhiều gói dịch vụ VPS tích hợp sẵn n8n,
                  được thiết kế để đáp ứng đa dạng nhu cầu sử dụng với mức giá rẻ và chất lượng cao.
                  Dưới đây là thông tin chi tiết về các gói VPS phổ biến:
                </p>
              </div>

              <div className="x-flex x-justify-center x-items-center x-space-x-10">
              <a
                  onClick={() => scrollToSection('pricing')}
                  className="btn-fourteen fw-500 tran3s !x-text-white x-border x-rounded-lg"
                  style={{scrollBehavior: 'smooth'}}
                >
                 Bảng giá
                </a>
                <a
                onClick={(e) => livechat(e)}
                className="btn-line fw-500 tran3s position-relative me-sm-5 text-white"
              >
                Chat với tư vấn viên
              </a>
              </div>


              {/* End .col-6 */}
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
    </div>
  );
};

export default CallToActions;
