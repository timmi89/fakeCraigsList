import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    categories: this.store.findAll('category'),
    listings: this.store.findAll('listing')
  });
},
  actions: {
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      console.log(params);
      newCategory.save();
      this.transitionTo('index');
    },
  }
});
