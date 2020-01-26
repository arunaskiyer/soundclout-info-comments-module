import React from 'react';

const NumberComments = ({numberComments}) => {
  if(numberComments !== 1) {
    return (
      <div className='comments-stats'>{numberComments} comments</div>
    );
  } else {
    return(<div className='comments-stats'>1 comment</div>);
  }
}

export default NumberComments;