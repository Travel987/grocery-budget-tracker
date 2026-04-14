import GroceryItem from "./GroceryItem";

// Display message when no items are present

function GroceryList({ items, deleteItem }) {
  if (items.length === 0) {
    return <p>🛒 No items yet. Add your first grocery item above!</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <GroceryItem
          key={item.id}
          item={item}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default GroceryList;