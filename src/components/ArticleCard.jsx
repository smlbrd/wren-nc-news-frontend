import timestampToDate from '../utils/timestampToDate';
import { Link } from 'react-router-dom';

function ArticleCard({
  article_id,
  article_img_url,
  created_at,
  title,
  topic,
}) {
  const date = String(timestampToDate(created_at));

  return (
    <li className="article-card">
      <Link to={`/articles/${article_id}`}>
        {/* TODO: Add better alt text on the API side */}
        <img src={article_img_url} alt={`Banner image for ${title}`} />
        <h2>{title}</h2>
      </Link>
      <div>{date}</div>
      {/* TODO: Replace with react-router Links to Topic views */}
      <div>{topic}</div>
    </li>
  );
}

export default ArticleCard;
