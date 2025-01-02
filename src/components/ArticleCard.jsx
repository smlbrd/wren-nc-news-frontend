import '../styles/ArticleCard.css';
import timestampToDate from '../utils/timestampToDate';
import timestampFromNow from '../utils/timestampFromNow';
import { Link } from 'react-router';
import { Paper } from '@mui/material';

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
    <Paper className="article-card">
      <Link to={`/articles/${article_id}`}>
        <img src={article_img_url} alt="" />
        <div className="article-card article-card-contents">
          <h2>{title}</h2>
          <div>
            {published} ({timeAgo})
          </div>

          <div className="secondary-info">{comment_count} comments</div>
          <div className="secondary-info">{votes} votes</div>
          <div className="secondary-info">{topic}</div>
        </div>
      </Link>
    </Paper>
  );
}

export default ArticleCard;
