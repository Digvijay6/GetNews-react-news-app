import React from 'react'

const NewsItem=(props)=>{
  
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl?imageUrl:"https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fdiduf3rfzhkqpiuvn350.gif"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'88%', zIndex : '1'}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </>
    )
}

export default NewsItem;
