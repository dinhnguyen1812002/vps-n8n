/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import MenuData from "../data/menu.json";
import { assetPrefix } from "@/next.config";

const MainMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav"  style={{ whiteSpace: 'nowrap' }}>
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img
                  src={assetPrefix + "/images/logo/LogoNewSlogan-07.png"}
                  alt="InterData"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
          </li>
          {MenuData.map((menu, index) => {
            if (!["vps", "other", "hosting", "cloud" ].includes(menu.type)) {
              return null;
            }

            if (menu.items && menu.items.length > 0) {
              return (
                <li key={menu.label} className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    {menu.label}
                  </a>
                  <ul className="dropdown-menu">
                    {menu.items.map((item, index) => (
                      <li key={index}>
                        <Link href={item.link} className="dropdown-item">
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            } else if (!menu.items && menu.link) {
              return (
                <li key={menu.label} className="nav-item">
                  <Link href={menu.link} className="nav-link whitespace-nowrap">
                    {menu.label}
                  </Link>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        {/* End ul */}
      </div>
    </nav>
  );
};

export default MainMenu;
