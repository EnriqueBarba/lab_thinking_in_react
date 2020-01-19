import React from "react";

const SerachBar = (props) => {

  const handleChanges = (e) => props.handleChanges(e)
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  return (
      <form>
        <input 
          type="text"
          name="filterText" 
          placeholder="Search..." 
          onChange={handleChanges}
          value={filterText}
          />
        <p>
          <input 
            name="inStockOnly"
            onChange={handleChanges}
            type="checkbox" 
            checked={inStockOnly}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
}

export default SerachBar