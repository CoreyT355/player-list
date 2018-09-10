import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SearchBar = props => {
  const { handleSubmit } = props;
  return (
    <div className="row mt-2">
      <div className="col-12">
        <div className="card">
          <div className="row justify-content-center mt-2">
            <div className="col-6">
              <form onSubmit={handleSubmit}>
                <div className="row form-group">
                  <Field
                    type="text"
                    name="searchQuery"
                    component="input"
                    className="form-control col-8"
                    placeholder="Last Name.."
                  />
                  <button className="btn btn-sm btn-primary ml-2" type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchBar = reduxForm({
  form: 'search'
})(SearchBar);

export default SearchBar;
