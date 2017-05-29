import Ember from 'ember';

export default Ember.Component.extend({
  searchResults: Ember.inject.service('search'),

  actions: {
    search(query) {
      this.get('searchResults').search(query)
    }
  }
});
