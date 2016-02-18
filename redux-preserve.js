export function getPreservedState(initialState) {
  return Reload._migrationData('gandev:redux-preserve') || initialState;
};

export function registerStore(store) {
  if(typeof store.getState !== 'function') {
    throw new Error('Store implementation with getState function required!');
  }

  Reload._onMigrate('gandev:redux-preserve', function () {
    return [true, store.getState()];
  });
};
