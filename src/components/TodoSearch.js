const TodoSearch = ({ searchText, search }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      {/* <form onSubmit={onSubmit} className="w-full max-w-sm"> */}
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => searchText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Todos..."
            value={search}
          />
        </div>
      </form>
    </div>
  );
};

export default TodoSearch;