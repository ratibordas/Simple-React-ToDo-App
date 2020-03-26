import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/todo-list/todo-list.js";
import ToDoHeader from './components/todo-header/todo-header.jsx';
import ToDoSearch from "./components/todo-search/todo-search.js";
import ToDoStatusFilter from './components/todo-status-filter/todo-status-filter.js';
import ItemAddForm from './components/todo-form/todo-form.js';
import './bootstrap.css';
import "./index.scss";


class App extends React.Component  {
    maxID = 100;
   
    state = {
           todoData: [
            this.createToDoItem("Smoke weed instead learning")
            ],
        term: "",
        filter: "all"
    };
    
    createToDoItem(label) {
     return {
            label,
            important: false,
            done: false,
            id: this.maxID++
        };
    
    };
      
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const beforeArr = todoData.splice(0, idx);
            const afterArr = todoData.splice(idx + 1);
            const newArray = [...beforeArr, ...afterArr]
             return { todoData: newArray};
        });
    };
 addItem = (text) => {
     const newItem = this.createToDoItem(text);
    
     this.setState(({ todoData }) => {
       
             const newArray = [
                 ...todoData,
                 newItem
             ];
             return {
                 todoData: newArray
             };
         
    });
 };
    
    onToggleImportant = (id) => {
         this.setState(({todoData}) => {
             const idx = todoData.findIndex((el) => el.id === id);
             const oldItem = todoData[idx];
             const newItem = { ...oldItem, important: !oldItem.important };
             const newArray = [
                 ...todoData.splice(0, idx),
                 newItem,
                 ...todoData.splice(idx + 1)
             ];
             return {
                 todoData: newArray
             };
         }
           
         );
    };
     onToggleDone = (id) => {
         this.setState(({todoData}) => {
             const idx = todoData.findIndex((el) => el.id === id);
             const oldItem = todoData[idx];
             const newItem = { ...oldItem, done: !oldItem.done };
             const newArray2 = [
                 ...todoData.splice(0, idx),
                 newItem,
                 ...todoData.splice(idx + 1)
             ];
             return {
                 todoData: newArray2
             };
         }
           
         );
     };
    
    onSearchChange = (term) => {
        this.setState({ term });
    }

     onFilterChange = (filter) => {
        this.setState({ filter });
    }
    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        }
        );
    }

    filter(items, filter) {
        switch (filter) {
            case "all":
                return items;
             case "active":
                return items.filter((item) => !item.done);
            case "done":
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    render() {
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

   return (
       <section className="container font-weight-bold">
           <div className="row justify-content-center">
               
                   <ToDoHeader toDo={todoCount} done={doneCount} />
                   
           <ToDoStatusFilter filter={filter}
               onFilterChange={this.onFilterChange}/>
           <ToDoSearch onSearchChange={this.onSearchChange}/>
           <TodoList todos={visibleItems}
               onToggleImportant={this.onToggleImportant}
               onToggleDone={this.onToggleDone}
               onDeleted={this.deleteItem}
           />
               <ItemAddForm onItemAdded={this.addItem} />
               </div>
    </section>
    );
    };
    
    
    
 
};



ReactDOM.render(<App/>, document.getElementById("root"));





// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


// serviceWorker.unregister();
