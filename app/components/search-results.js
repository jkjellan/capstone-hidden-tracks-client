import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  youtube: {},

  actions: {
    search() {
      console.log('search-results.js sending submitQuery action to songs.hbs with youtube',this.get('youtube'))
      this.sendAction('submitQuery', this.get('youtube'))
    }
  }
});
