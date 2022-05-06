import React, { useEffect, useState, useContext, createContext } from "react";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";

export const DataContext = React.createContext();
function App () {
  const [state, setState] = useState({data:[]});
  async function GetData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  }
  useEffect(()=>{
    GetData().then((data)=>{
      setState({...state, data});
      console.log(data);
    });
  }, [])
  return (
    <DataContext value={state.data}>
      <Search />
      <Table />
    </DataContext>
  );
}

export default App;
