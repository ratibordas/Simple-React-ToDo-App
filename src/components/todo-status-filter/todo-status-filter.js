import React from 'react';

import './todo-status-filter.scss';

class ToDoStatusFilter extends React.Component {
   
        buttons = [
                { name: "all", label: "All" },
                { name: "active", label: "Active" },
                {name: "done", label: "Done"},
        ];
   
   
   
        render() {
                const { filter, onFilterChange } = this.props;
                const buttons = this.buttons.map(({ name, label }) => {
                        const isActive = filter === name;
                        const clazz = isActive ? "btn-dark" : "btn-outline-dark";
return  <button type="button"
        className={`btn btn-sm ${clazz}`} key={name}
         onClick={() => onFilterChange(name)}>{label}</button>
                });
return (
    <div className="col-lg-2 col-md-2 col-sm-2 mt-1">
        <div className="btn-group">
      {buttons}
                </div>
                </div>
  );       
    };
};


export default ToDoStatusFilter;