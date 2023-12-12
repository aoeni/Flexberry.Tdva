import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидБилетаEnum from '../enums/i-i-s-tdva-вид-билета';

export default FlexberryEnum.extend({
  enum: ВидБилетаEnum,
  sourceType: 'IIS.Tdva.ВидБилета'
});
