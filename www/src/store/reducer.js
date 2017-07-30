
//创建reducer 纯函数 ,必须要有返回值（state)
let reducer=(state=defaultState,action)=>{
  let {type,payload}=action;
  switch (type){
    case 'SHOW_LOADING':
      return Object.assign({},state,{
        bLoading: true
      });
      break;
    case 'HIDE_LOADING':
      return Object.assign({},state,{
        bLoading: false
      });
      break;
    case 'ADD_HOME_DATA':
      return Object.assign({},state,{
        homeData:payload
      });
      break;
    case 'ADD_PRODUCT_DATA':
      return Object.assign({},state,{
        productData:payload
      });
      break;
    case 'ADD_CART_DATA':
      return Object.assign({},state,{
        cartData:state.cartData.concat(payload)
      });
      break;
    default:
      return state;
  }
};
export default reducer;