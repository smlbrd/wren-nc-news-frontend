import '../styles/ArticleList.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles } from '../api/api';

function ArticleList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [articleList, setArticleList] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const topic = queryParams.get('topic');
  const author = null;
  const sort_by = 'created_at';
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

  function handleParamsUpdate() {
    queryParams.set('paramName', 'newValue');
  }

  return (
    <>
      {error ? <p>{error}</p> : null}
      {isLoading ? (
        <p className="loading">Starting to spread the news...</p>
      ) : (
        <>
          <select name="sort_by" value={sort_by} onChange={handleParamsUpdate}>
            <option value="">All</option>
            <option value="date">Date</option>
            <option value="comments">Comments</option>
            <option value="votes">Votes</option>
          </select>
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
