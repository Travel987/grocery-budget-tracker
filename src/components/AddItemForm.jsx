import { useState } from "react";

function AddItemForm({ addItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !price || Number(price) <= 0) {
      alert("Please enter a valid item and price");
      return;
    }

    const newItem = {
      id: Date.now(),
      name: name,
      price: Number(price),
    };

    addItem(newItem);

    setName("");
    setPrice("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Item</h2>

      <div className="form-row">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />

        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

export default AddItemForm;
