/* globals sinon, expect */

import reducer from '../index';
import {
  SOME_CONSTANT
} from '../../actions';

describe(' - reducers - index', () => {

  it('has an initial state', () => {
    const initial_state = reducer(undefined, {});
    expect(initial_state.this_is_true).to.be.true;
  });

});