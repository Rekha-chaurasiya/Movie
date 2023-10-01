const Movies =({image,title,year})=>{
    return(
        <div className="movies">
           <img src={image} alt=""/>
           <p>{title}</p>
           <p>{year}</p>
        </div>
    )
}
export default Movies;