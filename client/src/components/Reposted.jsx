import React from 'react';
import './styles.css';
const path = require('path');

class Reposted extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange() {
    var currentStatus = this.props.reposted;
    if(currentStatus === true) {
      this.props.onRepostChange(false)
    } else {
      this.props.onRepostChange(true)
    }
  }

  
  render() {
    if(this.props.reposted) {
      return(
        <div>
          <button class='reposted' onClick={this.handleChange}></button>
        </div>
        
      );
    }
    return(
      <div>
          <button class='reposts' onClick={this.handleChange.bind(this)}></button>
      </div>
    );
  }
}

export default Reposted;