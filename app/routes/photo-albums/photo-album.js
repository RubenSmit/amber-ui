import { computed } from '@ember/object';
import { ShowRouteUnauthenticated } from 'alpha-amber/routes/application/show';

export default ShowRouteUnauthenticated.extend({
  canAccess() {
    return this.can('show photo-albums');
  },
  modelName: 'photo-album',
  modelRouteParam: 'photo_album_id',
  title: computed('controller.model.title', function() {
    return this.get('controller.model.title');
  })
});
