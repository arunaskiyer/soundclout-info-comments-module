var faker = require('faker');
const fs = require('fs');
var moment = require('moment');

const songsData = fs.createWriteStream('songs.csv');

const genres = ['hip hop', 'indie', 'country', 'r&b', 'classical', 'punk']
const boolOptions = ['true', 'false']

//create 100 song records with corresponding comments
function writeSongs(writer, encoding, end) {
  let i = 100;
  let id = 0;
  function write() {
    let okToWrite = true;
    while(id <= i) {
      //write out contents of records for song
      const songID = id;
      const songName = faker.lorem.words();
      const streams = faker.random.number();
      const likes = faker.random.number();
      const reposts = faker.random.number();
      userInteraction = {
        username : faker.name.firstName() + ' ' + faker.name.lastName(),
        userpicture : faker.image.people(),
        liked: false,
        reposted: false
      };
      const tags = genres[faker.random.number({min:0, max: 5})];
      const description = faker.lorem.words();
      //artist or label?
      const releasedBy = faker.name.firstName() + ' ' + faker.name.lastName();
      //TODO: work on this date
      const releaseDate = new Date('March 19, 2019 00:00:00');
      //TODO: work on Record label names
      const pLine = '℗ 2019 Interscope Records';
      const cLine = '© 2019 © 2019 Interscope Records';
      const explicit = boolOptions[faker.random.number({min: 0, max: 1})];
      //generate the random number of comments
      let commentsNum = faker.random.number({min:1, max: 10});
      //TODO: write out the comments for the song
      let data = `${songID}, ${songName}, ${streams}, ${likes}, ${reposts}, ${userInteraction.userInteraction}, ${userInteraction.userpicture}, ${userInteraction.liked}, ${userInteraction.reposted} ${tags}, ${description}, ${releasedBy}, ${releaseDate}, ${pLine}, ${cLine}, ${explicit}\n`
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
      id++;
    }
  }
  write();
}

writeSongs(songsData, 'utf-8', () => {
  songsData.end();
})