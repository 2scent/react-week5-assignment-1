const initialState = {
  regions: [],
  categories: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setCategories') {
    return state;
  }

  return state;
}
