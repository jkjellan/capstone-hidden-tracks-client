import DS from 'ember-data';

export default DS.Model.extend({
  song: DS.hasMany('song'),
  email: DS.attr('string'),
});
