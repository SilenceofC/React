import React,{Component} from 'react';
import '../assets/css/contact.css';
class Contact extends Component{

  componentDidMount(){
    let map = new BMap.Map("baidu_map");    // 创建Map实例
    let point=new BMap.Point(121.18151, 31.180818);
    map.centerAndZoom(point, 15);  // 初始化地图,设置中心点坐标和地图级别
    let marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    document.querySelector('#btn1').onclick=function(){
      map.clearOverlays();//清除覆盖物
      let driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: BMAP_DRIVING_POLICY_LEAST_DISTANCE});
      driving.search(document.querySelector('#t1').value,document.querySelector('#t2').value);
    };
  }
  render(){
    return(
      <div className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="map">
            <div id="baidu_map"></div>
            <input type="text" placeholder="起点" id="t1"/>
            <input type="text" placeholder="终点" id="t2"/>
            <input type="button" id="btn1" value="驾车路线" />
          </div>
          <div className="contact-infom">
            <h4>Miscellaneous information :</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sheets containing Lorem Ipsum passages,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.It was popularised in the 1960s with the release of Letraset
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="address">
            <div className="col-md-4 address-grids">
              <h4>Address :</h4>
              <ul>
                <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                <p>	Eiusmod Tempor inc<br/>
                  St Dolore Place,<br/>
                  Kingsport 56777
                </p>
              </ul>
            </div>
            <div className="col-md-4 address-grids">
              <h4>Contact no :</h4>
              <p><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>+2 800 544 6035</p>
              <p><span className="glyphicon glyphicon-print" aria-hidden="true"></span>+2 100 889 9466</p>
            </div>
            <div className="col-md-4 address-grids">
              <h4>Email :</h4>
              <p><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span><a href="mailto:example@mail.com">mail@example.com</a></p>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="contact-form" >
            <h4>Contact form</h4>
            <form>
              <input type="text" placeholder="Name" required=""/>
              <input type="text" placeholder="Email"   required="" />
              <input type="text" placeholder="Telephone"  required="" />
              <textarea type="text"  required="" placeholder='Message...'></textarea>
              <button className="btn1">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact;