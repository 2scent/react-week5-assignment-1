import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegion } from './actions';

import { loadRegions } from './async-actions';
import Regions from './Regions';

const RegionsContainer = () => {
  const dispatch = useDispatch();

  const regions = useSelector((state) => state.regions);
  const selectedRegion = useSelector((state) => state.selectedRegion);

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  const handleClick = (region) => dispatch(selectRegion(region));

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onClick={handleClick}
    />
  );
};

export default RegionsContainer;
