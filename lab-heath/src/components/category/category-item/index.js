import React from 'react';
import {connect} from 'react-redux';
import ImputForm from '../category-form/index';
import { renderIf } from '../../../lib/untils';
import {categoryDelete, categoryUpdate} from '../../../actions/category-actions';
import category from '../../../reducers/category';
import CategoryForm from '../category-form/index';


class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: this.props.category.title ? this.props.category.title : '',
      content: this.props.category.value ? this.props.category.value : '',
      updating: false,

    };

    let memberFunctions = Object.getOwnPropertyNames(CategoryItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleDelete() {
    this.props.CategoryDelete(this.props.category);
  }

  handleUpdate(category) {
    this.props.CategoryUpdate(category);
    this.setState({updating: false});
  }

  render(){
    return(
      <div onDoubleClick={() => this.setState({updating: !this.state.updating})}>
        <h2>{this.props.category.title}</h2>
        <h4>{this.props.category.value}</h4>
        <button
          className='delete_btn'
          type='button'
          value={this.props.category._id}
          onClick={this.handleDelete}
        >delete</button>
        {renderIf(this.state.updating === true,
          <CategoryForm 
            category={this.props.category}
            buttonText='update'
            onComplete={this.handleUpdate} />
        )}

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  CategoryDelete: category => dispatch(categoryDelete(category)),
  CategoryUpdate: category => dispatch(categoryUpdate(category)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);
