import React, { Component } from 'react';
import Inputs from './components/Inputs';
import Output from './components/Output';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuid} from 'uuid';

export default class Main extends Component {

    constructor(){
        super ();
        this.state = {
            items:[],
            id: uuid(),
            item: '',
            editItem: false
        };
    }
    handleChange = (e)=>{
        this.setState({
          item: e.target.value 
        });
      };

      handleSubmit = (e) =>{
          e.preventDefault()
          const newItem ={
            id:this.state.id,
            title:this.state.item
          };
          const updatedItems = [...this.state.items, newItem];
      
          this.setState({
            items: updatedItems,
            item: "",
            id: uuid(),
            editItem: false
          })
      }

      clearItems = () =>{
          this.setState({
              items: []
          })
      }

      handleDelete = (id) =>{
          const filterItems = this.state.items.filter(item => item.id !== id)
          this.setState({
              items:filterItems
          })
      }

      handleEdit =(id) =>{
        const filterItems = this.state.items.filter(item => item.id !== id)
        const selectedItem = this.state.items.find(item => item.id === id)

        this.setState({
            items:filterItems,
            item:selectedItem.title,
            editItem: true,
            id: id
        })
      }

      
    render() {
        return (
                <div className="container">
                     <div className="row">
                     <div className="col-10 mx-auto col-md-8 mt-4">
                     <h3 className="text-capitalize text-center">Todo List App</h3>
                     <Inputs item={this.state.item} handleChange={this.handleChange} 
                     handleSubmit={this.handleSubmit} editItem={this.editItem}/>
                     <Output items={this.state.items} clearItems={this.clearItems} 
                     handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
                     </div>
                     </div>
                </div>
        )
    }
}
