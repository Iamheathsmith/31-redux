import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../actions/category-actions';
import CategoryItem from '../category/category-item/index.js';
import CategoryForm from '../../components/category/category-form/index';

class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>Expense Tracker 2000!</h1>

        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate}/>

        {this.props.categories ?
          this.props.categories.map(category => 
            <div key={category._id}>
              <CategoryItem category={category}/>
            </div>)
          :
          undefined
        }

      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);