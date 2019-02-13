import React, { Component } from 'react';

import moment from 'moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CardActions from '~/store/ducks/card';

import Modal from '../Modal';

import { Container } from './styles';

class CreditCardList extends Component {
  state = {
    showModal: false,
    selectedId: '',
    selectedNumber: '',
  };

  async componentDidMount() {
    const { getCardRequest } = this.props;

    getCardRequest();
  }

  handleDelete = (id, number) => {
    this.setState({ selectedId: id, selectedNumber: number, showModal: true });
  };

  handleEdit = (id, cardNumber) => {
    const { handleSelectedCard } = this.props;
    handleSelectedCard(id, cardNumber);
  };

  handleModalClose = () => {
    this.setState({ showModal: false, selectedId: '', selectedNumber: '' });
  };

  confirmDelete = () => {
    const { deleteCardRequest } = this.props;
    const { selectedId } = this.state;

    deleteCardRequest(selectedId);

    this.setState({ showModal: false, selectedId: '', selectedNumber: '' });
  };

  render() {
    const { cards } = this.props;
    const { showModal, selectedNumber } = this.state;
    return (
      <Container className="card">
        <header className="card-header">
          <div className="card-header-title is-centered ">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <p className="label">Credit Cards </p>
              </div>
            </div>
          </div>
        </header>
        <div className="card-table">
          <div className="content">
            <table className="table is-fullwidth is-striped">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Date</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {cards.map(card => (
                  <tr key={card.id}>
                    <td>
                      <small>{card.cardNumber}</small>
                    </td>
                    <td>
                      <small>{moment(card.createdAt).format('DD-MM-YYYY HH:mm')}</small>
                    </td>
                    <td>
                      <div className="buttons has-addons">
                        <button
                          onClick={() => this.handleEdit(card.id, card.cardNumber)}
                          type="button"
                          className="button is-success is-selected"
                        >
                          <span className="icon ">
                            <i className="fa fa-pencil" />
                          </span>
                        </button>
                        <button
                          onClick={() => this.handleDelete(card.id, card.cardNumber)}
                          type="button"
                          className="button is-danger "
                        >
                          <span className="icon ">
                            <i className="fa fa-trash-o" />
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {showModal && (
          <Modal>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Credit Card</p>
              </header>
              <section className="modal-card-body">Remove card number {selectedNumber}?</section>
              <footer className="modal-card-foot">
                <button
                  onClick={() => this.confirmDelete()}
                  type="button"
                  className="button is-danger"
                >
                  YES
                </button>
                <button onClick={() => this.handleModalClose()} type="button" className="button">
                  Cancel
                </button>
              </footer>
            </div>
          </Modal>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.card.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(CardActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreditCardList);
