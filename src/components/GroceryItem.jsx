
// Displays individual grocery item with delete functionality

function GroceryItem({ item, deleteItem }) {
  const itemTotal = Number(item.price) * Number(item.quantity);

  return (
    <div className="item-row">
      <span>
        {item.name} ({item.category}) - {item.quantity} x $
        {Number(item.price).toFixed(2)} = ${itemTotal.toFixed(2)}
      </span>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  );
}

export default GroceryItem;