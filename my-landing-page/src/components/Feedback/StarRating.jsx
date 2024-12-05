import './StarRating.sass';
import Star from '../../assets/star.svg';

const StarRating = ({ rating }) => {
    // Ensure rating is within 0-5 range and handle invalid inputs
    const normalizedRating = Math.max(0, Math.min(5, Number(rating) || 0));
    const fullStars = Math.floor(normalizedRating);
    const hasHalfStar = normalizedRating % 1 >= 0.5;

    return (
        <div className="star-rating" role="img" aria-label={`Rating: ${normalizedRating} stars`}>
            {[...Array(5)].map((_, index) => (
                <img 
                    key={index}
                    src={Star} 
                    alt=""
                    className={index < fullStars ? 'star' : 
                             (index === fullStars && hasHalfStar) ? 'star half' : 
                             'star empty'}
                />
            ))}
        </div>
    );
};

export default StarRating;