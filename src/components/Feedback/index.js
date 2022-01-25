import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedbackGiven: false}

  onClickEmoji = () => {
    this.setState(prevState =>
      prevState.feedbackGiven ? {feedbackGiven: false} : {feedbackGiven: true},
    )
  }

  render() {
    const {feedbackGiven} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {feedbackGiven ? (
          <div className="card love-emoji-container">
            <div>
              <img className="emoji" src={loveEmojiUrl} alt="love emoji" />
            </div>
            <h1 className="heading">Thank You!</h1>
            <p className="emoji-name">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="card">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachEmoji => (
                <li key={eachEmoji.id} className="emoji-container">
                  <img
                    onClick={this.onClickEmoji}
                    className="emoji"
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                  />
                  <p className="emoji-name">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
