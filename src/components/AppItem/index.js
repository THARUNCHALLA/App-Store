import './index.css'

const AppItem = props => {
  const {user1} = props
  const {appName, imageUrl} = user1
  return (
    <li className="list12">
      <img src={imageUrl} alt={appName} className="image2" />
      <p className="heading12">{appName}</p>
    </li>
  )
}

export default AppItem
