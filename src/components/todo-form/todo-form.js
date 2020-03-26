import React from 'react';
import './todo-form.scss';


class ItemAddForm extends React.Component {
    state = {
        label: ""
    };
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ""
        });
    };
    render() {
        return (
            <div className="col-lg-8 col-md-8 col-sm-8 text-center mt-3" >
            <form className="item-add-form"
            onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control text-center mt-2 mb-2"
                    onChange={this.onLabelChange}
                    placeholder="Add to do"
                    value={this.state.label}/>
                <button type="submit"
                    className="btn btn-dark "
                >Add</button>
                </form>
                </div>
       )
   }
};




export default ItemAddForm;