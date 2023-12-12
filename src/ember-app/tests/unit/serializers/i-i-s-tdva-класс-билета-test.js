import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tdva-класс-билета', 'Unit | Serializer | i-i-s-tdva-класс-билета', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-tdva-класс-билета',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-tdva-вид-билета',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
