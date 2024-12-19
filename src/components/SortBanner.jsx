import '../styles/SortBanner.css';
import { useSearchParams } from 'react-router';

function SortBanner() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortByChange = (e) => {
    const newSortBy = e.target.value;

    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set('sort_by', newSortBy);
      return newParams;
    });
  };

  const handleOrderChange = (e) => {
    const newOrder = e.target.value;

    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set('order', newOrder);
      return newParams;
    });
  };

  return (
    <div className="sort-banner">
      <select
        aria-label="Select filter to sort by"
        className="sort-dropdown"
        id="sort-select"
        defaultValue="sorts"
        onChange={handleSortByChange}
      >
        <option value="sorts" disabled>
          Sort by
        </option>
        <option value="created_at">Published</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <select
        aria-label="Select order to sort articles"
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
