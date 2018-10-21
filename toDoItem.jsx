import React, { Component } from 'react';

class ToDoItem extends Component {
    constructor(props){
        super(props);
        this.state = {description: '',date: '', todos: []}
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
  handleDelete = (index1) => {
      const newTodos = this.state.todos.filter((todo,i) => i !== index1) 
      this.setState({todos: newTodos})

  }

    render() {
        return (
            <div className="App">
            <div className="App-header">
              <h2>Simple Todolist</h2>
            </div>
            <div>
              <form onSubmit={this.addTodo}>
              Description:
    
                <input type="text" name = "description" onChange={this.inputChanged} value={this.state.description}/>
                Date:
    
                <input type="text" name = "date" onChange={this.inputChanged} value={this.state.date}/>
                <input type="submit" value="Add"/>
              </form>
            </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((item,index) =>     
                        <tr key = {index}>
                            <td>{item.date}</td>
                            <td>{item.description}</td>
                            <td><button onClick = {() => this.handleDelete(index)} 
                            type="button" 
                            className="btn btn-danger m-2 sm-2">Delete</button>
                            </td>
                        </tr>
                            )}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default ToDoItem;