//中间件middleware
const asy=(dispath,url,type)=>{

  return dispath({
    payload:url,
    type:'ADD_CART_DATA'
  });
};
export default asy;