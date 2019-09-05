import React, { Component } from "react";
import BalanceSheets from "./balanceSheets";
import { getService } from "../services/dataService";
import { Dropdown, DropdownButton } from "react-bootstrap";

class NetWorthTemplate extends Component {
  constructor(props) {
    super(props);
    this.currencyUrl = "/api/currency";
    this.state = {
      id: "",
      currency: ""
    };
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  componentDidMount() {
    const promiseCurrencyData = getService(this.currencyUrl);
    promiseCurrencyData.then(response => {
      this.setState({
        id: response[0].id,
        currency: response[0].currency
      });
    });
  }

  handleCurrencyChange = newCurrency => {
    let prevCurrency = this.state.currency;
    if (newCurrency !== prevCurrency) {
      this.setState({ currency: newCurrency }, () => {
        this.props.onCurrencyChange(this.state, prevCurrency);
      });
    }
  };

  render() {
    return (
      <div>
        <h3>Tracking your Net Worth</h3>
        <DropdownButton title={this.state.currency} size="sm" variant="">
          <Dropdown.Item onClick={() => this.handleCurrencyChange("CAD")}>
            CAD
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.handleCurrencyChange("USD")}>
            USD
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.handleCurrencyChange("EUR")}>
            EUR
          </Dropdown.Item>
        </DropdownButton>
        <hr />
        Net Worth ${this.props.totalNetWorth}
        <hr />
        Assets
        <br />
        <BalanceSheets
          items={this.props.assets}
          onAdd={this.props.onAddAsset}
          onUpdate={this.props.onUpdateAsset}
          onDelete={this.props.onDeleteAsset}
          categories={this.props.assetCategories}
        />
        Total Assets ${this.props.totalAssets}
        <hr />
        Liabilities
        <br />
        <BalanceSheets
          items={this.props.liabilities}
          onAdd={this.props.onAddLiability}
          onUpdate={this.props.onUpdateLiability}
          onDelete={this.props.onDeleteLiability}
          categories={this.props.liabilityCategories}
        />
        Total Liabilities ${this.props.totalLiabilities}
        <hr />
      </div>
    );
  }
}

export default NetWorthTemplate;
