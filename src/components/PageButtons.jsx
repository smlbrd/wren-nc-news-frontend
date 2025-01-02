import '../styles/PageButtons.css';
import Button from '@mui/material/Button';

function PageButtons({ p, limit, articleCount, setSearchParams }) {
  const handlePagination = (e) => {
    const newPage = e;

    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set('p', newPage);
      return newParams;
    });
  };

  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(articleCount.total_count / limit); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="page-controls">
      <Button
        aria-label="select previous page"
        variant="outlined"
        className="page-button"
        onClick={() => {
          handlePagination(+p - 1);
        }}
        disabled={p <= 1}
      >
        Previous
      </Button>
      {paginationNumbers.map((pageNumber) => (
        <Button
          aria-label={`select page ${pageNumber}`}
          variant={+p === +pageNumber ? 'contained' : 'outlined'}
          className={+p === +pageNumber ? 'page-current' : 'page-button'}
          key={pageNumber}
          onClick={() => {
            handlePagination(pageNumber);
          }}
        >
          {pageNumber}
        </Button>
      ))}
      <Button
        aria-label="select next page"
        variant="outlined"
        className="page-button"
        onClick={() => {
          handlePagination(+p + 1);
        }}
        disabled={+p === +paginationNumbers.length}
      >
        Next
      </Button>
    </div>
  );
}

export default PageButtons;
