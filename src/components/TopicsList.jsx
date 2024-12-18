import '../styles/TopicsList.css';
import { useState, useEffect } from 'react';
import { getAllTopics } from '../api/api';

function TopicsList() {
  const [isLoading, setIsLoading] = useState(false);
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAllTopics()
      .then(({ topics }) => {
        console.log(topics);
        setTopicList(topics);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error, 'Something went wrong!');
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <p className="loading">Grouping articles by theme...</p>
      ) : (
        <ul className="topic-list">
          {topicList.map((topic, index) => {
            return (
              <li className="topic-item" key={index}>
                {topic.slug}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default TopicsList;
