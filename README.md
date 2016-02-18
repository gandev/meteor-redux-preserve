# meteor add gandev:redux-preserve

## Preserve redux store state across page reloads.
### requires serializable state (by JSON.stringify)

## API

```javascript
  getPreservedState(initialState) //returns state

  registerStore(store) //persists store.getState() before reload 
```
