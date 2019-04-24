import { computed } from '@ember/object';
import ShowRouteUnauthenticated from 'alpha-amber/routes/application/show';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default ShowRouteUnauthenticated.extend(AuthenticatedRouteMixin, {
  canAccess() {
    return this.can('show mail-moderations');
  },
  modelName: 'stored-mail',
  title: computed('controller.model.subject', function() {
    return this.get('controller.model.subject');
  }),
  parents: ['mail-moderation.index'],
  pageActions: computed('controller.model', function() {
    return [
      {
        link: 'mail-moderations.accept',
        title: 'Goedkeuren',
        icon: 'check',
        linkArgument: this.get('controller.model'),
        canAccess: this.can('accept mail-moderations')
      },
      {
        link: 'mail-moderations.reject',
        title: 'Afkeuren',
        icon: 'minus-circle',
        linkArgument: this.get('controller.model'),
        canAccess: this.can('reject mail-moderations')
      },
      {
        link: 'mail-moderations.destroy',
        title: 'Negeren',
        icon: 'trash',
        linkArgument: this.get('controller.model'),
        canAccess: this.can('destroy mail-moderations')
      }
    ];
  })
});
