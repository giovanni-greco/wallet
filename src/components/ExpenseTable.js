import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExpenseTable extends Component {
  render() {
    return (
      <header>
        <table>
          <thead>
            <tr>
              <th colSpan="1">Descrição</th>
              <th colSpan="1">Tag</th>
              <th colSpan="1">Método de pagamento</th>
              <th colSpan="1">Valor</th>
              <th colSpan="1">Moeda</th>
              <th colSpan="1">Câmbio utilizado</th>
              <th colSpan="1">Valor convertido</th>
              <th colSpan="1">Moeda de conversão</th>
              <th colSpan="1">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The table body</td>
              <td>with two columns</td>
              <td>The table body</td>
              <td>with two columns</td>
              <td>The table body</td>
              <td>with two columns</td>
              <td>The table body</td>
              <td>with two columns</td>
              <td>with two columns</td>
            </tr>
          </tbody>
        </table>
      </header>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
  currency: wallet.currencies,
});

export default connect(mapStateToProps, null)(ExpenseTable);
