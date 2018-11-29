import React, {Component } from  'react'
import { PickerView, WhiteSpace } from 'antd-mobile';

// class UtilConversion extends Component {
//     render(){
//         return (
//             <div className="util">

//             </div>
//         )
//     }
// }



 

const season = [
  {
    label: '摄氏度',
    value: '摄氏度',
  },
  {
    label: '华氏度',
    value: '华氏度',
  },
  {
    label: '英寸',
    value: '英寸',
  },
  {
    label: '厘米',
    value: '厘米',
  },
  {
    label: '米',
    value: '米',
  },
  {
    label: '克',
    value: '克',
  },
  {
    label: '千克',
    value: '千克',
  },
];
 
class UtilConversion extends Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  }
  onScrollChange = (value) => {
    console.log(value);
  }
  render() {
    return (
      <div>
         
         
        <PickerView
          onChange= {this.onChange}
          onScrollChange={this.onScrollChange}
          data={season}
          value={this.state.value}
          cascade={false}
        />
        <WhiteSpace /> 
         
      </div>
    );
  }
}

export default UtilConversion