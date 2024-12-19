import { useSearchParams } from 'react-router';

function SortBanner({ sortBy, order }) {
  const [searchParams, setSearchParams] = useSearchParams();

  /* 
  TODO: Current setup uses a change handler for each query param
  However, trying to use a {name:value} object to make a dynamic handler
  overwrites all queries when a new query is selected
  
  MORE RESEARCH REQUIRED!
  */

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
      <select id="sort-select" value={sortBy} onChange={handleSortByChange}>
        <option value="created_at">Published</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <select id="order-select" value={order} onChange={handleOrderChange}>
        <option value="DESC">Descending</option>
        <option value="ASC">Ascending</option>
      </select>
    </div>
  );
}

export default SortBanner;
