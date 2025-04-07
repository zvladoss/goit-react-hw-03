import s from "./Feedback.module.css";
const Feedback = ({ feedbacks, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={s.feedbackList}>
      {Object.keys(feedbacks).map((item) => (
        <li className={s.feedbackListItem} key={item}>
          {item.charAt(0).toUpperCase() + item.slice(1)}: {feedbacks[item]}
        </li>
      ))}
      <li className={s.feedbackListItem}>Total: {totalFeedback}</li>
      <li className={s.feedbackListItem}>
        Positive: {positiveFeedback ?? 0}% %
      </li>
    </ul>
  );
};

export default Feedback;
