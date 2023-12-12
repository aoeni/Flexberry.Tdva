import { Serializer as КлассБилетаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tdva-класс-билета';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КлассБилетаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
