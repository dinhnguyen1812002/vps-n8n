"use client";

import { useState, useEffect } from "react";
import MenuData from "../data/menu.json";
import useGlobalStore from "../stores";
import Skeleton from "./PricingSkeleton";
import Button from "./HostingTypeButton";

const bgColors = ["#FFF7EB", "#E2F2FD", "#FFEBEB", "#E4F4F1"];

const numberFormat = (number) => {
  return new Intl.NumberFormat("vi-VN").format(parseFloat(number));
};

const strippedTags = (html) =>
  html.replace(/(<([^>]+)>)/gi, "").replace(/\?/gi, "\n");

const findTheSecondPlanInProducts = (products) => {
  if (!products) return null; // Check for null products array
  const plans = products.filter(
    (product) =>
      !product.name.toLowerCase().includes("custom") &&
      !product.name.toLowerCase().includes("premium hosting")
  );

  return plans[1];
};

const Pricing = () => {
  const { loading, selectedVpsId, prices, getPrices } = useGlobalStore();

  useEffect(() => {
    async function fetchData() {
      await getPrices(selectedVpsId);
    }
    fetchData();
  }, [getPrices, selectedVpsId]);

  return (
    <>
      <div
        className="x-flex x-flex-wrap x-justify-center x-gap-3 md:x-gap-6 x-mb-10"
        id="pricing"
      >
        {MenuData.map((menu) =>
          menu.type === "vps"
            ? menu.items.map((item) => (
                item.gid !== 9 && (
                  <Button
                    key={item.label}
                    name={item.label}
                    gid={item.gid}
                    href={item.link}
                    className="x-flex-grow-0"
                  />
                )
              ))
            : null
        )}
      </div>

      {loading || !prices ? (
        <Skeleton />
      ) : (
        prices?.products?.map((product, index) => {
          if (
            product.name.toLowerCase().includes("custom") ||
            product.name.toLowerCase().includes("premium hosting") ||
            product.name.toLowerCase().includes("amd hosting - plan 0")
          )
            return null;

          const isActive =
            findTheSecondPlanInProducts(prices.products)?.pid === product.pid;

          return (
            <div
              className="col-xl-3 col-sm-6"
              key={product.slug}
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div
                className={`pr-table-wrapper mt-40 x-rounded-xl ${
                  isActive ? "active" : ""
                }`}
              >
                <h4 className="pack-name fw-500 tx-dark">{product.name}</h4>
                <div className="pack-details text-uppercase fs-14">
                  07 ngày dùng thử miễn phí
                </div>
                <div
                  className="top-banner align-items-center d-md-flex !x-pl-[5px]"
                  style={{
                    background:
                      bgColors[Math.floor(Math.random() * bgColors.length)],
                  }}
                >
                  <div className="price fw-500">
                    {numberFormat(
                      parseInt(product.pricing.VND.monthly) > 0
                        ? product.pricing.VND.monthly
                        : product.pricing.VND.quarterly
                    )}
                  </div>
                  <div>
                    /
                    {`${
                      parseInt(product.pricing.VND.monthly) > 0 ? "" : "3"
                    }tháng`}
                  </div>
                </div>
                <ul className="pr-feature style-none">
                  {strippedTags(product.description)
                    .split("\n")
                    .map((item, subIndex) => (
                      <li key={subIndex}>{item}</li>
                    ))}
                </ul>
                <a
                  href={product.product_url}
                  title={product.name}
                  target="_blank"
                  className={
                    isActive
                      ? "btn-fourteen fw-500 tran3s w-100 !x-text-white"
                      : "trial-button"
                  }
                  rel="nofollow"
                >
                  Đăng ký ngay
                </a>
                <div className="trial-text pt-25 tx-dark">
                  Hoàn tiền miễn phí nếu không hài lòng.
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Pricing;
