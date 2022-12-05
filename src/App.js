import axios from "axios";
import "./styles.css";
import { useState, useEffect } from "react";
import List from "./List";
import { Loader } from "./Loader";
import "./loaderstyle.css";

export default function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  const [loader, setLoader] = useState(false);

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      setData(persons);

      setLoader(true);
      console.log(loader);
    });
  };
  console.log(data);

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }

    return () => {
      clearTimeout();
    };
  }, [loader]);

  console.log(loader);

  return (
    <div className="container">
      <div className="App">
        {show ? (
          <section>
            <h2>get all the data you need just by clicking on</h2>
            <button
              onClick={() => {
                getData();
              }}
            >
              {loader ? <Loader showing={show}></Loader> : "get data"}
            </button>
          </section>
        ) : (
          <List data={data}></List>
        )}
      </div>
    </div>
  );
}
