import React, { Component } from 'react';

import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

// import './App.css';

import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false,

  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      id: uuid(),
      item: '',
      editItem: false,

    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items:filteredItems
    })
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItems = this.state.items.find(item => item.id === id);
    this.setState({
      items:filteredItems,
      item:selectedItems.title,
      id:id,
      editItem:true
    })
  }

  render() {
    return (

      <div class="container">
        <div class="row">
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <h3 className='text-capitalize text-center'>to do input</h3>
            <TodoInput
              item={this.state.item} handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} editItem={this.editItem} />
            <TodoList
              items={this.state.items} handleDelete={this.handleDelete}
              handleEdit={this.handleEdit} clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
