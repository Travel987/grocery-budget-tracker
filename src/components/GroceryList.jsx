function GroceryList({ items, deleteItem }) {
  return (
    <div>
      <h2>Grocery List</h2>

      {items.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}{" "}
              <button type="button" onClick={() => deleteItem(item.id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GroceryList;