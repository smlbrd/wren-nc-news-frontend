import timestampToDate from '../utils/timestampToDate';

function ArticleCard({ article_img_url, created_at, title, topic, cardId }) {
  const date = String(timestampToDate(created_at));

  return (
    <div id="card" className={`div${cardId + 1}`}>
      {/* TODO: Add better alt text on the API side */}
      <img src={article_img_url} alt={`Banner image for ${title}`} />
      {/* TODO: props article_id > article page view */}
      <h2>{title}</h2>
      <p>{date}</p>
      {/* TODO: Replace h4 with react-router Links to Topic views */}
      <h4>{topic}</h4>
    </div>
  );
}

export default ArticleCard;
