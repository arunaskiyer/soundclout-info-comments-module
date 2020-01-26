import React from 'react';
import ReactTooltip from 'react-tooltip';
import Commentbar from './Commentbar.jsx';
import ArtistInfo from './ArtistInfo.jsx';
import TrackInfo from './TrackInfo.jsx';
import Comments from './Comments';
import Axios from 'axios';
import './styles.css';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        comments: [],
        numberComments: 5000,
        liked: false,
        likeCount: 7533,
        reposted: false,
        repostCount: 507
      }
    this.handleLikeChangeApp = this.handleLikeChangeApp.bind(this);
    this.handleRepostChangeApp = this.handleRepostChangeApp.bind(this);
    this.getSongs = this.getSongs.bind(this);
    };

    // handleAdd(newComment){
    //     Axios.post('/newcomment', newcomment)
    //     .then((songComments) => {
    //         this.setState({
    //             comments: comments.data,
    //         })
    //     })
    // }

    handleLikeChangeApp(likeStatus) {
      var newLikeCount = this.state.likeCount;
      if(likeStatus===true){
        newLikeCount++;
      } else {
        newLikeCount--;
      }
      this.setState({
        liked: likeStatus,
        likeCount: newLikeCount
      })
    }

    handleRepostChangeApp(repostStatus) {
      var newRepostCount = this.state.repostCount;
      if(repostStatus===true){
        newRepostCount++;
      } else {
        newRepostCount--;
      }
      this.setState({
        reposted: repostStatus,
        repostCount: newRepostCount
      })
    }

    getSongs() {
      Axios.get('/songs')
        .then((songs) => {
          this.setState({
            comments: songs.data['0'].comments,
            numberComments: songs.data['0'].comments.length,
            liked: songs.data['0'].userInteraction.liked,
            likeCount: songs.data['0'].likes,
            reposted: songs.data['0'].userInteraction.reposted,
          })
          console.log(songs.data['0'])
        })
    }

    componentDidMount(){
      this.getSongs();
    }

    render() {
      return(
        <div className='comments-component'>
          <Commentbar liked={this.state.liked} 
                      likedNum={this.state.likeCount} 
                      handleLikeChangeApp={this.handleLikeChangeApp}
                      reposted={this.state.reposted}
                      repostCount={this.state.repostCount}
                      handleRepostChangeApp={this.handleRepostChangeApp}
          />
          <div className='flex-lower'>
            <ArtistInfo/>
            <div className='flex-lower-right'>
              <TrackInfo/>
              <Comments numberComments={this.state.numberComments}/>
            </div>
          </div>
        </div>
        )
    }
}
export default App;