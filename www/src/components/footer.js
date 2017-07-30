 import React,{Component} from 'react';
class Footer extends Component{
  constructor(){
    super();
    this.state={

    }
  }
  componentDidMount(){

  }
  render(){
    return(
      <div className="Footer">
        <div className="footer">
          <div className="container">
            <div className="footer-grids">
              <div className="col-md-2 footer-grid">
                <h4>公司</h4>
                <ul>
                  <li><a href="products.html">产品</a></li>
                  <li><a href="javascript:;">在这里工作</a></li>
                  <li><a href="javascript:;">Team</a></li>
                  <li><a href="javascript:;">Happenings</a></li>
                  <li><a href="javascript:;">Dealer Locator</a></li>
                </ul>
              </div>
              <div className="col-md-2 footer-grid">
                <h4>service</h4>
                <ul>
                  <li><a href="javascript:;">Support</a></li>
                  <li><a href="javascript:;">FAQ</a></li>
                  <li><a href="javascript:;">Warranty</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-3 footer-grid">
                <h4>order & returns</h4>
                <ul>
                  <li><a href="javascript:;">Order Status</a></li>
                  <li><a href="javascript:;">Shipping Policy</a></li>
                  <li><a href="javascript:;">Return Policy</a></li>
                  <li><a href="javascript:;">Digital Gift Card</a></li>
                </ul>
              </div>
              <div className="col-md-2 footer-grid">
                <h4>legal</h4>
                <ul>
                  <li><a href="javascript:;">Privacy</a></li>
                  <li><a href="javascript:;">Terms and Conditions</a></li>
                  <li><a href="javascript:;">Social Responsibility</a></li>
                </ul>
              </div>
              <ul className="col-md-3 footer-grid icons">
                <h4>Connect with Us</h4>
                <ul>
                  <li>
                    <a href="javascript:;">
                      <img src="/src/assets/images/i1.png" alt=""/>Follow us on Facebook
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="/src/assets/images/i2.png" alt=""/>Follow us on Twitter
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="/src/assets/images/i3.png" alt=""/>Follow us on Google-plus
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="/src/assets/images/i4.png" alt=""/>Follow us on Pinterest
                    </a>
                  </li>
                </ul>
              </ul>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>Copyright &copy; 2015.Company name
              <a href="javascript:;" target="_blank" >Yummy</a>
            </p>
          </div>
        </div>
      </div>


    )
  }
}
export default Footer;