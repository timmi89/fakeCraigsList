import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  title: DS.attr(),
  date: DS.attr(),
  description: DS.attr(),
  cost: DS.attr(),
  image: DS.attr()
});
