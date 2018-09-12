import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let SearchBar = props => {
  const { handleSubmit, handleReset } = props;
  return (
    <div className="row mt-2">
      <div className="col-12">
        <div className="card">
          <div className="row justify-content-center mt-2">
            <div className="col-3">
              <form onSubmit={handleSubmit} onReset={handleReset}>
                <div className="row form-group">
                  <Field
                    type="search"
                    name="searchQuery"
                    component="input"
                    className="form-control col-9"
                    placeholder="Last Name.."
                  />
                  <button
                    className="btn btn-sm btn-info ml-2"
                    title="search"
                    type="submit"
                  >
                    <FontAwesomeIcon icon="search" />
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
