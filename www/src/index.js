import React,{Component} from 'react';
import ReactDom from 'react-dom';
import RouterConfig from './Router.config';


//状态管理
import {createStore} from 'redux'; //解构一个createStore 创建状态对象
import {Provider} from 'react-redux';//提供store服务，连接组件和store服务
import defaultState from './store/state';
import reducer from './store/reducer';

//创建store实例对象
let store = createStore(reducer,defaultState);


ReactDom.render(

  <Provider store={store}>
    <RouterConfig/>
  </Provider>,
  document.querySelector('#app')
);