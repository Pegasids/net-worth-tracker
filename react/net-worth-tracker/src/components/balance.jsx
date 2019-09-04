import React, { Component } from "react";

class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.balance.id,
      category: this.props.balance.category,
      description: this.props.balance.description,
      value: this.props.balance.value
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value }, () => {
      this.props.onUpdate(this.state);
    });
  };

  handleValueChange = event => {
    this.setState({ value: Number(event.target.value) }, () => {
      this.props.onUpdate(this.state);
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.props.onDelete(this.props.balance.id)}>
          Delete
        </button>
        <input
          value={this.state.description}
          onChange={e => this.handleDescriptionChange(e)}
        />
        <input
          value={this.state.value}
          onChange={e => this.handleValueChange(e)}
          type="number"
          step="0.01"
          min="0"
        />
      </div>
    );
  }
}

export default Balance;
