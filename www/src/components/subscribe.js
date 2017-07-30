 import React,{Component} from 'react';
class Subscribe extends Component{
  constructor(){
    super();
    this.state={

    }
  }
  componentDidMount(){

  }
  render(){
    return(
      <div className="subscribe">
        <div className="container">
          <h3>Newsletter</h3>
          <form>
            <input type="text" className="text" placeholder="Email"/>
            {/*onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Email';}"*/}
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    )
  }
}
export default Subscribe;