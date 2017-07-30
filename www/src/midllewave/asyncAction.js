//中间件middleware
const asyncAction=(dispath,url,type)=>{
  fetch(url).then((res)=>{
    res.json().then((arrData)=>{
      setTimeout(()=>{
        //发送修改状态的action
        dispath({
          type:type,
          payload:arrData
        });
        dispath({
          type:'HIDE_LOADING'
        })
      },2000);
    });
  }).catch((res)=>{
    alert(res.status);
  });
  return dispath({
    type:'SHOW_LOADING'
  });
};
export default asyncAction;