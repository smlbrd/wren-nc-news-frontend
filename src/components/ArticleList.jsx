import '../styles/ArticleList.css';
import { useState, useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles } from '../api/api';

function ArticleList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [articleList, setArticleList] = useState([]);

  const location = useLocation();
  const topic = new URLSearchParams(location.search).get('topic');

  const author = null;
  const sort_by = null;
  const order = null;

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(author, topic, sort_by, order)
      .then(({ articles }) => {
        setArticleList(articles);
        setIsLoading(false);
      })
      .catch(() => {
        setError('Something went wrong');
        setIsLoading(false);
      });
  }, [topic]);

  return (
    <>
      {error ? <p>error</p> : null}
      {isLoading ? (
        <p className="loading">Starting to spread the news...</p>
      ) : (
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
      )}
    </>
  );
}

export default ArticleList;
