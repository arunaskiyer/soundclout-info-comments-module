import React from 'react';
import './styles.css';
const path = require('path');

class Liked extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLiked: this.props.liked
    }
  }
  
  handleChange() {
    var currentStatus = this.state.isLiked;
    this.setState({
      isLiked: !currentStatus
    })
  }
  
  render() {
    if(this.state.isLiked) {
      return(
        <button class='liked' onClick={this.handleChange.bind(this)}></button>
      );
    }
    return(
      <button class='likes' onClick={this.handleChange.bind(this)}></button>
    );
  }
}

export default Liked;