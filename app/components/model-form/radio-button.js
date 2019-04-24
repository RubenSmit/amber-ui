import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'input',
  type: 'radio',
  groupValue: null,
  attributeBindings: [
    'checked',
    'disabled',
    'name',
    'required',
    'type',
    'value'
  ],
  checked: computed('groupValue', 'value', function() {
    return this.get('groupValue') === this.get('value');
  }).readOnly(),
  change() {
    const value = this.get('value');
    const groupValue = this.get('groupValue');

    if (groupValue !== value) {
      this.set('groupValue', value);
    }
  }
});
