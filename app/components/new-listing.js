import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    save1() {
      var date = new Date();
      var time = date.toString().substring(16, 24);
      date = date.toString().substring(4, 15);
      var dateAndTime = date + ' ' + time;
      var momentDateAndTime = moment(dateAndTime).format('MM/DD/YYYY hh:mm:ss a');
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        category: this.get('category'),
        date: momentDateAndTime,
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
