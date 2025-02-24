const Region = ({ region, selected, onClick }) => {
  const handleClick = () => onClick(region);

  return (
    <li>
      <button type="button" onClick={handleClick}>
        {region.name}
        {selected && '(V)'}
      </button>
    </li>
  );
};

export default Region;
