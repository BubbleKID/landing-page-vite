import feedbacks from '../../config/feedbacks';
import FeedbackCard from './FeedbackCard';
import './Feedback.sass';
const Feedback = () => {
    return (
        <div className="feedback">
            <div className="feedback__title-container">
                <p className="feedback__subtitle">Client Feedback</p>
                <h1 className="feedback__title">Customer testimonials</h1>
            </div>
            <div className="feedback__cards">
                {
                    feedbacks.map((feedback) => (
                    <FeedbackCard key={feedback.title} feedback={feedback} />
                    ))
                }
            </div>
        </div>
    )
}

export default Feedback;