import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),

  song_title: DS.attr('string'),
  artist_name: DS.attr('string'),
  song_url: DS.attr('string')
});
