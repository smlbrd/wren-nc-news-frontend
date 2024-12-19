import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticleById } from '../api/api';
import CommentsList from './CommentsList';
import ArticleContent from './ArticleContent';
import ErrorHandler from './ErrorHandler';

function ArticlePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [article_id]);

  return (
    <>
      {error ? <ErrorHandler error={error} /> : null}
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
