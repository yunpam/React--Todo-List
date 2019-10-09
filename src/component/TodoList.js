import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        const {items, handleDelete, handleEdit,clearList}= this.props
        return (
            <ul className='list-group my-5 '>
                <h3 className='text-capitalize text-center'>To Do List</h3>
                {
                    items.map(item=>{
                        return (<TodoItem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)}/>)
                    })
                }
                <button type='button' className='btn btn-danger btn-block text-uppercase mt-5' onClick={clearList}>Clear List</button>
            </ul>
        )
    }
}
