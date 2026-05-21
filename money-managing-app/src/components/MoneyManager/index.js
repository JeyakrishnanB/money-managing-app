import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state

    const transactionType = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: transactionType.displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    const {transactionList} = this.state

    const updatedList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({
      transactionList: updatedList,
    })
  }

  getIncomeAmount = () => {
    const {transactionList} = this.state

    let income = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === 'Income') {
        income += eachTransaction.amount
      }
    })

    return income
  }

  getExpensesAmount = () => {
    const {transactionList} = this.state

    let expenses = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === 'Expenses') {
        expenses += eachTransaction.amount
      }
    })

    return expenses
  }

  getBalanceAmount = () => {
    const income = this.getIncomeAmount()

    const expenses = this.getExpensesAmount()

    return income - expenses
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state

    const balanceamount = this.getBalanceAmount()

    const incomeamount = this.getIncomeAmount()

    const expensesamount = this.getExpensesAmount()

    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="top-container">
            <h1>Hi, Richard</h1>

            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            balanceamount={balanceamount}
            incomeamount={incomeamount}
            expensesamount={expensesamount}
          />

          <div className="bottom-container">
            <form className="transaction-form" onSubmit={this.addTransaction}>
              <h1>Add Transaction</h1>

              <label htmlFor="title">TITLE</label>

              <input
                id="title"
                type="text"
                placeholder="TITLE"
                value={titleInput}
                onChange={this.onChangeTitle}
              />

              <label htmlFor="amount">AMOUNT</label>

              <input
                id="amount"
                type="text"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={this.onChangeAmount}
              />

              <label htmlFor="type">TYPE</label>

              <select id="type" value={optionId} onChange={this.onChangeOption}>
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>

              <button type="submit">Add</button>
            </form>

            <div className="history-container">
              <h1>History</h1>

              <ul className="transaction-table">
                <li className="table-header">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </li>

                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
