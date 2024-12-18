import '../styles/ArticleList.css';
import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles } from '../api/api';

function ArticleList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles()
      .then(({ articles }) => {
        setArticleList(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError('Something went wrong:', error);
      });
  }, []);

  return (
    <>
      {error ? <p>error</p> : null}
      {isLoading ? (
        <p className="loading">Starting to spread the news...</p>
      ) : (
        <ul className="article-list">
          {articleList.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
        </ul>
      )}
    </>
  );
}

export default ArticleList;
