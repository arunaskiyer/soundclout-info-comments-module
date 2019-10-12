module.exports = [
{
    id: {
      type: Number,
      unique: true
    },
    name: 'Unemployed',
    streams: 500,
    likes: 100,
    userInteraction: {
      username: 'Aruna Iyer',
      liked: true,
      reposted: true
    },
    tags: ['rap', 'alternative'],
    description: 'the best',
    releaseDate: new Date('December 17, 1995 03:24:00'),
    pLine: 'String',
    cLine: 'String',
    artist: {
      picture: 'String',
      name: 'String',
      followers: 1,
      tracks: 2,
      pro: true    
    },
    comments: [
        {
          timeInSongSeconds: 500,
          timePosted: new Date('December 17, 2009 03:24:00'),
          commentText: 'String',
          username: 'String',
          picture: 'String',
          followers: 2,
          location: 'Berkeley, CA'
        }
    ]
  },
  {
    id: {
      type: Number,
      unique: true
    },
    name: 'Unemployed',
    streams: 500,
    likes: 100,
    userInteraction: {
      username: 'Aruna Iyer',
      liked: true,
      reposted: true
    },
    tags: ['rap', 'alternative'],
    description: 'the best',
    releaseDate: new Date('December 17, 1995 03:24:00'),
    pLine: 'String',
    cLine: 'String',
    artist: {
      picture: 'String',
      name: 'String',
      followers: 1,
      tracks: 2,
      pro: true    
    },
    comments: [
        {
          timeInSongSeconds: 500,
          timePosted: new Date('December 17, 2009 03:24:00'),
          commentText: 'String',
          username: 'String',
          picture: 'String',
          followers: 2,
          location: 'Berkeley, CA'
        }
    ]
  }
];