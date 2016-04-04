import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('listing');
  },
  actions: {
    destroyListing(listing) {
      listing.destroyRecord();
      this.transitionTo('index');
    }
  }
});
