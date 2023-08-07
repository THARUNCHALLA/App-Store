import './index.css'

const TabItem = props => {
  const {user, tharun, isActive} = props
  const {displayText, tabId} = user
  const ans = isActive ? `btn-primary` : null
  const hara = () => {
    tharun(tabId)
  }
  return (
    <li className="list1">
      <button className={`head ${ans}`} onClick={hara} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
