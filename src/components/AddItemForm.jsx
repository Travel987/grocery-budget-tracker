import { useState } from "react";

function AddItemForm({ addItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Produce");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !price || !quantity) {
      setError("Please enter item name, quantity, and price.");
      return;
    }

    if (Number(quantity) <= 0) {
      setError("Quantity must be greater than 0.");
      return;
    }

    if (Number(price) <= 0) {
      setError("Price must be greater than 0.");
      return;
    }

    const newItem = {
      id: Date.now(),
      name: name.trim(),
      quantity: Number(quantity),
      price: parseFloat(price),
      category,
    };

    addItem(newItem);

    setName("");
    setQuantity(1);
    setPrice("");
    setCategory("Produce");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <span>Add Item</span>

        {error && <p className="error-text">{error}</p>}

        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          min="1"
          step="1"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Price per unit"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Pantry">Pantry</option>
          <option value="Snacks">Snacks</option>
          <option value="Drinks">Drinks</option>
          <option value="Frozen">Frozen</option>
        </select>

        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

export default AddItemForm;