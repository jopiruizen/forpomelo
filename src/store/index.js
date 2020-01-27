import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import * as models from './models';

const store = init({
    redux: { },
    models: { ...models, },
    plugins: [selectPlugin],
  });
  
export const { select, dispatch, getState } = store;
export default store;
  