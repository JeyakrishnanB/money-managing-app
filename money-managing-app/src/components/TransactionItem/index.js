import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props

  const {id, title, amount, type} = transactionDetails

  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p>{title}</p>

      <p>Rs {amount}</p>

      <p>{type}</p>

      <button type="button" data-testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
