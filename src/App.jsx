import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Main app component managing grocery budget and items

function App() {
  const [budget, setBudget] = useState(0);
  const [items, setItems] = useState([]);

function resetAll() {
  const confirmReset = window.confirm("Are you sure you want to reset everything?");
  if (!confirmReset) return;

  setItems([]);
  setBudget(0);
}

const totalSpent = items.reduce(
  (total, item) => total + Number(item.price) * Number(item.quantity),
  0
);

// Calculates total spending
  const remaining = budget - totalSpent;

  function addItem(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }

// Calculates remaining budget

  function deleteItem(id) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              addItem={addItem}
              deleteItem={deleteItem}
              budget={budget}
              setBudget={setBudget}
              totalSpent={totalSpent}
              remaining={remaining}
               resetAll={resetAll}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}


export default App;