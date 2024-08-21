import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  // define handleClick outside the map function
  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      // use handleClick function as inline
      <div key={item.id} onClick={() => handleClick(index)}>
        <div>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return renderedItems;
}

export default Accordion;
