 import React,{Component} from 'react';
import {Link,hashHistory,browserHistory} from 'react-router';
import '../assets/css/single.css';
import number from '../common/number';
 import asy from '../midllewave/a';
 import {connect} from 'react-redux';
class Single extends Component{
  constructor( ){
    super();
    this.state={
      location:'',
      f:'',
      id:'',
      arr:[],
      brr:[]
    }

}
  componentDidMount(){

    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });

    let location = this.state.location;
    let f = this.state.f;
    location  = browserHistory.getCurrentLocation().hash;
    for(let i = 0 ; i < location.length; i ++){
      if(location.charAt(i) == '/'){
        f = i;
      }
    }
    this.state.id = location.charAt(f+1);
console.log(this.state.id);
    let url = 'http://localhost:3000/home/details';
    fetch(url).then((res)=>{
      res.json().then((arrData)=>{
        this.setState({
          arr:arrData[this.state.id-1],
        });
        console.log(this.state.arr);
      })
    }).catch((res)=>{
      alert(res.status);
    });
  }

  add(item){
    let url = JSON.stringify(item);
    this.props.getCData(url,'ADD_CART_DATA')
  }
  render(){
    // let {cartData} = this.props;
    return(
      <div className="single">
        {/*{this.props.cartData}*/}
        <div className="container">
          <div className="single-grids">
            <div className="col-md-4 single-grid">
              <div className="flexslider">
                <ul className="slides">
                  <li data-thumb="/src/assets/images/k1.jpg">
                    <div className="thumb-image">
                      <img src={this.state.arr.img1} data-imagezoom="true" className="img-responsive"/>
                    </div>
                  </li>
                  <li data-thumb="/src/assets/images/k2.jpg">
                    <div className="thumb-image">
                      <img src={this.state.arr.img2} data-imagezoom="true" className="img-responsive"/>
                    </div>
                  </li>
                  <li data-thumb="/src/assets/images/k3.jpg">
                    <div className="thumb-image">
                      <img src={this.state.arr.img3} data-imagezoom="true" className="img-responsive"/>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
              <div className="col-md-4 single-grid simpleCart_shelfItem">
                <h3>{this.state.arr.chin}</h3>
                <p>{this.state.arr.eng}</p>
                <ul className="size">
                  <h3>Size</h3>
                  <li><a href="#">1.2磅</a></li>
                  <li><a href="#">2.2磅</a></li>
                  <li><a href="#">3.2磅</a></li>
                  <li><a href="#">7.0磅</a></li>
                </ul>
                <ul className="size">
                  <h3>2-3 Tier Cakes</h3>
                  <li><a href="#">1 Step</a></li>
                  <li><a href="#">2 Step</a></li>
                  <li><a href="#">3 Step</a></li>
                </ul>
                <div className="galry">
                  <div className="prices">
                    <h5 className="item_price">{number(this.state.arr.price)}</h5>
                  </div>
                  <div className="rating">
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <p className="qty"> Qty :  </p><input min="1" type="number" id="quantity" name="quantity" placeholder="1"  className="form-control input-small"/>
                <div className="btn_form">
                  <a href="javascript:;" className="add-cart item_add" onClick={this.add.bind(this,this.state.arr)}  >ADD TO CART</a>
                </div>
                <div className="tag">
                  <p>适合人群 : <a href="#">大众</a></p>
                  <p>适合季节: <a href="#">所有</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 single-grid1" id="account">
              <h2>Account</h2>
              <ul>
                <li><a href="javascript:;">Offers</a></li>
                <li><Link to="product">New products</Link></li>
                <li><Link to="login">Register</Link></li>
                <li><Link to="login">Forgot Your Password</Link></li>
                <li><Link to='cart'>My account</Link></li>
                <li><Link to="contact">Address</Link></li>
                <li><a href="javascript:;">wishlist</a></li>
                <li><a href="javascript:;" onClick={hashHistory.go.bind(this,-1)} >Order history</a></li>
                <li><a href="javascript:;">Downloads</a></li>
                <li><a href="javascript:;">Reward points</a></li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>

    )
  }
}
 let mapStateToProps=(state)=>{
   return {
     productData:state.productData,
     cartData:state.cartData
   }
 };

 let mapDispatchToProps=(dispatch)=>{
   return {
     getPData:(url,type)=>{
       dispatch(asyncAction(dispatch,url,type))
     },
     getCData:(url,type)=>{
       dispatch(asy(dispatch,url,type))
     }
   }
 };
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Single);