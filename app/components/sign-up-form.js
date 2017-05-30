import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  credentials: {},

  actions: {
    submitJimForm () {
      console.log('sign-up-form.js send submit action with credentials', this.get('credentials'))
      this.sendAction('submitJim', this.get('credentials'));
    },

    reset () {
      console.log('sign-up-form.js resets credentials: ', this.get('credentials'))
      this.set('credentials', {});
      console.log('credentials now: ', this.get('credentials'))
    },
  },
});
