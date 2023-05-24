import './index.css'

const FeedbackEmojis = props => {
  const {emoji, buttonClicked} = props
  const {imageUrl, name} = emoji

  const onButtonClick = () => {
    buttonClicked()
  }
  return (
    <li>
      <button onClick={onButtonClick} className="button" type="button">
        <img className="emoji" src={imageUrl} alt={name} />
      </button>
    </li>
  )
}

export default FeedbackEmojis
