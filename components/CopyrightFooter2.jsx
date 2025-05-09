const Footer = () => {
  return (
    <div className="bottom-footer lg-pb-20 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 order-lg-0 mt-15">
            @ {new Date().getFullYear()} InterData. All rights reserved.
          </div>

          <div className="col-lg-8 order-lg-2 mt-15">
            <div className="d-flex x-items-center md:x-justify-end x-opacity-50">
              served with
              <span className="x-mx-2 x-text-red-600">ᡣ𐭩</span> by xvps.io
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
