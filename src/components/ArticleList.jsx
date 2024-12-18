import '../styles/ArticleList.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles } from '../api/api';

function ArticleList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [articleList, setArticleList] = useState([]);
  const { topic } = useParams();

  console.log(topic);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(topic)
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
