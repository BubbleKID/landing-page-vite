import { useState } from 'react';
import './ContactForm.sass';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        topic: '',
        message: '',
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="contact-form">
            <div className="contact-form__header">
                <h2>Contact me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            <form onSubmit={handleSubmit}>
                <div className="contact-form__grid">
                    <div className="contact-form__field">
                        <label>First name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contact-form__field">
                        <label>Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="contact-form__grid">
                    <div className="contact-form__field">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contact-form__field">
                        <label>Phone number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="contact-form__field">
                    <label>Choose a topic</label>
                    <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                    >
                        <option value="">Select one...</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                    </select>
                </div>

                <div className="contact-form__field">
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <div className="contact-form__checkbox">
                    <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                    />
                    <label>I accept the terms</label>
                </div>

                <button type="submit" className="contact-form__submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;