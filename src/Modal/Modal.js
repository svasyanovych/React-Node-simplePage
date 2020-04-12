/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable space-before-blocks */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    state = {
      isOpen: false,
    }

    render(){
      return (
            <React.Fragment>
                <button onClick={() => this.setState({ isOpen: true })} className="modal-btn">Open modal</button>

                {this.state.isOpen && (
                    <div className="modal">
                        <div className="modal-body">
                            <h1>Modal title</h1>
                            <p>I am modal</p>
                            <button onClick={() => this.setState({ isOpen: false })}>Close modal</button>
                        </div>
                    </div>
                )}

            </React.Fragment>
      );
    }
}
