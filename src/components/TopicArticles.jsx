import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllArticles } from '../api/api';
import ArticleCard from './ArticleCard';

function TopicArticles() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [articleList, setArticleList] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(topic)
      .then((data) => {
        setArticleList(data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError('Something went wrong!');
        setIsLoading(false);
      });
  }, [topic]);

  return (
    <>
      {isLoading ? <p>Thinking...</p> : null}
      {error ? <p>{error}</p> : null}
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
  );
}

export default TopicArticles;
