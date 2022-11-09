
import PropTypes from 'prop-types';
import FeedbackCss from './Feedback.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) =>
 {
 
return (<ul className={FeedbackCss.btns}>
    {options.map(data => (
    <li  key={data}><button className={FeedbackCss.btn} onClick={() => onLeaveFeedback(data)}>
        {data}</button></li>))}

</ul>

)
    }

    FeedbackOptions.propTypes = {
        options: PropTypes.array.isRequired,
        onLeaveFeedback: PropTypes.func.isRequired
          }