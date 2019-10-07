import React, { Component } from 'react';

import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

// import './App.css';

import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    items: [
      { id: 1, title: 'wake up' },
      { id: 2, title: 'make breakfast' }
    ],
    id: uuid(),
    item: '',
    editItem: false,

  }

  handleChange = (e) => {
    this.setState({
      item:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items:updatedItems,
      id:uuid(),
      item:'',
      editItem: false,

    })
  }

  clearList = () => {

  }

  handleDelete = (id) => {

  }

  handleEdit = (id) => {

  }

  render() {
    return (

      <div class="container">
        <div class="row">
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <h3 className='text-capitalize text-center'>to do input</h3>
            <TodoInput 
            item={this.state.item}  handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} editItem={this.editItem} />
            <TodoList 
            items={this.state.items} handleDelete={this.handleDelete}
            handleEdit = {this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
