import Ember from 'ember';
// import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({

  searchYoutube (youtube) {
    // console.log('search.js searchYouTube(youtube), youtube is', this.get('youtube'))
    const base = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCbVcF-CQLSKJIrAtwywxY9Uw8lcrggE30&part=snippet&maxResults=6&videoEmbeddable=true&type=video&q=';
    const q = youtube.query;
    const url = base + q;
    console.log('first line of youtubeApicall')
    return Ember.$.ajax({
      cache: false,
      dataType: 'json',
      type: 'GET',
      timeout: 5000,
      url: url
    })
    .done(function (data) {
      console.log(data);
      // console.log('in .done of AJAX')
      return data;
    });
  }
});
