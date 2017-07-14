import { IS_ROOT } from './consts';

export const isRoot = (state) => {
  return {
      type : IS_ROOT,
      payload : state
  }
}