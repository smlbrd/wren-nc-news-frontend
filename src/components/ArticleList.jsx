import '../styles/ArticleList.css';
import { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import TopicsBanner from './TopicsBanner';
import { getAllArticles } from '../api/api';
import SortBanner from './SortBanner';
import { useSearchParams } from 'react-router';

function ArticleList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [articleList, setArticleList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const topic = searchParams.get('topic') || '';
  const sortBy = searchParams.get('sort_by') || 'created_at';
  const order = searchParams.get('order') || 'DESC';

  console.log('topic:', topic);
  console.log('sort:', sortBy);
  console.log('order:', order);

  useEffect(() => {
    setIsLoading(true);
    console.log(topic);
    getAllArticles(topic, sortBy, order)
      .then(({ articles }) => {
        setArticleList(articles);
        setIsLoading(false);
      })
      .catch(() => {
        setError('Something went wrong');
        setIsLoading(false);
      });
  }, [topic, sortBy, order]);

  function handleTopicChange(newTopic) {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set('topic', newTopic);
      return newParams;
    });
  }

  return (
    <>
      {error ? <p>{error}</p> : null}
      {isLoading ? (
        <p className="loading">Starting to spread the news...</p>
      ) : (
        <>
          <TopicsBanner handleTopicChange={handleTopicChange} />
          <SortBanner sortBy={sortBy} order={order} />
          <ul className="article-list">
            {articleList.map((article) => {
              return (
                <ArticleCard
                  className="article-card"
                  key={article.article_id}
                  {...article}
                />
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default ArticleList;
