import '../styles/ArticleList.css';
import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles } from '../api/api';

function ArticleList() {
  const [isLoading, setIsLoading] = useState(false);
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles()
      .then(({ articles }) => {
        setArticleList(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error, 'ruh roh!');
      });
  }, []);

  return (
    <>
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
