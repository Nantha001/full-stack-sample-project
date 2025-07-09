import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();

    if (name && description) {
      const res = await fetch("https://full-stack-sample-project.onrender.com/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
      });

      if (res.ok) {
        alert("Post successfully");
        setName("");
        setDescription("");
        fetchApi(); // reload data
      }
    }
  };

  const fetchApi = async () => {
    const res = await fetch("https://full-stack-sample-project.onrender.com");
    if (res.ok) {
      const datas = await res.json();
      setData(datas);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="bg">
      <h1>Store Data</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Post Data</button>
      </form>

      <div className="msg-container">
        {data.map((each, index) => (
          <div key={index} className="msg">
            <h2>{each.name}</h2>
            <p>{each.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
