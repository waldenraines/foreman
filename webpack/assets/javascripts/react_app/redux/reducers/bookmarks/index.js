import Immutable from 'seamless-immutable';
import {
  BOOKMARKS_REQUEST,
  BOOKMARKS_SUCCESS,
  BOOKMARKS_FAILURE,
  BOOKMARKS_MODAL_OPENED,
  BOOKMARKS_MODAL_CLOSED,
  BOOKMARK_FORM_SUBMITTED,
} from '../../consts';

const initialState = Immutable({
  showModal: false,
});

const sortByName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  // names must be equal
  return 0;
};

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case BOOKMARKS_REQUEST:
      return state.set(payload.controller, []);
    case BOOKMARKS_SUCCESS:
      return state.set(payload.controller, payload.results);
    case BOOKMARKS_MODAL_OPENED:
      return state.set('currentQuery', payload.query).set('showModal', true);
    case BOOKMARK_FORM_SUBMITTED:
      return state
        .set(
          payload.body.controller,
          [...state[payload.body.controller], payload.body].sort(sortByName),
        )
        .set('showModal', false);
    case BOOKMARKS_MODAL_CLOSED:
      return state.set('showModal', false);
    case BOOKMARKS_FAILURE:
    default:
      return state;
  }
};
