import React,{Component} from 'react';

import Header from "./header";
import Footer from "./footer";
import Loading from './loading';

import {connect} from 'react-redux';

class App extends Component{

  render(){
    let{bLoading,showLoading,hideLoading} = this.props;

    return(
      <div className="App">
        {bLoading?<Loading/>:''}
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
let mapStateToProps=(state)=>{
  return {
    bLoading:state.bLoading
  }
};

let mapDispatchToProps=(dispatch)=>{
  return {
    showLoading:()=>{
      dispatch({
        type:'SHOW_LOADING'
      })
    },
    hideLoading:()=>{
      dispatch({
        type:'HIDE_LOADING'
      })
    }
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);