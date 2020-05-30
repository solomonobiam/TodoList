import React, { Component } from 'react';
import Process from './Process';


export default class Output extends Component {
    
    render() {
       const {items, clearItems, handleDelete, handleEdit} =this.props
        return (
            <div>    
                <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">List Item</h3>
                {
                    items.map(item =>{
                        return  <Process key={item.id} title={item.title} 
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={() => handleEdit(item.id)}/>
                    })
                }
                <button type="button" className="btn btn-block bg-success text-capitalize text-white lead mt-5"
                onClick={clearItems}>Clear List Item</button>
                </ul> 
            </div>
        )
    }
}
