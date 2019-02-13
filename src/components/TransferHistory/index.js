import React, { Component } from 'react';

import moment from 'moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TransfersActions from '~/store/ducks/transfers';

import { Footer, Container } from './styles';

class TransferHistory extends Component {
  state = {
    op: 'SEND',
  };

  async componentDidMount() {
    const { getTransfersRequest, setOption } = this.props;
    const { op } = this.state;

    setOption(op);

    getTransfersRequest();
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   const { options, getTransfersRequest } = this.props;

  //   if (prevProps.options !== options) {
  //     getTransfersRequest();
  //   }
  // }

  handleSelectChange = (e) => {
    const { getTransfersRequest, setOption } = this.props;

    this.setState({ op: e.target.value });

    setOption(e.target.value);
    getTransfersRequest();
  };

  render() {
    const { history } = this.props;
    const { op } = this.state;
    return (
      <Container className="card">
        <header className="card-header">
          <div className="card-header-title is-centered ">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <p className="label">Transfers </p>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select value={op} onChange={this.handleSelectChange}>
                        <option value="SEND">Send</option>
                        <option value="RECEIVED">Received</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="card-table">
          <div className="content">
            <table className="table is-fullwidth is-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {history.map(row => (
                  <tr key={row.id}>
                    <td width="45%">
                      <small>
                        {op === 'RECEIVED' ? row['clientOrigin.name'] : row['clientReceived.name']}
                      </small>
                    </td>
                    <td>
                      <small>{row.amount}</small>
                    </td>
                    <td>
                      <small>{moment(row.createdAt).format("DD-MM-YYYY HH:mm")}</small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <footer className="card-footer">
          <Footer>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <p className="label">Date Range</p>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input className="input is-small" type="date" placeholder="Name" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-calendar" />
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input className="input is-small is-success" type="date" placeholder="Email" />
                    <span className="icon is-normal is-left">
                      <i className="fa fa-calendar" />
                    </span>
                  </p>
                </div>
                <div className="control">
                  <button type="submit" className="button is-primary">
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </Footer>
        </footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  history: state.transfers.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(TransfersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransferHistory);
