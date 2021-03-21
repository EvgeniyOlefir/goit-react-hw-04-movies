import React, { Component } from 'react';
import { toast } from 'react-toastify';

class SearchForm extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    if (value.trim() === '') {
      toast('Напишите название фильма');
      return;
    }

    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="query"
            value={value}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
