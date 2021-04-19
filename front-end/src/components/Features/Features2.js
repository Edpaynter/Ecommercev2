import React from "react";
import workwithUs from '../../assets/images/company/whyus.JPG'
const Features2 = () => {
    const imgStyle = {
        maxHeight: '140px',
      };
    const parStyle = {
        textAlign: 'center'
    }
  return (
    <div id="features3" className="wrap-container80">
        
    
        <div className="container">
            
            <div className="post-heading-center">
            	<h2>Work with Us!</h2>
            </div>
            
          
            <div className="row">
                
                <div className="col-sm-6"> 
                	<div className="affa-feature-text">
                    	<span className="feature-text-number"></span>
                        <h4>What We Need to Get Started</h4>
                        <p>You can come to us with a thought, and we can start there.  We have the necessary tools to take what's in your mind and get it into the physical world. If you have an example, we can go based on that anything is possible with us, let's get to work.</p>
                       
                    </div>
                </div>
                
                <div className="col-sm-6">
                	<div className="affa-feature-text">
                    	<span className="feature-text-number"></span>
                        <h4>Negotiation and Pricing</h4>
                        <p>We offer a wide range of products and designs. We offer 1-of-1 custom work at a competitive rate. If your needs require larger quantities, we can also provide wholesale manufacturing to get everything you need. </p>
                        <p style={parStyle}><img style={imgStyle} className="img-style-left" src={workwithUs}></img> </p>
                    </div>
                </div>
                
                {/* <div className="col-sm-4"> 
                	<div className="affa-feature-text">
                    	<span className="feature-text-number">03</span>
                        <h4>Processing Solutions and Give the Best Result</h4>
                        <p>Eaque ipsa quae ab illo inventore veritatis et quasi architectobeatae vitae dicta sunt uam explicabo. Nemo enim ipsam voluptatem Eaque ipsa quae ab illo inventore veritatis et quasi aliquam nontus architectobeatae vitae dicta sunt nis explicabo. Nemo enim ipsam voluptatem.</p>
                    </div>
                </div> */}
            </div>
            <div className="text-center">
            	<a href="/contact#contactform" className="btn-custom">Contact Us</a>
            </div>
            
        </div>
        
    </div>
  );
};

export default Features2;
