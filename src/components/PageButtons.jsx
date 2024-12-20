import '../styles/PageButtons.css';

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
      <button
        className="page-button"
        onClick={() => {
          handlePagination(+p - 1);
        }}
        disabled={p <= 1}
      >
        Previous
      </button>
      {paginationNumbers.map((pageNumber) => (
        <button
          className={+p === +pageNumber ? 'page-current' : 'page-button'}
          key={pageNumber}
          onClick={() => {
            handlePagination(pageNumber);
          }}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="page-button"
        onClick={() => {
          handlePagination(+p + 1);
        }}
        disabled={+p === +paginationNumbers.length}
      >
        Next
      </button>
    </div>
  );
}

export default PageButtons;
