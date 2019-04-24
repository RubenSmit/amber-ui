import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import { PicturePublicationPreferenceTypes, UserDetailsPreferenceTypes } from 'alpha-amber/constants';
import ModelSaveMixin from 'alpha-amber/mixins/model-save-mixin';

export default Component.extend(ModelSaveMixin, {
  session: service(),
  formActionsVisible: true,
  picturePublicationPreferenceTypes: computed(() => {
    return Object.entries(PicturePublicationPreferenceTypes).map(([value, label]) => ({ value, label }));
  }),
  userDetailsPreferenceTypes: computed(() => {
    return Object.entries(UserDetailsPreferenceTypes).map(([value, label]) => ({ value, label }));
  }),
  isOwnUser: computed('session.currentUser', 'model', function() {
    return this.get('model') === this.get('session.currentUser');
  }),
  canChangeTomatoSettings: computed('model.allowTomatoSharing', function() {
    return !isPresent(this.get('model').changedAttributes().allowTomatoSharing) && this.get('model.allowTomatoSharing');
  }),
  successMessage: 'Privacyinstellingen gewijzigd!'
});
