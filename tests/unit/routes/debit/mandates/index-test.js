import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | debit/mandates/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:debit/mandates/index');
    assert.ok(route);
  });
});
