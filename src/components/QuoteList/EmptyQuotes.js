import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner, Image } from 'react-bootstrap';

const EmptyQuotes = ({ handleGetQuotes, loading }) => (
  <section>
    <div className="d-flex align-items-center justify-content-center">
      <Button
        id="list-quotes"
        className="text-capitalize mr-4"
        variant="outline-primary"
        size="lg"
        onClick={() => handleGetQuotes()}
      >
        List quotes
      </Button>
      {loading && (
        <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h4 className="my-5 text-center">No quotes to show up</h4>
      <Image src="/assets/empty.svg" width="300" fluid />
    </div>
  </section>
);

EmptyQuotes.propTypes = {
  handleGetQuotes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default EmptyQuotes;
