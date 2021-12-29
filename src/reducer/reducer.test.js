import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getRegions, getCategories } from '../services/__mocks__/api';
import {
  fetchCategories, setCategories, setLocations, fetchLocations, setLocation, setCategory,
} from './actions';

import reducer, { initialState } from './reducer';

jest.mock('react-redux');
jest.mock('../services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('reducer', () => {
  const { dispatch, clearActions, getActions } = mockStore(initialState);

  afterEach(() => {
    clearActions();
  });

  test('setLocations', () => {
    const state = reducer({ locations: [] }, setLocations([{ id: 1, name: '서울' }]));

    expect(state.locations).toHaveLength(1);
    expect(state.locations).toEqual([{ id: 1, name: '서울' }]);
  });

  test('setCategories', () => {
    const state = reducer({ categories: [] }, setCategories([{ id: 1, name: '한식' }]));

    expect(state.categories).toHaveLength(1);
    expect(state.categories).toEqual([{ id: 1, name: '한식' }]);
  });

  test('setLocation', () => {
    const locations = [{ id: 1, name: '서울' }, { id: 2, name: '대전(V)' }];
    const state = reducer({ location: null, locations }, setLocation({ id: 1, name: '서울' }));

    expect(state.selected.location).toEqual({ id: 1, name: '서울' });
    expect(state.locations).toEqual([{ id: 1, name: '서울(V)' }, { id: 2, name: '대전' }]);
  });

  test('setCategory', () => {
    const categories = [{ id: 1, name: '한식' }, { id: 2, name: '양식(V)' }];
    const state = reducer({ category: null, categories }, setCategory({ id: 1, name: '한식' }));

    expect(state.selected.category).toEqual({ id: 1, name: '한식' });
    expect(state.categories).toEqual([{ id: 1, name: '한식(V)' }, { id: 2, name: '양식' }]);
  });

  it('fetchCategories', () => {
    dispatch(fetchCategories())
      .then(async () => {
        const actions = getActions();
        const mockData = await getCategories();
        expect(actions[0]).toEqual(setCategories(mockData));
      });
  });

  it('fetchLocations', () => {
    dispatch(fetchLocations())
      .then(async () => {
        const actions = getActions();
        const mockData = await getRegions();
        expect(actions[0]).toEqual(setLocations(mockData));
      });
  });
});
