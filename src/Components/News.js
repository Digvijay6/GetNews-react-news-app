import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps={
    country: 'in',
    pageSize: 8,
    category: 'general',
  };

  PropTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles : [],
      loading : false,
      page : 1
    };
     
    document.title = `Get News - ${this.capitalizeFirstLetter(this.props.category)}`
  }

  async updateNews(){
    this.props.setProgress(0);
    let newsurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=227fb9b3f1b64f91bdcb3d5eb6c6f2bc&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading : true})
    let data = await fetch(newsurl);
    this.props.setProgress(20);
    let parseData = await data.json(data)
    console.log(parseData)
    this.props.setProgress(70);
    this.setState({
      articles : parseData.articles,
      totalResults : parseData.totalResults,
      loading : false
    });
    this.props.setProgress(100);
  }


async componentDidMount(){
  this.updateNews()
}

handlePrevClick= async()=>{
  await this.setState({page:this.state.page -1})
  this.updateNews()
};

handleNextClick= async()=>{
  if(this.state.page +1 > Math.ceil(this.state.totalResults/(this.props.pageSize))){
    
  }
  else{
    await this.setState({page:this.state.page +1})
    this.updateNews()
  }
};

fetchMoreData= async()=>{
  let newsurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=227fb9b3f1b64f91bdcb3d5eb6c6f2bc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading : true})
    this.setState({page: this.state.page + 1});
    let data = await fetch(newsurl);
    let parseData = await data.json(data)
    console.log(parseData)
    this.setState({
      articles : this.state.articles.concat(parseData.articles),
      totalResults : parseData.totalResults,
      loading : false
    })
};

  render() {
    return (
      <>
      <div className="container my-4">
        <h1 className="text-center" style={{margin: "50px 10px"}}>Get News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}

        <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles !== this.totalResults}
        loader={!(this.state.page +1 > Math.ceil(this.state.totalResults/(this.props.pageSize))) && <Spinner/>}>
        <div className='container'>
        <div className='row'>
         {!this.state.laoding && this.state.articles.map((element)=>{
          return(
          <div className='col-md-3 my-4' key={element.url}>
        <NewsItem 
                  title={element.title} 
                  description= {element.description}
                  newsUrl={element.url} 
                  imageUrl={element.urlToImage}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                  />
          </div>
          );
          })}
        </div>
        </div>
        </InfiniteScroll>
        <br></br>
        {/* <div className="d-flex justify-content-between">
        <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>
          &larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/(this.props.pageSize))} type="button" className="btn btn-secondary" onClick={this.handleNextClick}>
          Next &rarr;</button>
        </div> */}
        </div>
      </>
    )
  }
}

export default News
