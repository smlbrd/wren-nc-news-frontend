import '../styles/SortBanner.css';
import { useSearchParams } from 'react-router';

function SortBanner({ sortBy, order }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortByChange = (e) => {
    const newSortBy = e.target.value;

    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set('sort_by', newSortBy);
      console.log(newParams);
      return newParams;
    });
  };

  const handleOrderChange = (e) => {
    const newOrder = e.target.value;

    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set('order', newOrder);
      console.log(newParams);
      return newParams;
    });
  };

  return (
    <div className="sort-banner">
      <select
        className="sort-dropdown"
        id="sort-select"
        defaultValue="sorts"
        onChange={handleSortByChange}
      >
        <option value="sorts" disabled>
          Sort By
        </option>
        <option value="created_at">Published</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <select
        className="sort-dropdown"
        id="order-select"
        defaultValue="orders"
        onChange={handleOrderChange}
      >
        <option value="orders" disabled>
          Order By
        </option>
        <option value="DESC">Descending</option>
        <option value="ASC">Ascending</option>
      </select>
    </div>
  );
}

export default SortBanner;
