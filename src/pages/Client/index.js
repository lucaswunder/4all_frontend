import React from 'react';

import { Container } from './styles';

const Client = ({ client }) => {
  const {
    name, cpf, fone, balance,
  } = client.data;
  return (
    <Container className="card">
      <header className="card-header">
        <p className="card-header-title is-centered">Personal Info</p>
      </header>
      <div className="card-content">
        <form>
          <div className="content">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <p className="label">Name</p>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      disabled
                      className="input"
                      type="text"
                      placeholder="Name"
                      defaultValue={name}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-user" />
                    </span>
                  </p>
                </div>
                <div className="field-label is-normal">
                  <p className="label">CPF</p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right">
                    <input
                      disabled
                      defaultValue={cpf}
                      className="input is-success"
                      type="text"
                      placeholder="CPF"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-credit-card" />
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fa fa-check" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <p className="label">Balance</p>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      defaultValue={balance}
                      disabled
                      className="input"
                      type="text"
                      placeholder="Balance"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-user" />
                    </span>
                  </p>
                </div>
                <div className="field-label is-normal">
                  <p className="label">Fone</p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right">
                    <input
                      defaultValue={fone}
                      className="input is-success"
                      type="text"
                      placeholder="Fone"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-credit-card" />
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fa fa-check" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label" />
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-primary">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Client;
