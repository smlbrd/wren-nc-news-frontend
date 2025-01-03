import '../styles/ArticleList.css';
import { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import TopicsBanner from './TopicsBanner';
import { getAllArticles } from '../api/api';
import SortBanner from './SortBanner';
import { useSearchParams } from 'react-router';
import ErrorHandler from './ErrorHandler';
import PageButtons from './PageButtons';
import Loading from './Loading';

function ArticleList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articleList, setArticleList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const topic = searchParams.get('topic') || '';
  const sortBy = searchParams.get('sort_by') || 'created_at';
  const order = searchParams.get('order') || 'DESC';
  const limit = searchParams.get('limit') || 10;
  const [articleCount, setArticleCount] = useState(0);
  const p = searchParams.get('p') || 1;

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    getAllArticles(topic, sortBy, order, limit, p)
      .then(({ articles, articleCount }) => {
        setArticleList(articles);
        setArticleCount(articleCount);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [topic, sortBy, order, limit, p]);

  return (
    <>
      <>
        <TopicsBanner />
        <SortBanner />
        <PageButtons
          p={p}
          limit={limit}
          articleCount={articleCount}
          setSearchParams={setSearchParams}
        />
        {error ? <ErrorHandler error={error} /> : null}
        {isLoading ? <Loading /> : null}
        <ul id="main" className="article-list">
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
        <PageButtons
          p={p}
          limit={limit}
          articleCount={articleCount}
          setSearchParams={setSearchParams}
        />
      </>
    </>
  );
}

export default ArticleList;
