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
      className="fancy-short-banner-ten position-relative x-mt-100 lg-mt-100"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="bg-wrapper position-relative pt-50 pb-65 lg-pt-40 lg-pb-50">
          <div className="row">
            <div className="row x-justify-center">

              {/* End .col-6 */}
              <div className="title-box mb-4 mb-xl-45 wow fadeIn text-center w-lg-75 mx-auto" style={{ visibility: 'visible' }}>
                {/* <div className="tt tt-custom-bg mb-2 x-text-white">LINH HOẠT</div> */}
                <h2 className=" x-text-white text-uppercase mb-0">
                ĐƠN GIẢN HÀNH TRÌNH TỰ ĐỘNG HÓA VỚI VPS N8N INTERDATA!
                </h2>
                <p className="x-text-lg x-font-bold text-white mt-4">
                Cần tư vấn thêm về giải pháp VPS n8n? <br/>
                Liên hệ chuyên gia của InterData!
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
                href="https://www.messenger.com/t/447939705297286" rel="nofollow"
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
