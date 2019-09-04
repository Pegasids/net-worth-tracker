import React, { Component } from "react";
import Balance from "./balance";

class BalanceSheet extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onAdd(this.props.header)}>Add</button>
        {this.props.header}
        {this.props.balanceSheet.map(balance => (
          <Balance
            key={balance.id}
            balance={balance}
            onUpdate={this.props.onUpdate}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default BalanceSheet;
