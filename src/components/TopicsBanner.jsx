import '../styles/TopicsBanner.css';
import { useState, useEffect } from 'react';
import { getAllTopics } from '../api/api';
import { Link } from 'react-router';
import ErrorHandler from './ErrorHandler';
import Loading from './Loading';
import { capitalize } from '@mui/material';

function TopicsBanner() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    getAllTopics()
      .then(({ topics }) => {
        setTopicList(topics);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      {error ? <ErrorHandler error={error} /> : null}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ul className="topic-banner">
            <li
              aria-label="select all articles"
              className="topic-item"
              key="home"
            >
              <Link to={`/`}>Latest</Link>
            </li>
            {topicList.map((topic) => {
              return (
                <li
                  aria-label={`select ${topic.slug} articles`}
                  className="topic-item"
                  key={topic.slug}
                >
                  <Link to={`?topic=${topic.slug}`}>
                    {capitalize(topic.slug)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default TopicsBanner;
