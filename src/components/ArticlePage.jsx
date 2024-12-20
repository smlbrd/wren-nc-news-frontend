import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticleById } from '../api/api';
import CommentsList from './CommentsList';
import ArticleContent from './ArticleContent';
import ErrorHandler from './ErrorHandler';
import Loading from './Loading';

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
      {isLoading ? <Loading /> : null}
      {error ? (
        <ErrorHandler error={error} />
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
