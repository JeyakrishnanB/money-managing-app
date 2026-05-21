import './index.css'

const MoneyDetails = props => {
  const {balanceamount, incomeamount, expensesamount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-image"
        />

        <div>
          <p>Your Balance</p>

          <p data-testid="balanceAmount">Rs {balanceamount}</p>
        </div>
      </div>

      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-image"
        />

        <div>
          <p>Your Income</p>

          <p data-testid="incomeAmount">Rs {incomeamount}</p>
        </div>
      </div>

      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-image"
        />

        <div>
          <p>Your Expenses</p>

          <p data-testid="expensesAmount">Rs {expensesamount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
