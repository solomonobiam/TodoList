import React, { Component } from 'react'

export default class Inputs extends Component {

    render() {
       const {item, handleChange, handleSubmit, editItem} = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                     <div className="input-group-text bg-success text-white">
                        <i className="fas fa-book"></i>
                 </div>
                     </div>
                     <input type="text"  placeholder="Enter Item" className="form-control text-capitalize" 
                     value={item} onChange={handleChange}/>
                </div>
                <button type="submit" className={editItem ? "btn btn-block btn-warning my-3": "btn btn-block btn-success my-3"}>
                    {editItem ? 'Edit': 'Add'}</button>
                </form>
            </div>
        )
    }
}
