 import React,{Component} from 'react';
class Register extends Component{
  constructor(){
    super();
    this.state={
      inpt1:'',
      inpt2:'',
      inpt3:''
    }
    this.nameChange = this.nameChange.bind(this);
    this.pwdChange = this.pwdChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.reg = this.reg.bind(this);
  }
  nameChange(ev){
    this.setState({
      inpt1:ev.target.value
  });
  }
  pwdChange(ev){
    this.setState({
      inpt2:ev.target.value
    });
  }
  emailChange(ev){
    this.setState({
      inpt3:ev.target.value
    });
  }
  reg(){

    if($("#user").val() == "" || $("#user").val() == null){
      alert("用户名不能为空");
      $("#user").val("");
      $("#user").focus();
      return false;
    }
    if($.trim($("#user").val())!="")
    {
      var reg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
      if(!reg.test($.trim($('#user').val())))
      {
        $("#user").val("");
        $("#user").focus();
        alert("只能输入5-20个,以字母开头");
        return false;
      }
    }



    if($("#word").val() == "" || $("#word").val() == null){
      alert("密码不能为空");
      $("#word").val("");
      $("#word").focus();
      return false;
    }
    if($.trim($("#word").val())!="")
    {
      var reg = /^\S{6,}$/;
      if(!reg.test($.trim($('#word').val())))
      {
        $("#word").val("");
        $("#word").focus();
        alert("密码至少6位,除空白以外任何字符");
        return false;
      }
    }



    // if($("#email").val() == "" || $("#email").val() == null){
    //   alert("邮箱不能为空");
    //   $("#email").val("");
    //   $("#email").focus();
    //   return false;
    // }
    // if($.trim($("#email").val())!="")
    // {
    //   var reg = /^((([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6}\;))*(([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})))$/;
    //   if(!reg.test($.trim($('#email').val())))
    //   {
    //     $("#email").val("");
    //     $("#email").focus();
    //     alert("邮箱格式不正确");
    //     return false;
    //   }
    // }


    let url = 'http://localhost:3000/home/regist';
    let name = this.state.inpt1;
    let pwd = this.state.inpt2;
    let email = this.state.inpt3;
    fetch(url,{
      // credentials: 'include',
      method:'post',
      headers: {
        'Accept':'application/json,text/plain,*/*',
        'Content-type':'application/json',
      },
      body: JSON.stringify({username: name, password: pwd, email:email})
    }).then((res)=> {
      res.text().then((arrData) => {
        this.setState({
          arr: arrData,
        });
        console.log(this.state.arr);
        if(this.state.arr = '注册已成功'){
          alert('您已经成功注册,请登录');
        }else{
          alert('用户名已经存在，请重新注册');
        }
      }).catch((res) => {
        console.log(res);
      });
    })
  }
  componentDidMount(){


  }



  render(){
    return(
      <div className="account">
        <div className="container">
          <div className="register">
            {/*<form>*/}
              <div className="register-top-grid">
                <h3>Personal information</h3>
                <div className="input">
                  <span>Name<label>*</label></span>
                  <input type="text" id="user" onChange={this.nameChange} value={this.state.inpt1}/>
                </div>
                <div className="input">
                  <span>PassWord<label>*</label></span>
                  <input type="text" id="word" onChange={this.pwdChange} value={this.state.inpt2}/>
                </div>
                <div className="input">
                  <span>Email Address<label>*</label></span>
                  <input type="text" id="email" onChange={this.emailChange} value={this.state.inpt3}/>
                </div>
                <a className="news-letter" href="#">
                  <label className="checkbox">
                  <input type="checkbox" name="checkbox"/><i> </i>Sign Up for Newsletter</label>
                </a>
                <div className="clearfix"> </div>
              </div>

            {/*</form>*/}
            <div className="clearfix"> </div>
            <div className="register-but">
              <form>
                <input type="submit" value="submit"  onClick={this.reg}/>
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