import React from 'react';
import  "./todo-search.scss"
class ToDoSearch extends React.Component {
    
    constructor() {
        super();
 this.state = {
        term: ""
    };
    };
    
   
    
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };
    render() {
        return (
            <div className="col-lg-8 col-md-6 col-sm-4 mb-3 mt-2">
            <input type="text" className="form-control search-input" placeholder="Search..."
                value={this.state.term}
                    onChange={this.onSearchChange} />
                </div>
        );
}

    
}

export default ToDoSearch;
