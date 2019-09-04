import React, { Component } from "react";
import NetWorthTemplate from "./netWorthTemplate";
import {
  getService,
  postService,
  putService,
  deleteService,
  putCurrencyService
} from "../services/dataService";
import { getRateService } from "../services/currencyService";
import uuid from "uuid";

class NetWorthTemplateContainer extends Component {
  constructor(props) {
    super(props);
    this.assetUrl = "/api/asset";
    this.liabilityUrl = "/api/liability";
    this.currencyUrl = "./api/currency";
    this.state = {
      assets: [],
      liabilities: [],
      assetCategories: ["Cash and Investments", "Long Term Assets"],
      liabilityCategories: ["Short Term Liabilities", "Long Term Debt"],
      totalAssets: 0,
      totalLiabilities: 0,
      totalNetWorth: 0
    };

    this.addAsset = this.addAsset.bind(this);
    this.addLiability = this.addLiability.bind(this);
    this.updateAsset = this.updateAsset.bind(this);
    this.updateLiability = this.updateLiability.bind(this);
    this.deleteAsset = this.deleteAsset.bind(this);
    this.deleteLiability = this.deleteLiability.bind(this);
    this.refreshTotals = this.refreshTotals.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
  }

  componentDidMount() {
    const promiseAssetData = getService(this.assetUrl);
    const promiseLiabilityData = getService(this.liabilityUrl);

    Promise.all([promiseAssetData, promiseLiabilityData]).then(response => {
      this.setState(
        {
          assets: response[0],
          liabilities: response[1]
        },
        () => {
          this.refreshTotals();
        }
      );
    });
  }

  addAsset(category) {
    const id = uuid.v1();
    let assets = [...this.state.assets];
    assets.push({
      id: id,
      description: "",
      value: 0,
      category: category
    });
    this.setState({ assets });
    postService(this.assetUrl, id, category);
  }

  addLiability(category) {
    const id = uuid.v1();
    let liabilities = [...this.state.liabilities];
    liabilities.push({
      id: id,
      description: "",
      value: 0,
      category: category
    });
    this.setState({ liabilities });
    postService(this.liabilityUrl, id, category);
  }

  updateAsset(item) {
    const assets = [...this.state.assets];
    const index = assets.findIndex(a => a.id === item.id);
    assets[index] = {
      ...assets[index],
      description: item.description,
      value: item.value
    };
    this.setState({ assets }, () => {
      this.refreshTotals();
    });
    putService(
      this.assetUrl,
      item.id,
      item.category,
      item.description,
      item.value
    );
  }

  updateLiability(item) {
    const liabilities = [...this.state.liabilities];
    const index = liabilities.findIndex(l => l.id === item.id);
    liabilities[index] = {
      ...liabilities[index],
      description: item.description,
      value: item.value
    };
    this.setState({ liabilities }, () => {
      this.refreshTotals();
    });
    putService(
      this.liabilityUrl,
      item.id,
      item.category,
      item.description,
      item.value
    );
  }

  deleteAsset(id) {
    const newAssets = this.state.assets.filter(a => a.id !== id);
    this.setState({ assets: newAssets }, () => {
      this.refreshTotals();
    });
    deleteService(this.assetUrl, id);
  }

  deleteLiability(id) {
    const newLiabilities = this.state.liabilities.filter(l => l.id !== id);
    this.setState({ liabilities: newLiabilities }, () => {
      this.refreshTotals();
    });
    deleteService(this.liabilityUrl, id);
  }

  refreshTotals() {
    let newTotalAssets = 0;
    for (let i = 0; i < this.state.assets.length; i++) {
      newTotalAssets += this.state.assets[i].value;
    }
    this.setState({ totalAssets: newTotalAssets });

    let newTotalLiabilities = 0;
    for (let i = 0; i < this.state.liabilities.length; i++) {
      newTotalLiabilities += this.state.liabilities[i].value;
    }
    this.setState({ totalLiabilities: newTotalLiabilities });
    this.setState({ totalNetWorth: newTotalAssets + newTotalLiabilities });
  }

  changeCurrency(state, prevCurrency) {
    //AJAX Call update Currency
    putCurrencyService(this.currencyUrl, state.id, state.currency);
    //fetch currency rate
    const promiseRateData = getRateService("EUR", state.currency);
    promiseRateData.then(response => {
      console.log(response.rates[state.currency]);
    });
  }

  render() {
    return (
      <div>
        <NetWorthTemplate
          totalNetWorth={this.state.totalNetWorth}
          totalAssets={this.state.totalAssets}
          totalLiabilities={this.state.totalLiabilities}
          assets={this.state.assets}
          liabilities={this.state.liabilities}
          onUpdateAsset={this.updateAsset}
          onUpdateLiability={this.updateLiability}
          onAddAsset={this.addAsset}
          onAddLiability={this.addLiability}
          onDeleteAsset={this.deleteAsset}
          onDeleteLiability={this.deleteLiability}
          onCurrencyChange={this.changeCurrency}
          assetCategories={this.state.assetCategories}
          liabilityCategories={this.state.liabilityCategories}
        />
      </div>
    );
  }
}

export default NetWorthTemplateContainer;
