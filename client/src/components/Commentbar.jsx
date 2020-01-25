import React from 'react';
import './styles.css';
import Liked from './Liked.jsx';
import Reposted from './Reposted.jsx';
const path = require('path');

class Commentbar extends React.Component{
  constructor(props) {
    super(props);
    this.handleLikeChange = this.handleLikeChange.bind(this);
    this.handleRepostChange = this.handleRepostChange.bind(this);
    this.state = {
      comments: [],
      liked: this.props.liked,
      likeCount: this.props.likedNum,
      reposted: this.props.reposted,
      repostCount: this.props.repostCount
    }
  }

  handleLikeChange(likeStatus) {
    this.setState({
      liked: likeStatus
    })
    this.props.handleLikeChangeApp(likeStatus);
  }

  handleRepostChange(repostStatus) {
    this.setState({
      reposted: repostStatus
    })
    this.props.handleRepostChangeApp(repostStatus);
  }

  render() {
    let isLiked = this.props.liked;
    return (
        <div class='flex-container-commentbar-interaction'>
            <div class="flex-container-commentbar">
              <div><img className='headshot' src='http://localhost:4000/headshot.jpg'></img></div>
                <div>
                    <form>
                        <input className="form" type="text" name="inputBox" placeholder="Write a comment" size='60'/>
                    </form>
                </div>
            </div>

           <div class='flex-container-interaction-bar'>
            <div class='flex-container-interaction'>
                <Liked liked={this.props.liked} likedNum={this.props.likedNum} onLikeChange={this.handleLikeChange}/>
                <Reposted reposted={this.props.reposted} repostCount={this.props.repostCount} onRepostChange={this.handleRepostChange}/>
                {/* <button class='reposts'></button> */}
                <button class='share'></button>
                <button class='next'></button>
                <button class='more'></button>
            </div>

            <div class='flex-container-stats'>
              <div className='interaction-tiny-flex'>
                <div className='plays-icon'></div>
                <div className='plays'>267k</div>
              </div>
              <div className='likes-icon'></div>
              <div className='likes-stats'>{this.props.likedNum}</div>
              <div className='reposts-icon'></div>
              <div className='reposts-stats'>{this.props.repostCount}</div>
            </div>
           </div>
        </div>
        )
    }
}

export default Commentbar;