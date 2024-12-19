function PageButtons({ p, setP }) {
  function handlePrevClick() {
    setP((currentP) => currentP + 1);
  }

  function handleNextClick() {}

  return (
    <div className="page-controls">
      <button onClick={handlePrevClick} disabled={p === 1}>
        Previous
      </button>
      <span>Page {p}</span>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default PageButtons;
