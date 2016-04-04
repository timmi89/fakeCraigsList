import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    save1() {
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        date: this.get('date'),
        description: this.get('description'),
        cost: this.get('cost'),
        image: this.get('image')
      };
      this.set('addNewListing', false);
      this.sendAction('save2', params);
    }
  }
});
