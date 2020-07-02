import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import { selectCategory } from './action';

import { categories } from '../__fixture__/data';

jest.mock('react-redux');

describe('<CategoriesContainer />', () => {
  describe('render CategoriesContainer', () => {
    it('shows categories', () => {
      useSelector.mockImplementation((selector) => selector({
        categories,
        selectedCategory: '',
      }));

      const { queryByRole } = render(<CategoriesContainer />);

      categories.forEach((category) => {
        expect(queryByRole('button', { name: category.name })).not.toBeNull();
      });
    });
  });

  context('when the user selects category', () => {
    it('run selectCategory action', () => {
      useSelector.mockImplementation((selector) => selector({
        categories,
        selectedCategory: '',
      }));

      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { getByRole } = render(<CategoriesContainer />);

      categories.forEach((category) => {
        fireEvent.click(getByRole('button', { name: category.name }));
        expect(dispatch).toBeCalledWith(selectCategory(category.name));
      });
    });
  });
});
