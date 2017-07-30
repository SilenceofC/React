 import React,{Component} from 'react';
import '../assets/css/error.css';
class Error extends Component{
  render(){
    return(
       <div className="error">
         <span>404</span>
         <h1>您访问的页面出错了！</h1>
       </div>
    )
  }
}
export default Error;