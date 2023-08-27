import React from 'react'


// export default class NewsItem extends Component {
  // render() 
  
  const NewsItem=(props)=>{

  
  
   let {title,description,imageurl,newsUrl,author,published,source}=props;
    return (

      <div className="my-2">
       
      <div className="card" style={{width: "18rem"}}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
    {source}
    
  </span>
  <img className="card-img-top" src={!imageurl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-e4N0r0qMgekZGWeCrhlhqV6df52Zshx8xOjOSxlhGxjiJy2x5JVTD6aLh-PYbzqxL8&usqp=CAU":imageurl} alt="Card image cap"/>
  
  <div className="card-body" >
 
    <h5 className="card-title">{title}... </h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank"className="btn btn-dark btn-sm" rel="noreferrer">Read More</a>
    <p className="card-text"><small className=" text-danger">By {author?author:"Unknown"} on {new Date(published).toGMTString()}</small></p>
  </div>
</div>
      </div>
    )
  
    }

export default NewsItem;
