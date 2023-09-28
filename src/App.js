import Movies from './Components/Movies';
import Header from './Components/Header';
import Moviese from './moviess.json'
import './App.css';

function App() {
  return (
   <div className="App">
  <Header/>
  
  
    <div className='main'>
    {
      Moviese.map((element)=>{
        return(
          <div className='movies'> 
            <Movies 
        
          title={element.Title}
          year={element.Year}
          image={element.Poster}
          />
          </div>
       
        )
      })
      
    }
     
    </div>   
    </div>  
  );
}

export default App;
