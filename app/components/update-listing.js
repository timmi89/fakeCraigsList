import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    updateListingForm() {
      this.set('updateListingForm', true);
    },
    update(listing) {
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        date: this.get('date'),
        image: this.get('image'),
        description: this.get('description'),
        cost: this.get('cost'),
      };
      this.set('updateListingForm', false);
      this.sendAction('update', listing, params);
    }
  }
});
