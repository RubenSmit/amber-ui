import { module, test } from 'qunit';
import EmberObject from '@ember/object';
import Service from '@ember/service';
import formOpenedLabelHelper from 'amber-ui/helpers/form-opened-label';
import moment from 'moment';

module('Unit | Helper | form opened label', function () {
  moment.locale('nl');

  const i18nStub = Service.extend({
    t: (text) => text,
  });

  const mockForm = EmberObject.extend({
    respondFrom: moment().subtract(7, 'days').toDate(),
    respondUntil: moment().add(7, 'days').toDate(),
  });

  test('it computes a label indicating when the form opens or closes', function (assert) {
    const subject = formOpenedLabelHelper.create({
      i18n: i18nStub.create(),
    });

    assert.equal(subject.compute([mockForm.create()]), 'Sluit over 7 dagen');
    assert.equal(
      subject.compute([
        mockForm.create({
          respondUntil: moment().subtract(4, 'days').toDate(),
        }),
      ]),
      'Sloot 4 dagen geleden'
    );
    assert.equal(
      subject.compute([
        mockForm.create({
          respondFrom: moment().add(5, 'days').toDate(),
        }),
      ]),
      'Opent over 5 dagen'
    );
  });
});
