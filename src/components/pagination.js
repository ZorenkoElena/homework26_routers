import React from 'react';

const Pagination = (props) => {
  return (
    <React.Fragment>
      <button
        disabled={!props.data.prev}
        type="button"
        className="btn btn-outline-dark m-2"
        onClick={() => {
          props.setPage(props.page - 1);
        }}
      >
        Previos
      </button>
      <button
        disabled={!props.data.next}
        type="button"
        className="btn btn-outline-dark m-2"
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        Next
      </button>
    </React.Fragment>
  );
};

export default Pagination;
