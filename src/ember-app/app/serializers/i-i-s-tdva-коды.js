import { Serializer as КодыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tdva-коды';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КодыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
