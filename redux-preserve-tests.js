import { Tinytest } from 'meteor/tinytest';
import { Reload } from 'meteor/reload';
import { registerStore, getPreservedState } from 'meteor/gandev:redux-preserve';

const STATE = {
  test: 'test123'
};

const testStore = {
  getState() {
    return STATE;
  }
};

Tinytest.add('redux-preserve - state preservation', function (test) {
  registerStore(testStore);

  const preservedState = getPreservedState();
  if(!preservedState) {
    Reload._reload();
  }

  test.equal(getPreservedState(), STATE);
});
