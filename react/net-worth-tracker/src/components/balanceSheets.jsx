import React, { Component } from "react";
import BalanceSheet from "./balanceSheet";

class BalanceSheets extends Component {
  render() {
    const numOfCategories = this.props.categories.length;
    var itemsGroupByCategories = [];

    for (let i = 0; i < numOfCategories; i++) {
      itemsGroupByCategories.push(
        this.props.items.filter(
          item => item.category === this.props.categories[i]
        )
      );
    }

    return (
      <div>
        {itemsGroupByCategories.map((balanceSheet, index) => (
          <BalanceSheet
            key={this.props.categories[index]}
            header={this.props.categories[index]}
            balanceSheet={balanceSheet}
            onAdd={this.props.onAdd}
            onUpdate={this.props.onUpdate}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default BalanceSheets;
