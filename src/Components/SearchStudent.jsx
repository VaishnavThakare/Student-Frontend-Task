const SearchStudent = (setSelectedTab, selectedTab) => {
  return (
    <form class="d-flex" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Students name"
        aria-label="Search"
      />
    </form>
  );
};
export default SearchStudent;
