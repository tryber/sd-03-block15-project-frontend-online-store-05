import React from 'react';
import Star from './Star';


const renderComment = (value, onChange) => (
  <div>
    <label htmlFor="feedback" placeholder="Coment">
      <textarea
        data-testid="product-detail-evaluation"
        maxLength="300"
        name="feedback"
        value={value}
        onChange={(event) => onChange(event, 'feedback')}
      />
    </label>
  </div>
);

class Rating extends React.Component {
  constructor(props) {
    super(props);
    const feedback = localStorage.getItem('feedback');
    this.state = { feedback: feedback || '' };
    this.handleRatingChanges = this.handleRatingChanges.bind(this);
  }

  handleRatingChanges(event, name) {
    this.setState({ [name]: event.target.value });
    localStorage.setItem(name, event.target.value.toString());
  }

  render() {
    const { feedback } = this.state;
    return (
      <form>
        <Star />
        {renderComment(feedback, this.handleRatingChanges)}
      </form>
    );
  }
}

export default Rating;
