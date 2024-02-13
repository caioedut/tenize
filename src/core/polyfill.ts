import { __cometta_polyfill__ } from '../constants';
import { Polyfill } from '../types';

export default function polyfill(options?: Partial<Polyfill>) {
  Object.assign(__cometta_polyfill__, options || {});
}
