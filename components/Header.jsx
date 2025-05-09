/* eslint-disable @next/next/no-img-element */

"use client";

import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import { assetPrefix } from "@/next.config";

import "tailwindcss/tailwind.css";
import {
  FaBullhorn,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaYoutube,
  FaFlickr,
} from "react-icons/fa";

const DefaulHeader = () => {
  const promotions = [
    "Giảm đến 99% - Chương trình Black Friday đã chính thức bắt đầu!",
    "Giảm 10% cho hóa đơn từ 1 triệu khi thanh toán qua VNPAY-QR",
  ];
  const [navbar, setNavbar] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prevPromo) => (prevPromo + 1) % promotions.length);
    }, 5100);

    return () => clearInterval(interval);
  }, [promotions.length]);
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <div
        className="text-center notice-banner x-bg-yellow-300 x-absolute x-top-0 x-z-10 x-left-0 x-right-0   
  w-100 x-h-10 x-hidden md:x-flex x-items-center x-justify-between w-full px-4"
        style={{ zIndex: 1000 }}
      >
        {/* Phần Khuyến mãi */}
        <div className="promo-message x-flex x-items-center x-flex-shrink-0">
          {/* <span className="font-bold">Khuyến mãi:</span> */}
        </div>

        {/* Phần Social Links */}
        <div className="social-links x-flex x-items-center">
          <a href="/about-us" className="hover:underline x-ml-2">Giới thiệu</a>
          <a href="/contact" className="hover:underline x-ml-2">Liên hệ</a>
          <a href="https://www.facebook.com/interdata.com.vn" target="_blank" rel="nofollow" className="x-ml-2">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/Interdatavn" target="_blank" rel="nofollow" className="x-ml-2">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/interdata-vn/" target="_blank" rel="nofollow" className="x-ml-2">
            <FaLinkedin />
          </a>
          <a href="https://www.pinterest.com/interdatavn/" target="_blank" rel="nofollow" className="x-ml-2">
            <FaPinterest />
          </a>
          <a href="https://www.reddit.com/user/interdata-vn" target="_blank" rel="nofollow" className="x-ml-2">
            <FaReddit />
          </a>
          <a href="https://www.youtube.com/@interdata-vn" target="_blank" rel="nofollow" className="x-ml-2">
            <FaYoutube />
          </a>
          <a href="https://www.flickr.com/people/interdata-vn/" target="_blank" rel="nofollow" className="x-ml-2">
            <FaFlickr />
          </a>
        </div>
      </div>

      <header
        className={`theme-main-menu sticky-menu theme-menu-six ${navbar ? "fixed" : ""
          }`}
      >
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Link href="/" className="d-block">
                <img
                  src={assetPrefix + "/images/logo/LogoNewSlogan-07.png"}
                  alt="InterData"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            {/* End logo */}
            <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
              <Link
                href="#pricing"
                className="start-btn-one fs-18 fw-500 tran3s position-relative d-none d-lg-block !x-text-white ml-4"
              >
                Đăng ký ngay!
              </Link>
            </div>{" "}
            {/* /.right-widget */}
            <MainMenu />
          </div>
        </div>
        {/* /.inner-content */}{" "}
      </header>
      <style jsx>
        {`
          @keyframes infiniteSlide {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            10% {
              transform: translateY(0);
              opacity: 1;
            }
            90% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-100%);
              opacity: 0;
            }
          }

          .infinite-slide {
            display: inline-block;
            animation: infiniteSlide 5.2s infinite;
          }
        `}
      </style>
    </>
  );
};

export default DefaulHeader;
