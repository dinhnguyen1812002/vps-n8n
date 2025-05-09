"use client";

import { livechat } from "@/lib/utils";

export default function Component() {
  return (
    <div className="container">
      <div className="text-center mt-100 lg-mt-50 " data-aos="fade-up">
        <div className="d-inline-block consult-text fs-18 fw-500 tx-dark">
          Chưa biết chọn lựa gói hosting nào phù hợp? Hãy liên hệ với chúng tôi
          để được
          <a
            href="/contact"
            onClick={(e) => livechat(e)}
            className="fw-normal text-decoration-underline x-ml-1"
          >
            tư vấn miễn phí
          </a>
        </div>
      </div>
    </div>
  );
}
