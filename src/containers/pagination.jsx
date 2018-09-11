import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Pagination extends Component {
  render() {
    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              <FontAwesomeIcon icon="angle-double-left" />
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <FontAwesomeIcon icon="angle-double-right" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
