import { useState } from "react";

function AddItemForm({ addItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !price) {
      setError("Please enter both item name and price.");
      return;
    }

    if (Number(price) <= 0) {
      setError("Price must be greater than 0.");
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      price: Number(price),
    };

    addItem(newItem);
    setName("");
    setPrice("");
    setError("");
  }
// Handles adding new grocery items

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row add-item-row">
        <span>Add Item</span>

        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </div>

      {error && <p className="error-text">{error}</p>}
    </form>
  );
}

export default AddItemForm;