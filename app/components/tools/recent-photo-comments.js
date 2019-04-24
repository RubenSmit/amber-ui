import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  store: service(),
  ajax: service(),
  photosWithComments: computed(function() {
    // eslint-disable-next-line camelcase
    return this.get('store').query('photo', { sort: '-updated_at', filter: { with_comments: true }, page: { number: '1', size: 4 } });
  }),
  albums: computed(function() {
    return this.get('store').query('photo-album', { sort: '-date', page: { number: '1', size: 3 } });
  })
});
