import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

const useLocalStorage = (
  key,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
  const [data, setData] = useState(() =>
    deserialize(localStorage.getItem(key))
  );

  useEffect(() => {
    localStorage.setItem(key, serialize(data));
  }, [data, key, serialize]);

  return [data, setData];
};

function App() {
  const [todos, setTodos] = useLocalStorage("todos");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchTodos, setSearchTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [setTodos]);

  useEffect(() => {
    const result = todos?.filter(({ title } = {}) =>
      title.toLowerCase().includes(search)
    );
    console.log({ search, result });
    setSearchTodos(result);
  }, [search, todos]);

  return (
    <div className="container mx-auto">
      <h2 class="font-medium leading-tight text-3xl mt-4 mb-2 text-green-600 text-center"> React Todo App</h2>
      <TodoSearch searchText={setSearch} search={search} />
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">
          Loading...
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {(search ? searchTodos : todos).map((todo) => (
            <TodoList key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;