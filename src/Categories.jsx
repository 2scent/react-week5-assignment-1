export default function Categories({ categories, clickedCategory, onClick }) {
  return (
    <ul>
      {
        categories.map((category) => (
          <li key={category.id}><button type="button" onClick={onClick}>{clickedCategory === category.name ? `${category.name}(V)` : category.name}</button></li>
        ))
      }
    </ul>
  );
}
