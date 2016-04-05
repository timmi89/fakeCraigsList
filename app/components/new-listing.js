import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    save1() {
      // var date = new Date();
      // var time = date.toString().substring(16, 24);
      // date = date.toString().substring(4, 15);
      // var dateAndTime = date + ' ' + time;
      // var momentDateAndTime = ;
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        category: this.get('category'),
        date: moment().format('MM/DD/YYYY hh:mm:ss a'),
        description: this.get('description'),
        cost: this.get('cost'),
        image: this.get('image')
      };
      console.log(params);
      this.set('addNewListing', false);
      this.sendAction('save2', params);
    }
  }
});
