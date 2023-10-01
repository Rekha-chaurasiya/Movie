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
          <div className='moviess'> 
            <Movies 
         
          image={element.Poster}
          title={element.Title}
          year={element.Year}
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
