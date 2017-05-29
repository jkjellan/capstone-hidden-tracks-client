import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated:
  Ember.computed.alias('auth.isAuthenticated'),
  flashMessages: Ember.inject.service(),

  model () {
    console.log('show all songs function ran');
    if(this.get('isAuthenticated')) {
      console.log('Authenticated?',this.get('isAuthenticated'));
      console.log(this.get('store').findAll('song'));
      return this.get('store').findAll('song');
    } else {
      this.get('flashMessages')
      .danger('Please sign in to view this page.');
    }
  },
});
