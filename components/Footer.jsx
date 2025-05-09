import {
  HomeIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import { assetPrefix } from "@/next.config";
export default function Footer() {
  return (
    <>
      <footer className="style-1 footer">
        <div className="max-w-7xl">
          <div className="content pb-10">
            <div className="row justify-content-center flex-lg-row flex-column">
              <div className="col-lg-4 col-12 mb-4 ">
                <div>
                  <div className="logo mb-3">
                    <img
                      src={assetPrefix + "/images/logo/LogoNewSlogan-09.png"}
                      alt="InterData"
                      className="w-40" 
                    />
                  </div>
                  <div className="text mb-4">
                  CÔNG TY CỔ PHẦN INTER GROUP
                  </div>
                  <ul className="mb-4 custom-list">
                    <li className="flex">
                      {/* <div className="icon-container">
                        <HomeIcon className="icon-small" />
                      </div> */}
                      <span>
                      VPĐD:{" "}
                        <a href="https://maps.app.goo.gl/ZxSPDiAQerFgVw5RA" rel="nofollow">
                         240 Nguyễn Đình Chính, P.11. Q. Phú Nhuận, TP. Hồ Chí Minh
                        </a>
                      </span>
                    </li>
                    <li className="flex">
                    {/* <div className="icon-container ">
                      <HomeIcon className="icon-small" />
                    </div> */}
                      <span>
                      VPGD:{" "}
                        <a href="https://maps.app.goo.gl/JdnrU5N9xWYKShqt5" rel="nofollow">
                           211 Đường số 5, Lakeview City,
                          An Phú, Thủ Đức, Hồ Chí
                          Minh
                        </a>
                      </span>
                    </li>
                    <li className="flex">
                      MST:{" "}
                      0316918910
                    </li>
                    <li className="flex">
                      Điện thoại:{" "}
                      
                      <a href="tel:1900636822" rel="nofollow">
                        <span>1900636822</span>
                      </a>
                    </li>
                    <li className="flex">
                      Website:{" "}
                      &nbsp;
                      <a href="https://interdata.vn/" rel="nofollow">
                        <span>interData.vn</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-12 mb-4">
                <div className="links">
                  <div className="cont">
                    <p className="link_title">Dịch vụ</p>
                     <ul className="space-y-2 custom-list">
                      <li>
                        <a href="https://interdata.vn/vietnam-co-location">Thuê chỗ đặt máy chủ</a>
                      </li>
                      <li>
                        <a href="https://interdata.vn/cloud-server/">Thuê Cloud Server</a>
                      </li>
                      <li>
                        <a href="https://interdata.vn/thue-hosting/">Thuê Hosting</a>
                      </li>
                      <li>
                        <a href="https://interdata.vn/vietnam-dedicated-server">Thuê máy chủ</a>
                      </li>
                      <li>
                        <a href="https://interdata.vn/thue-vps/">Thuê VPS</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-12 mb-4">
                <div className="links">
                  <div className="cont">
                    <p className="link_title">Thông tin</p>
                    <ul className="space-y-2 custom-list">
                    <li>
                        <a href="/blog">Blog</a>
                      </li>
                      <li>
                        <a href="/about-us"  rel="nofollow">Giới thiệu</a>
                      </li>
                      <li>
                        <a href="/contact" rel="nofollow">Liên hệ</a>
                      </li>
                     
                      <li>
                        <a href="/blog/khuyen-mai/" rel="nofollow">Khuyến mãi</a>
                      </li>
                      <li>
                        <a href="/blog/su-kien/" rel="nofollow">Sự kiện</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-12 mb-4">
                <div className="links">
                  <div className="cont" style={{ whiteSpace: 'nowrap' }}>
                    <p className="link_title">Quy định và Chính sách</p>
                    <ul className="space-y-2 custom-list">
                    <li>
                        <a href="/chinh-sach-bao-hanh" rel="nofollow">Chính sách bảo hành</a>
                      </li>
                      <li>
                        <a href="/privacy-policy" rel="nofollow">Chính sách bảo mật</a>
                      </li>
                      <li>
                        <a href="/chinh-sach-xu-ly-khieu-nai" rel="nofollow">Chính sách xử lý khiếu nại </a>
                      </li>

                      <li>
                        <a href="/service-level-agreement"rel="nofollow">Cam kết dịch vụ</a>
                      </li>
                      <li>
                        <a href="/terms-and-condition" rel="nofollow">Điều khoản sử dụng</a>
                      </li>
                      <li>
                        <a href="/gdpr" rel="nofollow">GDPR</a>
                      </li>
                      <li>
                        <a href="/hinh-thuc-thanh-toan" rel="nofollow">Hình thức thanh toán</a>
                      </li>
                      <li>
                        <a href="/huong-dan-thanh-toan-vnpay" rel="nofollow">Hướng dẫn thanh toán trên VNPAY</a>
                      </li>
                      <li>
                        <a href="/refund-policy" rel="nofollow">Quy định đổi trả và hoàn trả tiền</a>
                      </li>
                      <li>
                        <a href="/quy-dinh-su-dung-ten-mien" rel="nofollow">Quy định sử dụng tên miền</a>
                      </li>
                    
                    </ul>

                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-12 mb-4">
                <div className="links">
                  <div className="cont">
                    <p className="link_title">Đối tác</p>
                    <ul className="custom-list">
                      <li>#CODETAY</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center text-gray-800">
              served with <HeartIcon style={{ height: '20px', color:'red' }} className="ms-1" /> by xvps
            </div>
          </div>
        </div>
        <img src={assetPrefix + "/images/assets/footer/foot_l.png"} alt="" className="foot_l" />
        <img src={assetPrefix + "/images/assets/footer/foot_r.png"} alt="" className="foot_r" />
      </footer>
    </>
  );
};
