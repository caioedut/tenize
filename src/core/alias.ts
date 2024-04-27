import { __cometta_aliases__ } from '../constants';
import type { Alias } from '../types';

export default function alias(aliases: Alias) {
  Object.assign(__cometta_aliases__, aliases);
}
