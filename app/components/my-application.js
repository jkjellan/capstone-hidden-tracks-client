import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      console.log('my-application.js sign-out action, signing out user:', this.get('user'))
      this.sendAction('signOut');
    },
  },
});
