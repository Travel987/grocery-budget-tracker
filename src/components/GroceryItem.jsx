
// Displays individual grocery item with delete functionality

function GroceryItem({ item, deleteItem }) {
  return (
    <div className="item-row">
      <span>
        {item.name} - ${item.price}
      </span>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  );
}

export default GroceryItem;