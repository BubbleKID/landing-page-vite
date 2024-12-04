import feedbacks from '../../config/feedbacks';
import FeedbackCard from './FeedbackCard';
import './Feedback.sass';
const Feedback = () => {
    return (
        <div className="feedback">
            <h2>
                <p>Client Feedback</p>
                <h1>Customer testimonials</h1>
            </h2>
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