import Route from '@ember/routing/route';
import AuthorizationRouteMixin from 'alpha-amber/mixins/authorization-route-mixin';
import BreadcrumbsRouteMixin from 'alpha-amber/mixins/breadcrumbs-route-mixin';
import { CanMixin } from 'ember-can';

export const ShowRouteUnauthenticated = Route.extend(
  CanMixin,
  AuthorizationRouteMixin,
  BreadcrumbsRouteMixin, {
    modelName: null,
    modelRouteParam: 'id',
    pageActions: [],

    model(params) {
      return this.store.findRecord(this.get('modelName'), params[this.get('modelRouteParam')], params);
    },

    setupController(controller, model) {
      this._super(controller, model);
      controller.set('pageActions', this.get('pageActions'));
      controller.set('tabItems', this.get('tabItems'));
    }
  }
);

export default ShowRouteUnauthenticated;
