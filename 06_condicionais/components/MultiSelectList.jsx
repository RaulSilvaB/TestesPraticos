import { useState } from "react";

const MultiSelectList = () => {
  const [items, setItems] = useState([
    { id: 1, name: "item 1", isSelected: false },
    { id: 2, name: "item 2", isSelected: true },
    { id: 3, name: "item 3", isSelected: false },
  ]);

  const selectedCount = items.filter((item) => item.isSelected).length;

  function handleItemClick(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item,
      ),
    );
  }
  function handleSelectedAll() {
    setItems(items.map((item) => ({ ...item, isSelected: true })));
  }
  function handleRemovedAll() {
    setItems(items.map((item) => ({ ...item, isSelected: false })));
  }

  return (
    <div>
      <button onClick={handleSelectedAll}>Selecionar Todos</button>
      <button onClick={handleRemovedAll}>Desmarcar Todos</button>
      <p>{selectedCount} item(s) selecionados</p>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{ background: item.isSelected ? "lightgreen" : "none" }}
            onClick={() => handleItemClick(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelectList;
