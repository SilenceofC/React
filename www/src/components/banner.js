 import React,{Component} from 'react';
import {Link} from 'react-router';
class Banner extends Component{
  componentDidMount(){

  }
  render(){
    return(
      <div className="banner">
        <div className="container">
          <h2 className="hdng">Yummy <span>Cakes</span> for u</h2>
          <p>Our best cakes make your day special</p>
          <Link to='product'>SHOP NOW</Link>
          <div className="banner-text">
            <img src="/src/assets/images/3.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}
export default Banner;