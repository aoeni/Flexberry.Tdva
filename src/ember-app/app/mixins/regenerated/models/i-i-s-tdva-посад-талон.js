import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  пассажир: DS.belongsTo('i-i-s-tdva-пассажир', { inverse: null, async: false }),
  рейс: DS.belongsTo('i-i-s-tdva-рейс', { inverse: null, async: false })
});

export let ValidationRules = {
  пассажир: {
    descriptionKey: 'models.i-i-s-tdva-посад-талон.validations.пассажир.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рейс: {
    descriptionKey: 'models.i-i-s-tdva-посад-талон.validations.рейс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосадТалонE', 'i-i-s-tdva-посад-талон', {
    пассажир: belongsTo('i-i-s-tdva-пассажир', 'Пассажир', {
      фИО: attr('ФИО', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' }),
    рейс: belongsTo('i-i-s-tdva-рейс', 'Рейс', {
      куда: attr('Куда', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'куда' })
  });

  modelClass.defineProjection('ПосадТалонL', 'i-i-s-tdva-посад-талон', {
    пассажир: belongsTo('i-i-s-tdva-пассажир', 'ФИО', {
      фИО: attr('ФИО', { index: 0 })
    }, { index: -1, hidden: true }),
    рейс: belongsTo('i-i-s-tdva-рейс', 'Куда', {
      куда: attr('Куда', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
