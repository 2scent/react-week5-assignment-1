import {
  chooseCategory, chooseRegion, setCategories, setRegions, setRestaurants,
} from './actions';
import reducer from './reducer';

jest.mock('react-redux');

describe('reducer', () => {
  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer({
        categories: [],
      }, setCategories([
        { id: 1, name: '한식' },
      ]));

      expect(state.categories).toHaveLength(1);
      expect(state.categories[0].name).toBe('한식');
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const state = reducer({
        regions: [],
      }, setRegions([
        { id: 1, name: '서울' },
      ]));

      expect(state.regions).toHaveLength(1);
      expect(state.regions[0].name).toBe('서울');
    });
  });

  describe('chooseRegion', () => {
    it('set clicked regions', () => {
      const state = reducer({
        clickedRegion: '',
      }, chooseRegion('서울'));

      expect(state.clickedRegion).toBe('서울');
    });
  });

  describe('chooseCategory', () => {
    it('set clicked regions', () => {
      const state = reducer({
        clickedCategory: '',
      }, chooseCategory('한식'));

      expect(state.clickedCategory).toBe('한식');
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const restaurants = [
        { id: 1, name: '호신각' },
        { id: 2, name: '홍콩반점' },
      ];

      const state = reducer({
        restaurants: [],
      }, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(2);
    });
  });

  describe('invalid action', () => {
    it('returns initialState', () => {
      const state = reducer({
        regions: [],
        categories: [],
      }, { type: '' });

      expect(state.categories).toHaveLength(0);
      expect(state.regions).toHaveLength(0);
    });
  });

  describe('empty state', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: '' });

      expect(state.categories).toHaveLength(0);
      expect(state.regions).toHaveLength(0);
    });
  });
});
