import s from "./Options.module.css";
const Options = ({
  updateFeedback,
  feedbacksData,
  handleResetClick,
  totalFeedback,
}) => {
  return (
    <ul className={s.optionsList}>
      {feedbacksData.map((item) => (
        <li className={s.optionsListItem} key={item}>
          <button className={s.optionsBtn} onClick={() => updateFeedback(item)}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        </li>
      ))}
      <li className={s.optionsListItem}>
        {totalFeedback > 0 && (
          <button className={s.optionsBtn} onClick={handleResetClick}>
            Reset
          </button>
        )}
      </li>
    </ul>
  );
};

export default Options;
