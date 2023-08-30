// Components
import Header from "./Components/Header";
import Search from "./Components/Search";
import Message from "./Components/Message";
import Result from "./Components/Result";

//Hooks
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async (value) => {
    try {
      setError(false);
      setUser(null);
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${value}`);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  // console.log(user);

  return (
    <div className="min-h-screen font-mono flex items-center justify-center flex-col bg-[#141d2f]">
      <Header />
      <Search search={getData} />
      {loading && <Message>Loading...</Message>}
      {error && <Message>Something went wrong</Message>}
      {user && <Result user={user} />}
    </div>
  );
};

export default App;
