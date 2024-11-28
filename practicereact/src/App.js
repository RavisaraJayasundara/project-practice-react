import './App.css';
import Main from './components/Main';
import {myData} from './data/myData';

const NewBlock= ()=>{
  return(
    <>
      {myData.map((id,name,city)=>{
        return<Main key="id" name={name} city={city}/>
      })}
    </>
  )
}
function App() {
  return (
    <div className="App">
        <Main/>
        <NewBlock/>
        {/* {myData.map((id,name,city)=>{
          return<Main key={id} name={name} city={city}/>
        })} */}
    </div>
  );
}

export default App;
