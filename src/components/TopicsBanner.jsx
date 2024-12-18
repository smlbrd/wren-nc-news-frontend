import '../styles/TopicsBanner.css';
import { useState, useEffect } from 'react';
import { getAllTopics } from '../api/api';
import { Link } from 'react-router-dom';

function TopicsBanner() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAllTopics()
      .then(({ topics }) => {
        setTopicList(topics);
        setIsLoading(false);
      })
      .catch((error) => {
        setError('Something went wrong!');
      });
  }, []);

  return (
    <>
      {error ? <p>error</p> : null}
      {isLoading ? (
        <p className="loading">Contemplating categories...</p>
      ) : (
        <ul className="topic-banner">
          {topicList.map((topic) => {
            return (
              <li className="topic-item" key={topic.slug}>
                <Link to={`articles/topics/${topic.slug}`}>{topic.slug}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default TopicsBanner;
