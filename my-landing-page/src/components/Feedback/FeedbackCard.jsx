import './FeedbackCard.sass';

const FeedbackCard = ({ feedback }) => {
    return (
        <div className="feedback-card">
            <img src={`/src/assets/${feedback.img}`} height="400"alt={feedback.title} />
            <p>{feedback.description}</p>
            <div className="feedback-card__author-container">
                <img src={`/src/assets/${feedback.avatar}`} height="75" width="75" alt={feedback.author} />
                <div className="feedback-card__author">
                    <h3>{feedback.author}</h3>
                    <p>{feedback.company}</p>
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard;