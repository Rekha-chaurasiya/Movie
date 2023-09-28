const Movies =({image,title,year})=>{
    return(
        <div className="movies">
           
           {title}
           {year}
           <img src={image} alt=""/>
        </div>
    )
}
export default Movies;