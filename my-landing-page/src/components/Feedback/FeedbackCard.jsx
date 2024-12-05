import './FeedbackCard.sass';
import StarRating from './StarRating';

const FeedbackCard = ({ feedback }) => {
    return (
        <div className="feedback-card">
            <StarRating rating={feedback.rating} />
            <p className='feedback-card__description'>{feedback.description}</p>
            <div className="feedback-card__author-container">
                <img src={`/src/assets/${feedback.avatar}`} height="75" width="75" alt={feedback.author} />
                <div className="feedback-card__author">
                    <p className='feedback-card__author-name'>{feedback.author}</p>
                    <p className='feedback-card__author-company'>{feedback.company}</p>
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard;