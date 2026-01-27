import React from "react";

const NestedListComponent = () => {
  const list = [
    ["item1.1", "item1.2", "item1.3"],
    ["item2.1", "item2.2", "item2.3"],
    ["item3.1", "item3.2", "item3.3"],
  ];

  return (
    <ul>
      {list.map((subList, index) => (
        <li key={index}>
          <ul>
            {subList.map((item, subIndex) => (
              <li key={subIndex}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default NestedListComponent;
