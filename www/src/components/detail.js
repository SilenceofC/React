import React from 'react';

import Single from "./single";
import Related from "./related-products";
import Collpse from "./collpse";

class Detail extends React.Component{

  render(){
    return(
      <div className="Home">
        <Single/>
        <Related/>
        <Collpse/>
      </div>
    );
  }
}

export default Detail;