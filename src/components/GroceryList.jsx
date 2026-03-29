import GroceryItem from "./GroceryItem";

function GroceryList({ items, deleteItem }) {
  if (items.length === 0) {
    return <p>No items added yet.</p>;
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