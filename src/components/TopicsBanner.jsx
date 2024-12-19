import '../styles/TopicsBanner.css';
import { useState, useEffect } from 'react';
import { getAllTopics } from '../api/api';
import { Link } from 'react-router';

function TopicsBanner({ handleTopicChange }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    setError('');
    setIsLoading(true);
    getAllTopics()
      .then(({ topics }) => {
        setTopicList(topics);
        setIsLoading(false);
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, []);

  return (
    <>
      {error ? <p>{error}</p> : null}
      {isLoading ? (
        <p className="loading">Contemplating categories...</p>
      ) : (
        <ul className="topic-banner">
          <li className="topic-item" key="home">
            <Link to={`/`}>latest</Link>
          </li>
          {topicList.map((topic) => {
            return (
              <li className="topic-item" key={topic.slug}>
                <Link
                  to={`?topic=${topic.slug}`}
                  onClick={() => {
                    handleTopicChange(`${topic.slug}`);
                  }}
                >
                  {topic.slug}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default TopicsBanner;
