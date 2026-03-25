function GroceryList({ items, deleteItem }) {
  return (
    <>
      {items.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}{" "}
              <button type="button" onClick={() => deleteItem(item.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default GroceryList;
