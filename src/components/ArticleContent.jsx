import '../styles/ArticleContent.css';
import timestampToDate from '../utils/timestampToDate';

function ArticleContent(article) {
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
    <div className="article-content">
      <h1 className="article-title">{article.title}</h1>
      <img
        className="article-image"
        src={article_img_url}
        alt={`Banner image for ${title}`}
      />
      <h2 className="article-author">{author}</h2>
      <div className="article-date">{date}</div>
      <div className="article-body">{body}</div>
      <div className="article-topic">{topic}</div>
      <div className="article-votes">{votes} votes</div>
      <div className="article-comment-count">{comment_count} comments</div>
    </div>
  );
}

export default ArticleContent;
