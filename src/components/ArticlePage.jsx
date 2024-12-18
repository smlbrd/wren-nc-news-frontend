import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticleById } from '../api/api';
import CommentsList from './CommentsList';
import ArticleContent from './ArticleContent';

function ArticlePage() {
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error, 'ruh roh!');
      });
  }, [article_id]);

  return (
    <>
      {isLoading ? (
        <p className="loading">
          Watching thousands of pages zoom past like the newspaper machines in
          the movies...
        </p>
      ) : (
        <>
          <ArticleContent {...article} />
          <CommentsList article_id={article_id} />
        </>
      )}
    </>
  );
}

export default ArticlePage;
