
// Displays individual grocery item with delete functionality

function GroceryItem({ item, deleteItem }) {
  return (
    <div className="item-row">
      <span>
        {item.name} - ${Number(item.price).toFixed(2)}
      </span>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  );
}

export default GroceryItem;