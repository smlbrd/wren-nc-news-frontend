import { MenuItem, Select } from '@mui/material';
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
      <Select
        aria-label="Select filter to sort by"
        className="sort-dropdown"
        id="sort-select"
        name="sort-select"
        defaultValue="sorts"
        onChange={handleSortByChange}
      >
        <MenuItem value="sorts" disabled>
          Sort by
        </MenuItem>
        <MenuItem value="created_at">Date (Default)</MenuItem>
        <MenuItem value="comment_count">Comments</MenuItem>
        <MenuItem value="votes">Votes</MenuItem>
      </Select>
      <Select
        aria-label="Select order to sort articles"
        className="sort-dropdown"
        id="order-select"
        name="order-select"
        defaultValue="orders"
        onChange={handleOrderChange}
      >
        <MenuItem value="orders" disabled>
          Order
        </MenuItem>
        <MenuItem value="DESC">Descending (Default)</MenuItem>
        <MenuItem value="ASC">Ascending</MenuItem>
      </Select>
      <Select
        aria-label="Select number of articles shown"
        className="sort-dropdown"
        id="limit-select"
        name="sort-select"
        defaultValue="limits"
        onChange={handleLimitChange}
      >
        <MenuItem value="limits" disabled>
          Items per Page
        </MenuItem>
        <MenuItem value="20">20</MenuItem>
        <MenuItem value="10">10 (Default)</MenuItem>
        <MenuItem value="5">5</MenuItem>
      </Select>
    </div>
  );
}

export default SortBanner;
