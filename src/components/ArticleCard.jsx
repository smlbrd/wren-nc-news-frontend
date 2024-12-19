import '../styles/ArticleCard.css';
import timestampToDate from '../utils/timestampToDate';
import timestampFromNow from '../utils/timestampFromNow';
import { Link } from 'react-router';

function ArticleCard({
  article_id,
  article_img_url,
  created_at,
  title,
  topic,
  comment_count,
  votes,
}) {
  const published = String(timestampToDate(created_at));
  const timeAgo = String(timestampFromNow(created_at));

  return (
    <li className="article-card">
      <Link to={`/articles/${article_id}`}>
        {/* TODO: Add better alt text on the API side */}
        <img src={article_img_url} alt={`Banner image for ${title}`} />
        <h2>{title}</h2>
      </Link>
      <div>
        {published} ({timeAgo})
      </div>
      {/* TODO: Replace with react-router Links to Topic views */}
      <div>{topic}</div>
      <div>{comment_count} comments</div>
      <div>{votes} votes</div>
    </li>
  );
}

export default ArticleCard;
