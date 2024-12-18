import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllArticles } from '../api/api';
import ArticleCard from './ArticleCard';

function TopicArticles() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [articleList, setArticleList] = useState([]);
  const [searchParams] = useSearchParams();

  const topic = searchParams.get('topic');
  console.log(searchParams);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(topic)
      .then((data) => {
        console.log(data);
        setArticleList(data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError('Something went wrong:', error);
        setIsLoading(false);
      });
  }, [topic]);

  return (
    <>
      {isLoading ? <p>Thinking...</p> : null}
      {error ? <p>error</p> : null}
      <ul>
        {articleList.map((article) => {
          return (
            <>
              <p>It works!</p>
              <ArticleCard key={article.article_id} {...article} />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default TopicArticles;
