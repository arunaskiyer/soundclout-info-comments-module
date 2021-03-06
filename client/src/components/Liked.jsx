import React from 'react';
import './styles.css';
const path = require('path');

class Liked extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange() {
    var currentStatus = this.props.liked;
    if(currentStatus === true) {
      this.props.onLikeChange(false)
    } else {
      this.props.onLikeChange(true)
    }
  }

  
  render() {
    if(this.props.liked) {
      return(
        <div>
          <button class='liked' onClick={this.handleChange}></button>
        </div>
        
      );
    }
    return(
      <div>
          <button class='likes' onClick={this.handleChange.bind(this)}></button>
      </div>
    );
  }
}

export default Liked;