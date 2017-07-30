 import React,{Component} from 'react';
import {Link} from 'react-router';
import number from '../common/number';

class Collpse extends Component{
  constructor(){
    super();
    this.state={
      arr:[]
    }
  }
  componentDidMount(){
    let url = 'http://localhost:3000/home/detail';
    fetch(url).then((res)=>{
      res.json().then((arrData)=>{
        this.setState({
          arr:arrData,
        })
      })
    }).catch((res)=>{
      alert(res.status);
    });
  }
  render(){
    return(
      <div className="related-products">
        <div className="container">
          <h3>Related Products</h3>
          <div className="product-model-sec single-product-grids">
            {
              this.state.arr.map((item,index)=>{
                return(
                  <div className="product-grid single-product" key={item.id}>
                    <Link to={'detail/'+item.id}>
                      <div className="more-product"><span> </span></div>
                      <div className="product-img b-link-stripe b-animate-go  thickbox">
                        <img src={item.img} className="img-responsive" alt=""/>
                        <div className="b-wrapper">
                          <h4 className="b-animate b-from-left  b-delay03">
                            <button>{item.view}</button>
                          </h4>
                        </div>
                      </div>
                    </Link>
                    <div className="product-info simpleCart_shelfItem">
                      <div className="product-info-cust prt_name">
                        <h4>{item.title}</h4>
                        <span className="item_price">{number(item.cost)}</span>
                        <div className="ofr">
                          <p className="pric1"><del>{number(item.price)}</del></p>
                          <p className="disc">[{item.discount} Off]</p>
                        </div>
                        <div className="clearfix"> </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Collpse;