// Write your React code here.
import {Component} from 'react'
import FeedbackEmojis from '../FeedbackEmojis'
import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  buttonClicked = () => {
    // const {isClicked} = this.state
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    console.log(isClicked)
    const {resources} = this.props
    const {loveEmojiUrl, emojis} = resources

    return (
      <div className="feedback-bg-container">
        <div className="feedback-card">
          {isClicked ? (
            <div className="thank-you-container">
              <img src={loveEmojiUrl} alt="love emoji" className="love-image" />
              <h1>Thank You!</h1>
              <p>
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          ) : (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emoji-container">
                {emojis.map(eachEmoji => (
                  <FeedbackEmojis
                    emoji={eachEmoji}
                    key={eachEmoji.id}
                    buttonClicked={this.buttonClicked}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
