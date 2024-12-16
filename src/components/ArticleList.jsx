import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles } from '../api/api';

function ArticleList() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then(({ articles }) => {
        setArticleList(articles);
      })
      .catch((error) => {
        console.log(error, 'ruh roh!');
      });
  }, []);

  return (
    <ul className="card-container">
      {articleList.map((article, index) => {
        return (
          <ArticleCard key={article.article_id} cardId={index} {...article} />
        );
      })}
    </ul>
  );
}

export default ArticleList;
