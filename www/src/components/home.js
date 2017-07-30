import React from 'react';
import {hashHistory} from 'react-router';

import Gallery from "./gallery";
import Banner from "./banner";
import Subscribe from "./subscribe";


class Home extends React.Component{
  componentDidMount(){
    hashHistory.replace({pathname:'home'});
  }
  render(){
    return(
      <div className="Home">
        <Banner ></Banner>
        <Gallery></Gallery>
        <Subscribe></Subscribe>
      </div>
    );
  }
}

export default Home;