import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const initialFeedbacks = { good: 0, neutral: 0, bad: 0 };

const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    try {
      return (
        JSON.parse(localStorage.getItem("feedbacks-data")) || initialFeedbacks
      );
    } catch (error) {
      console.log(error);
      return initialFeedbacks;
    }
  });

  useEffect(() => {
    localStorage.setItem("feedbacks-data", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(feedbacks).reduce(
    (acc, item) => acc + item
  );

  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  const handleResetClick = () => {
    setFeedbacks(initialFeedbacks);
  };

  return (
    <Container>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        feedbacksData={Object.keys(feedbacks)}
        handleResetClick={handleResetClick}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification totalFeedback={totalFeedback} />
      )}
    </Container>
  );
};

export default App;
