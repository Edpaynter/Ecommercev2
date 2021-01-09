import React from "react";

const StorePreview = () => {
  return (
    <div id="portfolios" className="padding-top80">
      <div className="container">
        <div className="post-heading-center">
          <h2>Our Jawns</h2>
        </div>

        <nav className="isotope-menu">
          <a href={"/"} className="active" data-filter="*">
            All
          </a>
          <a href={"/"} data-filter=".creative">
            Art
          </a>
          <a href={"/"} data-filter=".entertainment">
            Logos
          </a>
          <a href={"/"} data-filter=".mobile">
            3-D Products
          </a>
        </nav>
      </div>

      <div className="isotope-row">
        <div className="item entertainment">
          <a
            href="assets/images/content/portfolios/full/1.jpg"
            className="fancybox"
            data-fancybox-group="images_gallery"
            title="Portfolio Item 1"
          >
            <figure className="img-overlay">
              <img
                src="assets/images/content/portfolios/thumb/1.jpg"
                alt="Portfolio Item 1"
              />
              <div className="overlay-masked-wrap">
                <div className="overlay-masked">
                  <h4>Portfolio Item 1</h4>
                  <p>Entertainment</p>
                </div>
              </div>
            </figure>
          </a>
        </div>

        <div className="item creative mobile">
          <a
            href="assets/images/content/portfolios/full/2.jpg"
            className="fancybox"
            data-fancybox-group="images_gallery"
            title="Portfolio Item 2"
          >
            <figure className="img-overlay">
              <img
                src="assets/images/content/portfolios/thumb/2.jpg"
                alt="Portfolio Item 2"
              />
              <div className="overlay-masked-wrap">
                <div className="overlay-masked">
                  <h4>Portfolio Item 2</h4>
                  <p>Creative, Mobile</p>
                </div>
              </div>
            </figure>
          </a>
        </div>

        <div className="item entertainment">
          <a
            href="assets/images/content/portfolios/full/3.jpg"
            className="fancybox"
            data-fancybox-group="images_gallery"
            title="Portfolio Item 3"
          >
            <figure className="img-overlay">
              <img
                src="assets/images/content/portfolios/thumb/3.jpg"
                alt="Portfolio Item 3"
              />
              <div className="overlay-masked-wrap">
                <div className="overlay-masked">
                  <h4>Portfolio Item 3</h4>
                  <p>Entertainment</p>
                </div>
              </div>
            </figure>
          </a>
        </div>

        <div className="item entertainment mobile">
          <a
            href="assets/images/content/portfolios/full/4.jpg"
            className="fancybox"
            data-fancybox-group="images_gallery"
            title="Portfolio Item 4"
          >
            <figure className="img-overlay">
              <img
                src="assets/images/content/portfolios/thumb/4.jpg"
                alt="Portfolio Item 4"
              />
              <div className="overlay-masked-wrap">
                <div className="overlay-masked">
                  <h4>Portfolio Item 4</h4>
                  <p>Entertainment, Mobile</p>
                </div>
              </div>
            </figure>
          </a>
        </div>

        <div className="item creative mobile">
          <a
            href="assets/images/content/portfolios/full/5.jpg"
            className="fancybox"
            data-fancybox-group="images_gallery"
            title="Portfolio Item 5"
          >
            <figure className="img-overlay">
              <img
                src="assets/images/content/portfolios/thumb/5.jpg"
                alt="Portfolio Item 5"
              />
              <div className="overlay-masked-wrap">
                <div className="overlay-masked">
                  <h4>Portfolio Item 5</h4>
                  <p>Creative, Mobile</p>
                </div>
              </div>
            </figure>
          </a>
        </div>

        <div className="item creative entertainment">
          <a
            href="assets/images/content/portfolios/full/6.jpg"
            className="fancybox"
            data-fancybox-group="images_gallery"
            title="Portfolio Item 6"
          >
            <figure className="img-overlay">
              <img
                src="assets/images/content/portfolios/thumb/6.jpg"
                alt="Portfolio Item 6"
              />
              <div className="overlay-masked-wrap">
                <div className="overlay-masked">
                  <h4>Portfolio Item 6</h4>
                  <p>Creative, Entertainment</p>
                </div>
              </div>
            </figure>
          </a>
        </div>

        <div className="item creative">
          <a
            href="assets/images/content/portfolios/full/7.jpg"
            className="fancybox"
            data-fancybox-group="images_gallery"
            title="Portfolio Item 7"
          >
            <figure className="img-overlay">
              <img
                src="assets/images/content/portfolios/thumb/7.jpg"
                alt="Portfolio Item 7"
              />
              <div className="overlay-masked-wrap">
                <div className="overlay-masked">
                  <h4>Portfolio Item 7</h4>
                  <p>Creative</p>
                </div>
              </div>
            </figure>
          </a>
        </div>4

        <div className="item mobile">
          <a
            href="assets/images/content/portfolios/full/8.jpg"
            className="fancybox"
            data-fancybox-group="images_gallery"
            title="Portfolio Item 8"
          >
            <figure className="img-overlay">
              <img
                src="assets/images/content/portfolios/thumb/8.jpg"
                alt="Portfolio Item 8"
              />
              <div className="overlay-masked-wrap">
                <div className="overlay-masked">
                  <h4>Portfolio Item 8</h4>
                  <p>Mobile</p>
                </div>
              </div>
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StorePreview;
