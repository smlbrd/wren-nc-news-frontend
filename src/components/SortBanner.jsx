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

  const handleLimitChange = (e) => {
    const newLimit = e.target.value;

    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set('limit', newLimit);
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
        <option value="created_at">Date (Default)</option>
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
          Order
        </option>
        <option value="DESC">Descending (Default)</option>
        <option value="ASC">Ascending</option>
      </select>
      <select
        aria-label="Select number of articles shown"
        className="sort-dropdown"
        id="limit-select"
        defaultValue="limits"
        onChange={handleLimitChange}
      >
        <option value="limits" disabled>
          Items per Page
        </option>
        <option value="20">20</option>
        <option value="10">10 (Default)</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default SortBanner;
