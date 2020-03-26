import React from 'react'
import  "./todo-list-items.scss"
// const TodoListItem = (props) => {
//     return (<span>{props.label}</span>);
// }

// либо через деструктуризацию обьекта, как в коде ниже


class TodoListItem extends React.Component {
  // constructor() {
  //   super();
  //    this.state = {
  //      done: false,
  //      important: false
  //   };
  //   this.onLabelClick = () => {
  //     this.setState((state) => {
  //       return {
  //         done: !state.done
  //       };
  //     });
  //   };
  //      this.onMarkImportant = () => {
  //        this.setState((state) => {
  //          return {
  //            important: !state.important
  //          };
  //        });
  //   };
   
  // }
  render() {
    const { label, onDeleted, onToggleDone, onToggleImportant, important, done } = this.props;
    // const { done, important  } = this.state;
    let classNames = "todo-list-item"
    if (done) {
      classNames += " done";
    };
    if (important) {
      classNames += " important";
    };





    return (
      <div className="col-lg-12 col-md-12 col-sm-12 ">
      <div className={classNames}>
        <span
          className="todo-list-item-label "
          onClick={onToggleDone}>{label}
        </span>
         <button type="button"
          className="btn btn-dark btn-sm  " onClick={onDeleted}>X
        </button>
        <button type="button"
          className="btn btn-outline-dark btn-sm  " onClick={onToggleImportant}>!
        </button>

    
        </div>
        </div>
      
    );
  }
};



export default TodoListItem;