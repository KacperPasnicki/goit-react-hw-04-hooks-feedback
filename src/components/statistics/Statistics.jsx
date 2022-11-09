import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) =>
{
    const feedbackArray = 
    [
        [1, `Good: ${good}`],
        [2, `Neutral: ${neutral}`],
        [3, `Bad: ${bad}`],
        [4, `Total: ${total}`],
        [5, `Positive feedback: ${positiveFeedback}% `]
    ];
    return (
        <ul>
          {feedbackArray.map(([id, element]) => (
            <li key={id} >
              <span>
                {element}</span>
            </li>))}
      </ul>
    );       
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad:  PropTypes.number.isRequired,
  total:  PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
    }