import React from 'react';
import './styles.css';
import NumberComments from './NumberComments.jsx';
import moment from 'moment';
const path = require('path');


class Comments extends React.Component{
  constructor(props){
    super(props);
    console.log("HELLO", this.props)
  }
  
  render() {      
    if ( (this.props.comments.length !== 0) && (this.props.numberComments !== 0)) {
      var nameComp = <div> {this.props.comments['0'].username} </div>
      var songTime = this.props.comments['0'].timeInSongSeconds;
      var timeMin = Math.floor(songTime/60)
      var timeSeconds = songTime-(timeMin*60);
      var timeComp = timeMin + ':' + timeSeconds;
      var commentText = this.props.comments['0'].commentText;
      var date = this.props.comments['0'].timePosted.substr(0,10);
      var fromNow = moment(date, "YYYY-MM-DD").fromNow();
      var pic = this.props.comments['0'].picture;
      // var fromNow = moment("20111031", "YYYYMMDD").fromNow();
      // console.log(fromNow, 'test')
    } else {
      var nameComp = '';
      var timeComp = '';
      var commentText = '';
      var fromNow = '';
      var pic = '';
    }

    return (
      <div class='comments-component'>
        <div class='flex-row'>
           <div>
              <svg width="21" height="21" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>stats_comment</title><path d="M5 3c-1.105 0-2 .887-2 2.006v2.988C3 9.102 3.887 10 5 10h6c1.105 0 2-.887 2-2.006V5.006A1.998 1.998 0 0 0 11 3H5zm0 7v3l3-3H5z" fill="#999" fill-rule="evenodd"/></svg>
            </div>
            <NumberComments numberComments={this.props.numberComments}/>
        </div>

        <div class='comment-container-asi'>
          <div>
            <img className='comment-pic' src={pic}></img>
          </div>
          <div class='flex-comment-container-body'>
          <div class='flex-comment-container-top-bar'>
          <div class='flex-comment-container-top-bar-name'> {nameComp} </div>
          <div class='at'> at </div>
          <div class='flex-comment-container-top-bar-time'> {timeComp} </div>
          <div class='flex-comment-container-top-bar-posted'> {fromNow} </div>
        </div>
        <div class='comment-text-asi'> {commentText} </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Comments;