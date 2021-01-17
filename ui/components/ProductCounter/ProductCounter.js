import React from "react";

const ProductCounter = () => {
  return (
    <div>
      {/* <div className="wrap-container40 bg-dark">
        <div className="container">
          <div className="call-action">
            <h4>
              What about our products? <span>Cool and classy right?</span>
            </h4>
            <p>
              More things are on the way keep coming back to see what's new.
            </p>
            <div className="btn-section">
              <a href={'/'} className="btn-custom">
                See All Products
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div id="counter" className="wrap-container8040">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="affa-counter">
                <i className="fa fa-heart"></i>
                <h4>
                  <span>50</span>+
                </h4>
                <p>Clients Happy</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="affa-counter">
                <i className="fa fa-street-view"></i>
                <h4>
                 {'<'} <span>100</span>
                </h4>
                <p>Projects Done</p>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="affa-counter">
                <i className="fa fa-coffee"></i>
                <h4>
                  <span>128</span>k
                </h4>
                <p>Cups of Coffe</p>
              </div>
            </div>

            {/* <div className="col-sm-4">
              <div className="affa-counter">
                <i className="fa fa-trophy"></i>
                <h4>
                  <span>44</span>
                </h4>
                <p>Best Awards</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCounter;
