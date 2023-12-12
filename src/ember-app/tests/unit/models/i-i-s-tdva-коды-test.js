import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tdva-коды', 'Unit | Model | i-i-s-tdva-коды', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tdva-инф-бронь',
    'model:i-i-s-tdva-класс-билета',
    'model:i-i-s-tdva-коды',
    'model:i-i-s-tdva-пассажир',
    'model:i-i-s-tdva-посад-талон',
    'model:i-i-s-tdva-рейс',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
