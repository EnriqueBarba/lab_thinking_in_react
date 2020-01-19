import React from "react";
import SerachBar from "./SerachBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {

  state = {
      filterText: '',
      inStockOnly: false
  }

handleChanges = (e) => {
    const name = e.target.name
    const value = e.target.type ==="checkbox" ? e.target.checked : e.target.value
    this.setState({
        ...this.props,
        [name]:value
    })
}

  render() {
      return (
          <div>
          <SerachBar 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            handleChanges={this.handleChanges}
          />
          <ProductTable 
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      )
  } 

}

export default FilterableProductTable