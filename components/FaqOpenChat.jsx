"use client";

import { livechat } from "@/lib/utils";

export default function Component() {
  return (
    <div className="text-center  mt-80 lg-mt-50">
      <span className="fw-bold tx-dark mb-30">
        Bạn vẫn không tìm thấy câu trả lời?
      </span>
      <a
        href="/contact"
        onClick={(e) => livechat(e)}
        className="btn-fourteen fw-500 tran3s !x-text-white"
      >
        Hãy liên hệ với chúng tôi
      </a>
    </div>
  );
}
