import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import { watchRegion, getRegionsThunk } from './actions';

function RegionsContainer() {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions);
  useEffect(() => {
    dispatch(getRegionsThunk());
  }, []);

  function handleClick(id) {
    dispatch(watchRegion(id));
  }
  return (
    <div className="regions-container">
      <List list={regions} onClick={handleClick} />
    </div>
  );
}

export default RegionsContainer;
