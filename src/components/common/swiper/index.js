import React from 'react'
import { Carousel } from 'antd-mobile';

class Swiper extends React.Component {
  state = {
    data: [
        {id:1,pic:'http://beile.bakelulu.com.cn/recommend/o_1cer11hk91v351jv21c9g1hfa1j7co.png?imageView2/1/w/720/h/540' ,title:'Be a Child Today'}
    ],
    imgHeight: 428,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState(()=>({
        data: [{id:1,pic:'http://beile.bakelulu.com.cn/recommend/o_1cer11hk91v351jv21c9g1hfa1j7co.png?imageView2/1/w/720/h/540' ,title:'Be a Child Today'}],
      }));
    }, 100);
  }
  render() {
    return (
        <Carousel
          autoplay={true}
          cellSpacing ={0}
          infinite
          style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
        >
          {this.state.data.map(val => (
            <div
              key={val}
              style={{ display: 'inline-block',  height: '2.853333rem' ,overflow:'hidden' }}
            >
              <img
                src={val.pic}
                alt=""
                style={{ width: '100%', height:'100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 428 });
                }}
              />
            </div>
          ))}
        </Carousel>
    );
  }
}

export default Swiper