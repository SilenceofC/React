 import React,{Component} from 'react';
import {Link} from 'react-router';
 import {connect} from 'react-redux';
import '../assets/css/header.css';
class Header extends Component{
  constructor(){
    super();
    this.state={
      name:'',
      pwd:'',
      i:1,
      youke:'游客'
    };
    this.nameChange = this.nameChange.bind(this);
    this.pwdChange = this.pwdChange.bind(this);
    this.login = this.login.bind(this);
    // this.empty = this.empty.bind(this);
  }

// empty(){
//   let {cartData} = this.props;
//   console.log(this.props.cartData);
//   this.props.cartData = [];
// }


  nameChange(ev){
    this.setState({
      name:ev.target.value
    });
  }


  pwdChange(ev){
    this.setState({
      pwd:ev.target.value
    });
  }

  login(){
    let url = 'http://localhost:3000/home/login';
    let name = this.state.name;
    let pwd = this.state.pwd;
    fetch(url,{
      // credentials: 'include',
      method:'post',
      headers: {
        'Accept':'application/json,text/plain,*/*',
        'Content-type':'application/json',
      },
      body: JSON.stringify({username: name, password: pwd, })
    }).then((res)=>{
      res.text().then((arrData)=>{
        this.setState({
          arr:arrData,
        });
        console.log(this.state.arr);
        if(this.state.arr == 'error'){
          alert('登录名不存在,即将打开注册页面');
          window.location.href = 'http://localhost:8001/#/register','_blank';
        }
        if(this.state.arr == 'forget'){
          alert('用户名或密码忘记,可找回密码');
        }
        if(this.state.arr.indexOf('success')!=-1){
            // console.log(this.state.arr.substring(8));
          sessionStorage.setItem("username"+(this.state.i++), this.state.name);
          console.log(this.state.name);
          alert('您已成功登录')
          this.setState({
            youke:this.state.name
          })
        }
      })
    }).catch((res)=>{
      console.log(res);
    });


  }


  render(){
    return(
      <div className="header">
        <div className="container">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <h1 className="navbar-brand">
                <Link to="home" activeClassName="active" id="yummy">Yummy</Link>
              </h1>
            </div>
            {/*<!--navbar-header-->*/}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="home" className="active">Home</Link>
                </li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown">Birthday
                    <b className="caret"></b></a>
                  <ul className="dropdown-menu multi-column columns-4">
                    <div className="row">
                      <div className="col-sm-3">
                        <h4>By Relation</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">Friend</a></li>
                          <li><a className="list" href="javascript:;">Lover</a></li>
                          <li><a className="list" href="javascript:;">Sister</a></li>
                          <li><a className="list" href="javascript:;">Brother</a></li>
                          <li><a className="list" href="javascript:;">Kids</a></li>
                          <li><a className="list" href="javascript:;">Parents</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <h4>By Flavour</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">Chocolate</a></li>
                          <li><a className="list" href="javascript:;">Mixed Fruit</a></li>
                          <li><a className="list" href="javascript:;">Butterscotch</a></li>
                          <li><a className="list" href="javascript:;">Strawberry</a></li>
                          <li><a className="list" href="javascript:;">Vanilla</a></li>
                          <li><a className="list" href="javascript:;">Eggless Cakes</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <h4>By Theme</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">Heart shaped</a></li>
                          <li><a className="list" href="javascript:;">Cartoon Cakes</a></li>
                          <li><a className="list" href="javascript:;">2-3 Tier Cakes</a></li>
                          <li><a className="list" href="javascript:;">Square shape</a></li>
                          <li><a className="list" href="javascript:;">Round shape</a></li>
                          <li><a className="list" href="javascript:;">Photo cakes</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <h4>Weight</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">1 kG</a></li>
                          <li><a className="list" href="javascript:;">1.5 kG</a></li>
                          <li><a className="list" href="javascript:;">2 kG</a></li>
                          <li><a className="list" href="javascript:;">3 kG</a></li>
                          <li><a className="list" href="javascript:;">4 kG</a></li>
                          <li><a className="list" href="javascript:;">Large</a></li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown grid">
                  <a href="javascript:;" className="dropdown-toggle list1" data-toggle="dropdown">Wedding
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-column columns-4">
                    <div className="row">
                      <div className="col-sm-3">
                        <h4>By Relation</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">Friend</a></li>
                          <li><a className="list" href="javascript:;">Lover</a></li>
                          <li><a className="list" href="javascript:;">Sister</a></li>
                          <li><a className="list" href="javascript:;">Brother</a></li>
                          <li><a className="list" href="javascript:;">Kids</a></li>
                          <li><a className="list" href="javascript:;">Parents</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <h4>By Flavour</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">Chocolate</a></li>
                          <li><a className="list" href="javascript:;">Mixed Fruit</a></li>
                          <li><a className="list" href="javascript:;">Butterscotch</a></li>
                          <li><a className="list" href="javascript:;">Strawberry</a></li>
                          <li><a className="list" href="javascript:;">Vanilla</a></li>
                          <li><a className="list" href="javascript:;">Eggless Cakes</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <h4>By Theme</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">Heart shaped</a></li>
                          <li><a className="list" href="javascript:;">Cartoon Cakes</a></li>
                          <li><a className="list" href="javascript:;">2-3 Tier Cakes</a></li>
                          <li><a className="list" href="javascript:;">Square shape</a></li>
                          <li><a className="list" href="javascript:;">Round shape</a></li>
                          <li><a className="list" href="javascript:;">Photo cakes</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <h4>Weight</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">1 kG</a></li>
                          <li><a className="list" href="javascript:;">1.5 kG</a></li>
                          <li><a className="list" href="javascript:;">2 kG</a></li>
                          <li><a className="list" href="javascript:;">3 kG</a></li>
                          <li><a className="list" href="javascript:;">4 kG</a></li>
                          <li><a className="list" href="javascript:;">Large</a></li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown grid">
                  <a href="javascript:;" className="dropdown-toggle list1" data-toggle="dropdown">Special Offers
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu multi-column columns-4">
                    <div className="row">
                      <div className="col-sm-3">
                        <h4>By Relation</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">Friend</a></li>
                          <li><a className="list" href="javascript:;">Lover</a></li>
                          <li><a className="list" href="javascript:;">Sister</a></li>
                          <li><a className="list" href="javascript:;">Brother</a></li>
                          <li><a className="list" href="javascript:;">Kids</a></li>
                          <li><a className="list" href="javascript:;">Parents</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <h4>By Flavour</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">Chocolate</a></li>
                          <li><a className="list" href="javascript:;">Mixed Fruit</a></li>
                          <li><a className="list" href="javascript:;">Butterscotch</a></li>
                          <li><a className="list" href="javascript:;">Strawberry</a></li>
                          <li><a className="list" href="javascript:;">Vanilla</a></li>
                          <li><a className="list" href="javascript:;">Eggless Cakes</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <h4>By Theme</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">Heart shaped</a></li>
                          <li><a className="list" href="javascript:;">Cartoon Cakes</a></li>
                          <li><a className="list" href="javascript:;">2-3 Tier Cakes</a></li>
                          <li><a className="list" href="javascript:;">Square shape</a></li>
                          <li><a className="list" href="javascript:;">Round shape</a></li>
                          <li><a className="list" href="javascript:;">Photo cakes</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <h4>Weight</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">1 kG</a></li>
                          <li><a className="list" href="javascript:;">1.5 kG</a></li>
                          <li><a className="list" href="javascript:;">2 kG</a></li>
                          <li><a className="list" href="javascript:;">3 kG</a></li>
                          <li><a className="list" href="javascript:;">4 kG</a></li>
                          <li><a className="list" href="javascript:;">Large</a></li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown grid">
                  <Link to = '/product' className="dropdown-toggle list1" data-toggle="dropdown">Store
                    <b className="caret"></b>
                  </Link>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="row">
                      <div className="col-sm-4">
                        <h4>By Relation</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">Friend</a></li>
                          <li><a className="list" href="javascript:;">Lover</a></li>
                          <li><a className="list" href="javascript:;">Sister</a></li>
                          <li><a className="list" href="javascript:;">Brother</a></li>
                          <li><a className="list" href="javascript:;">Kids</a></li>
                          <li><a className="list" href="javascript:;">Parents</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <h4>By Flavour</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">Chocolate</a></li>
                          <li><a className="list" href="javascript:;">Mixed Fruit</a></li>
                          <li><a className="list" href="javascript:;">Butterscotch</a></li>
                          <li><a className="list" href="javascript:;">Strawberry</a></li>
                          <li><a className="list" href="javascript:;">Vanilla</a></li>
                          <li><a className="list" href="javascript:;">Eggless Cakes</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <h4>Specials</h4>
                        <ul className="multi-column-dropdown">
                          <li><a className="list" href="javascript:;">Ice cream cake</a></li>
                          <li><a className="list" href="javascript:;">Swiss roll</a></li>
                          <li><a className="list" href="javascript:;">Ruske kape</a></li>
                          <li><a className="list" href="javascript:;">Cupcakes</a></li>
                          <li><a className="list" href="javascript:;">Muffin</a></li>
                          <li><a className="list" href="javascript:;">Merveilleux</a></li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
              </ul>
              {/*<!--/.navbar-collapse-->*/}
            </div>
            {/*<!--//navbar-header-->*/}
          </nav>
          <div className="header-info">
            <div className="header-right search-box">
              <a href="javascript:;">
                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
              </a>
              <div className="search">
                <form className="navbar-form">
                  <input type="text" className="form-control" />
                    <button type="submit" className="btn btn-default" aria-label="Left Align">
                      Search
                    </button>
                </form>
              </div>
            </div>
            <div className="header-right login">
              <a href="javascript:;">
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
              </a>
              <div id="loginBox">
                <div id="loginForm">
                  <div id="username">
                    欢迎您！<span id="name">{this.state.youke}</span>
                  </div>
                  <fieldset id="body">
                    <fieldset>
                      <label htmlFor="email">UserName</label>
                      <input type="text" name="email" id="email" onChange={this.nameChange} value={this.state.name}/>
                    </fieldset>
                    <fieldset>
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" id="password" onChange={this.pwdChange} value={this.state.pwd}/>
                    </fieldset>
                    <input type="submit" id="login" value="Sign in" onClick={this.login}/>
                      <label htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <i>Remember me</i>
                      </label>
                  </fieldset>
                  <p>New User ?
                    <Link to="Register" className="sign" >Sign Up</Link>
                    <span><Link to="forget">Forgot your password?</Link></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="header-right cart">
              <Link to="cart">
                <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
              </Link>
              {/*<div className="cart-box">*/}
                {/*<h4><Link to="cart">*/}
                  {/*<span className="simpleCart_total"> $0.00 </span> (<span id="simpleCart_quantity" className="simpleCart_quantity"> 0 </span>)*/}
                {/*</Link></h4>*/}
                {/*<p><a href="javascript:;" className="simpleCart_empty"  >Empty cart</a></p>*/}
                {/*<div className="clearfix"> </div>*/}
              {/*</div>*/}
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    )
  }
}
 // let mapStateToProps=(state)=>{
 //   return {
 //     cartData:state.cartData
 //   }
 // };
 //
 // export default connect(
 //   mapStateToProps,
 //
 // )(Header);
 export default Header;

