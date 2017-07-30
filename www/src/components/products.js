 import React,{Component} from 'react';
import {Link} from 'react-router';
import number from '../common/number.js';
 import '../assets/css/jquery-ui.css';
 import asyncAction from '../midllewave/asyncAction';
 import asy from '../midllewave/a';
 import {connect} from 'react-redux';


class Product extends Component{
  constructor(){
    super();

  }
  componentDidMount(){

    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 800,
      values: [ 0, 800 ],
      slide: function( event, ui ) {  $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ));

//状态管理
    let url = 'http://localhost:3000/home/product';
    this.props.getPData(url,'ADD_PRODUCT_DATA');

    $('.scroll-pane').jScrollPane();
      $(".tab1 .single-bottom").hide();
      $(".tab2 .single-bottom").hide();
      $(".tab3 .single-bottom").hide();
      $(".tab4 .single-bottom").hide();
      $(".tab5 .single-bottom").hide();

      $(".tab1 ul").click(function(){
        $(".tab1 .single-bottom").slideToggle(300);
        $(".tab2 .single-bottom").hide();
        $(".tab3 .single-bottom").hide();
        $(".tab4 .single-bottom").hide();
        $(".tab5 .single-bottom").hide();
      });
      $(".tab2 ul").click(function(){
        $(".tab2 .single-bottom").slideToggle(300);
        $(".tab1 .single-bottom").hide();
        $(".tab3 .single-bottom").hide();
        $(".tab4 .single-bottom").hide();
        $(".tab5 .single-bottom").hide();
      });
      $(".tab3 ul").click(function(){
        $(".tab3 .single-bottom").slideToggle(300);
        $(".tab4 .single-bottom").hide();
        $(".tab5 .single-bottom").hide();
        $(".tab2 .single-bottom").hide();
        $(".tab1 .single-bottom").hide();
      });
      $(".tab4 ul").click(function(){
        $(".tab4 .single-bottom").slideToggle(300);
        $(".tab5 .single-bottom").hide();
        $(".tab3 .single-bottom").hide();
        $(".tab2 .single-bottom").hide();
        $(".tab1 .single-bottom").hide();
      });
      $(".tab5 ul").click(function(){
        $(".tab5 .single-bottom").slideToggle(300);
        $(".tab4 .single-bottom").hide();
        $(".tab3 .single-bottom").hide();
        $(".tab2 .single-bottom").hide();
        $(".tab1 .single-bottom").hide();
      });

  }
  add(item){
    console.log(item);//id号

    let url = JSON.stringify(item);
    this.props.getCData(url,'ADD_CART_DATA')
  }
  render(){
    let {productData}=this.props;
    let {cartData} = this.props;
    return(

      <div className="products">
        {/*{this.props.cartData}*/}
        <div className="container">
          <h2>Our Products</h2>
          <div className="col-md-9 product-model-sec" >
            {
              this.props.productData.map((item,index)=>{
                return(
                  <div className="product-grid" key={item.id} onClick={this.add.bind(this,item)} >
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
                        <span className="item_price">{number(item.price)}</span>
                        <div className="ofr">
                          <p className="pric1"><del>{number(item.cost)}</del></p>
                          <p className="disc">[{item.discount} Off]</p>
                        </div>
                        {/*<span className="item_quantity">{item.number}</span>*/}
                        <input type='text' className="item_quantity" value="1"/>
                        <input type="button" className="item_add items" value="Add"  />
                        <div className="clearfix"> </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="col-md-3 rsidebar span_1_of_left">
            <section  className="sky-form">
              <div className="product_right">
                <h4 className="m_2">
                  <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>Categories
                </h4>
                <div className="tab1">
                  <ul className="place">
                    <li className="sort">Regular Cakes</li>
                    <li className="by">
                      <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                    </li>
                  </ul>
                  <div className="clearfix"> </div>
                  <div className="single-bottom">
                    <a href="#"><p>Cassata</p></a>
                    <a href="#"><p>Cheesecake</p></a>
                    <a href="#"><p>Coconut cake</p></a>
                    <a href="#"><p>Cupcake</p></a>
                  </div>
                </div>
                <div className="tab2">
                  <ul className="place">
                    <li className="sort">Special Cakes</li>
                    <li className="by">
                      <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                    </li>
                  </ul>
                  <div className="clearfix"> </div>
                  <div className="single-bottom">
                    <a href="#"><p>Delicious Cakes</p></a>
                    <a href="#"><p>Gingerbread</p></a>
                  </div>
                </div>
                <div className="tab3">
                  <ul className="place">
                    <li className="sort">Eggless Cake</li>
                    <li className="by">
                      <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                    </li>
                  </ul>
                  <div className="clearfix"> </div>
                  <div className="single-bottom">
                    <a href="#"><p>Milk Cakes</p></a>
                    <a href="#"><p>Fruits Cakes</p></a>
                  </div>
                </div>
                <div className="tab4">
                  <ul className="place">
                    <li className="sort">2-3 Tier Cakes</li>
                    <li className="by">
                      <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                    </li>
                  </ul>
                  <div className="clearfix"> </div>
                  <div className="single-bottom">
                    <a href="#"><p>Twist 4 tier</p></a>
                    <a href="#"><p>Floral Tier</p></a>
                    <a href="#"><p>Double Heartshape</p></a>
                  </div>
                </div>
              </div>
            </section>
            <section  className="sky-form">
              <h4>
                <span className="glyphicon glyphicon-minus" aria-hidden="true">
                </span>DISCOUNT
              </h4>
              <div className="row row1 scroll-pane">
                <div className="col col-4">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" checked=""/><i></i>Upto - 10% (20)</label>
                </div>
                <div className="col col-4">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox"/><i></i>70% - 60% (5)</label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox"/><i></i>50% - 40% (7)</label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox"/><i></i>30% - 20% (2)</label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox"/><i></i>10% - 5% (5)</label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox"/><i></i>30% - 20% (7)</label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox"/><i></i>10% - 5% (2)</label>
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox"/><i></i>Other(50)</label>
                </div>
              </div>
            </section>
            <section  className="sky-form">
              <h4>
                <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>Price</h4>
              <ul className="dropdown-menu1">
                <li><a href="">
                  <div id="slider-range"></div>
                  <input type="text" id="amount" style={{border:0,fontWeight:'NORMAL',fontFamily:'Dosis-Regular'}} />
                </a></li>
              </ul>
            </section>
              <section  className="sky-form">
                <h4><span className="glyphicon glyphicon-minus" aria-hidden="true"></span>By Flavour</h4>
                <div className="row row1 scroll-pane">
                  <div className="col col-4">
                    <label className="checkbox"><input type="checkbox" name="checkbox" checked=""/><i></i>Vanilla</label>
                  </div>
                  <div className="col col-4">
                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Chocolate</label>
                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Butterscotch</label>
                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Strawberry</label>
                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Black Forest</label>
                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Mixed Fruit</label>
                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Honey</label>
                  </div>
                </div>
              </section>
              <section  className="sky-form">
                <h4><span className="glyphicon glyphicon-minus" aria-hidden="true"></span>Weight</h4>
                <div className="row row1 scroll-pane">
                  <div className="col col-4">
                    <label className="checkbox"><input type="checkbox" name="checkbox" checked=""/><i></i>Half KG</label>
                  </div>
                  <div className="col col-4">
                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>One KG</label>
                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>TwO KG</label>
                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>More</label>
                  </div>
                </div>
              </section>
              <section  className="sky-form">
                <h4><span className="glyphicon glyphicon-minus" aria-hidden="true"></span>Color</h4>
                <div className="row row1 scroll-pane">
                  <div className="col col-4">
                    <label className="checkbox"><input type="checkbox" name="checkbox" checked=""/><i></i>White</label>
                  </div>
                  <div className="col col-4">
                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Pink</label>
                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Gold</label>
                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Silver</label>
                  </div>
                </div>
              </section>
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
 )(Product);