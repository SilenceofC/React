 import React,{Component} from 'react';
import {Link} from 'react-router';
 import number from '../common/number.js';
 import {connect} from 'react-redux';
 import asyncAction from '../midllewave/asyncAction';
class Gallery extends Component{
  constructor(){
    super();
    this.state={

      brr:[],
      crr:[]
    };
  }
  componentDidMount(){
    let url = 'http://localhost:3000/home';
    this.props.getData(url,'ADD_HOME_DATA');

    let url1 = 'http://localhost:3000/home/home_one';
    fetch(url1).then((res)=>{
      res.json().then((brrData)=>{
        this.setState({
          brr:brrData,
        })
      })
    }).catch((res)=>{
      alert(res.status);
    });

    let url2 = 'http://localhost:3000/home/home_two';
    fetch(url2).then((res)=>{
      res.json().then((crrData)=>{
        this.setState({
          crr:crrData,
        })
      })
    }).catch((res)=>{
      alert(res.status);
    });
  }
  render(){
    let {homeData}=this.props;
    return(
      <div className="gallery">
        <div className="container">
          <div className="gallery-grids">
            <div className="col-md-8 gallery-grid glry-one" >
            {
              this.state.brr.map((item,index)=>{
                return(
                <div key={item.id}>
                    <Link to="product">
                      <img src={item.img} className="img-responsive" alt=""/>
                      <div className="gallery-info">
                        <p><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> view</p>
                        <span className="shop" >SHOP NOW</span>
                        <div className="clearfix"> </div>
                      </div>
                    </Link>
                    <div className="galy-info">
                      <p>{item.title}</p>
                      <div className="galry">
                        <div className="prices">
                          <h5 className="item_price">{number(item.price)}</h5>
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
                    </div>
                </div>
                )
              })
            }
            </div>
            {
              this.state.crr.map((item,index)=>{
                return(
                  <div className="col-md-4 gallery-grid glry-two" key={item.id}>
                    <Link to="product">
                      <img src={item.img} className="img-responsive" alt=""/>
                      <div className="gallery-info galrr-info-two">
                        <p><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> view</p>
                        <span className="shop">SHOP NOW</span>
                        <div className="clearfix"> </div>
                      </div>
                    </Link>
                    <div className="galy-info">
                      <p>{item.title}</p>
                      <div className="galry">
                        <div className="prices">
                          <h5 className="item_price">{number(item.price)}</h5>
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
                    </div>
                  </div>
                )
              })
            }
            {
              this.props.homeData.map((item,index)=>{
                return(
                  <div className="col-md-3 gallery-grid " key={item.id}>
                    <Link to="product">
                      <img src={item.img} className="img-responsive" alt=""/>
                      <div className="gallery-info">
                        <p><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> {item.view}</p>
                        <span className="shop" >SHOP NOW</span>
                        <div className="clearfix"> </div>
                      </div>
                    </Link>
                    <div className="galy-info">
                      <p>{item.title}</p>
                      <div className="galry">
                        <div className="prices">
                          <h5 className="item_price">{number(item.price)}</h5>
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
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
 let mapStateToProps=(state)=>{
   return {
     homeData:state.homeData
   }
 };

 let mapDispatchToProps=(dispatch)=>{

   return {
     getData:(url,type)=>{
      dispatch(asyncAction(dispatch,url,type))
     },
   }
 };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);