import Movies from './Components/Movies';
import Header from './Components/Header';
import Movies from 'moviess'
import './App.css';

function App() {
  return (
   <div className="App">
  <Header/>
  

    <div className='main'>
    {
      Movies.map((element)=>{
        <Movies
        title={element.title}
        year={element.year}
        img={element.poster}
        
        />

      })
    }
     
    </div>   
    </div>  
  );
}

export default App;
