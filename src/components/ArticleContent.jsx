import { Link } from 'react-router';
import '../styles/ArticleContent.css';
import timestampToDate from '../utils/timestampToDate';
import VoteHandler from './VoteHandler';
import timestampFromNow from '../utils/timestampFromNow';

function ArticleContent({
  article_id,
  article_img_url,
  author,
  body,
  comment_count,
  created_at,
  title,
  topic,
  votes,
}) {
  const published = String(timestampToDate(created_at));
  const timeAgo = String(timestampFromNow(created_at));

  return (
    <div className="article-content">
      <h1 className="article-title">{title}</h1>
      <img
        className="article-image"
        src={article_img_url}
        alt={`Banner image for ${title}`}
      />
      <h2 className="article-author">{author}</h2>
      <div className="article-date">
        {published} ({timeAgo})
      </div>
      <div className="article-body">{body}</div>
      <Link to={`/articles?topic=${topic}`} className="article-topic">
        {topic}
      </Link>
      <div className="article-votes">
        <VoteHandler article_id={article_id} votes={votes} />
      </div>
      <div className="article-comment-count">{comment_count} comments</div>
    </div>
  );
}

export default ArticleContent;
