import timestampToDate from '../utils/timestampToDate';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getArticleById } from '../api/api';

function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
      })
      .catch((error) => {
        console.log(error, 'ruh roh!');
      });
  }, [article_id]);

  const {
    article_img_url,
    author,
    body,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  } = article;

  const date = String(timestampToDate(created_at));

  return (
    <>
      <h1>{article.title}</h1>
      <img src={article_img_url} alt={`Banner image for ${title}`} />
      <h2>{author}</h2>
      <div>{date}</div>
      <div>{body}</div>
      <div>{topic}</div>
      <div>{votes} votes</div>
      <div>{comment_count} comments</div>
    </>
  );
}

export default ArticlePage;
