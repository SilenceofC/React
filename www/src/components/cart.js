 import React,{Component} from 'react';
 import {connect} from 'react-redux';
 import number from '../common/number';



class Cart extends Component{
  constructor(){
    super();
    this.state={
      arr:[],
      total:0
    }

  }
  componentDidMount() {
    let {cartData} = this.props;
    let brr = [];

    this.props.cartData.map(function (value, index) {
      brr.push(JSON.parse(value))
    })
    this.state.arr = brr;

    for (let i = 0; i < this.state.arr.length; i++) {
      if (this.state.arr[i].id == this.state.arr[i + 1].id) {
        this.state.arr.splice(i, 1);
      }
    }


    for(let i = 0; i < this.state.arr.length; i++){
      this.state.total += Number(this.state.arr[i].price);
    }
  }


  close(index){
    console.log(index);
    this.state.arr.splice(index,1);
    let cart = this.state.arr;
    let price = 0;
    for(let i = 0; i < this.state.arr.length; i++){
      price += Number(this.state.arr[i].price);
    }
    this.setState({
      arr: cart,
      total:price
    })

  }


  render(){
    return(
      <div className="cart-items">
        <div className="container">
          <h2>My Shopping Cart Price:{number(this.state.total)}</h2>
          {
            this.state.arr.map((item,index)=>{
             return (
               <div className="cart-header" key={item.id} >
                 <div className="close1" onClick={this.close.bind(this,index)}> </div>
                 <div className="cart-sec simpleCart_shelfItem">
                   <div className="cart-item cyc">
                     <img src={item.img?item.img:item.img1} className="img-responsive" alt=""/>
                   </div>
                   <div className="cart-item-info">
                     <h3><a href="#"> {item.title}</a><span>Pickup time:</span></h3>
                     <ul className="qty">
                       <li><p>PRICE:{item.price}</p></li>
                       <li><p>NAME:{item.view}</p></li>
                     </ul>
                     <div className="delivery">
                       <p>discount : {item.discount}</p>
                       <span>Delivered in 1-1:30 hours</span>
                       <div className="clearfix"></div>
                     </div>
                   </div>
                   <div className="clearfix"></div>
                 </div>
               </div>
             )
            })
          }

        </div>
      </div>
    )
  }
}
 let mapStateToProps=(state)=>{
   return {
     cartData:state.cartData
   }
 };

 export default connect(
   mapStateToProps,
 )(Cart);

