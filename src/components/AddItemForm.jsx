import { useState } from "react";

function AddItemForm({ addItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !price) {
      return;
    }

    const newItem = {
      id: Date.now(),
      name: name.trim(),
      price: parseFloat(price),
    };

    addItem(newItem);
    setName("");
    setPrice("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <span>Add Item</span>

        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

export default AddItemForm;