import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

const ProducTable = (props) => {

  const rows = [];
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;
  let lastCategory = null;
        
  props.products.forEach((e,i) => {
    if ( (e.name.indexOf(filterText) === -1) || (inStockOnly && !e.stocked) ) {
      return;
    }

    if (e.category !== lastCategory) rows.push( <ProductCategoryRow category={e.category} key={e.category} /> );
    
    rows.push(<ProductRow product={e} key={i} />);
    lastCategory = e.category;
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  ); 
}

export default ProducTable