import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: '',date: '', todos: []
        }
    }
    inputChanged = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }

  addTodo = (event) => {
    event.preventDefault();
       const newList ={description: this.state.description, date : this.state.date};

    this.setState({
      todos: [...this.state.todos,newList]
    });
  }
  handleDelete = (index) => {
      console.log(index) // this is written just to check the basic plumbing is working
      const newTodos = this.state.todos.filter((todo,i) => i !== index) 
      this.setState({todos: newTodos})

  }
    render() {
        const columns = [{
            Header: 'Date',  // Header of the column  
            accessor: 'date' // Value accessor
           }, {
            Header: 'Description',
            accessor: 'description',
           }, {
            id: 'button',
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'full_name',
            Cell: ({index}) => (<button className="btn btn-danger sm" onClick= {() => {this.handleDelete(index)}}>Delete</button>)
        }]
        return ( <div className="App">
                <div className="App-header">
                  <h2>Simple Todolist</h2>
                </div>
                <div>
                  <form onSubmit={this.addTodo}>
                  Description:
        
                    <input type="text" name = "description" 
                    onChange={this.inputChanged} value={this.state.description}/>
                    Date:
                    <input type="text" name = "date" 
                    onChange={this.inputChanged} value={this.state.date}/>
                    <input type="submit" value="Add"/>
                  </form>
                </div>
                <ReactTable data = {this.state.todos} columns = {columns} sortable={true} defaultPageSize={5}/>
            </div>
            );
    }
}

export default App;
