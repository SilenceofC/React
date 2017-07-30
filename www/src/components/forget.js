 import React,{Component} from 'react';
class Register extends Component{
  constructor(){
    super();
    this.state={
      arr:'',
      inpt1:'',
      brr:'',
      password:''
    }
    this.nameChange = this.nameChange.bind(this);

    this.zhmm = this.zhmm.bind(this);
  }
  nameChange(ev){
    this.setState({
      inpt1:ev.target.value
    });
  }

  zhmm(){
    let url = 'http://localhost:3000/home/forget';
    let name = this.state.inpt1;
    fetch(url,{
     // credentials: 'include',
      method:'post',
      headers: {
        'Accept':'application/json,text/plain,*/*',
        'Content-type':'application/json',
      },
      body: JSON.stringify({username: name})
    }).then((res)=>{
      res.text().then((arrData)=>{
        this.setState({
          arr:arrData,
        });
        let user = JSON.parse(this.state.arr);
        if(user.length > 0){
          this.setState({
            password: user[0].password
          })
        }else{
          this.setState({
            password:'用户名不存在'
          })
        }
      })
    }).catch((res)=>{
      console.log(res);
    });
  }


  render(){
    return(
      <div className="account">
        <div className="container">
          <div className="register">
            <form>
              <div className="register-bottom-grid">
                <h3>Find password</h3>
                <div className="input">
                  <span>UserName<label>*</label></span>
                  <input type="text" onChange={this.nameChange} value={this.state.inpt1}/>
                </div>
                {/*<div className="input">*/}
                  {/*<span>Password<label>*</label></span>*/}
                  {/*<input type="password" onChange={this.pwdChange} value={this.state.inpt2}/>*/}
                {/*</div>*/}
                <div className="forget" style={{height:'30px',width:'100px'}}>
                    密码是：<span className="Password" id="password">{this.state.password} </span>
                </div>
              </div>
            </form>
            <div className="clearfix"> </div>
            <div className="register-but">
              <form>
                <input type="submit" value="submit" onClick={this.zhmm}/>
                  <div className="clearfix"> </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Register;