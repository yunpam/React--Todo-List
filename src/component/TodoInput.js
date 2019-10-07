import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {handleChange, handleSubmit, item, editItem} = this.props;
        return (
            <div className='card card-body my-3'>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <div className='input-group-text bg-primary text-white'>
                                <i className='fas fa-book'/>
                            </div>
                        </div>
                        <input type='text' className='form-control text-capitalize' placeholder='add to do item' value={item} onChange={handleChange}/>
                    </div>
                    
                    <button type="submit" class="btn  btn-block btn-primary my-2">Add Item</button>
                    
                </form>
            </div>
        )
    }
}
