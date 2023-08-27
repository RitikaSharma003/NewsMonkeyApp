// import React, { Component } from 'react'
import React,{useEffect,useState} from 'react';

import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


// export default class News extends Component {

//   static defaultProps={
//     country:'in',
//     pageSize:6,
// category:'general'
//   }

//   static propTypes={
//   country:PropTypes.string,
// pageSize:PropTypes.number,
// category:PropTypes.string,
//   }

//   articles=  [
//     {
//         "source": {
//             "id": "bbc-sport",
//             "name": "BBC Sport"
//         },
//         "author": null,
//         "title": "'Tumultuous week in summer that shows best and worst of cricket'",
//         "description": "Cricket has had to confront difficult questions about its image and the values it stands after a tumultuous week on and off the field, writes Dan Roan.",
//         "url": "http://www.bbc.co.uk/sport/cricket/66093964",
//         "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17320/production/_130280059_bairstow_getty.jpg",
//         "publishedAt": "2023-07-04T09:07:21.4621002Z",
//         "content": "<table><tr><th>Men's Ashes: England v Australia - third Test</th></tr>\r\n<tr><td>Venue: Headingley Dates: 6-10 July Time: 11:00 BST</td></tr><tr><td>Coverage: Daily Today at the Test highlights on BBC… [+5857 chars]"
//     },
//     {
//         "source": {
//             "id": "news24",
//             "name": "News24"
//         },
//         "author": "sport",
//         "title": "Diplomacy burnt to Ashes: Now Australian PM Albanese also wades into cricket row",
//         "description": "The British and Australian prime ministers have traded verbal bouncers after a controversial Test match between the two sides that has rocked the usually genteel world of cricket.",
//         "url": "https://www.news24.com/sport/cricket/diplomacy-burnt-to-ashes-uk-australian-pms-wade-into-cricket-row-20230704",
//         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/1535/c8bf8516680a40529586738472167961.jpg",
//         "publishedAt": "2023-07-04T07:49:56+00:00",
//         "content": "<ul><li>Both the UK and Australian prime ministers have now had their say about Jonny Bairstow's controversial stumping during the second Ashes Test.</li><li>Rishi Sunak, the UK leader, hit first by … [+3867 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//         "publishedAt": "2020-04-27T11:41:47Z",
//         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//         "publishedAt": "2020-03-30T15:26:05Z",
//         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//     }
// ]


const News=(props)=>{
  const[articles,setArticles]=useState([])

const [loading,setLoading]=useState(true)
const[page,setPage]=useState(1)
const[totalResults,setTotalResults]=useState(0)

const capitalizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);


}


// capitalizeFirstLetter=(string)=>{
//   return string.charAt(0).toUpperCase()+string.slice(1);

// }


  // constructor(props){
  //   super(props);// always super will be called when use  constructor 
  //   console.log("hello");
  // this.state={
  //   articles: [],
  //   loading:true,
  //   page:1,
  //   totalResults:0

  // }

  // document.title=`NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`;

  // }


const  updateNews=async()=>{
  // this.props.setProgress(10);
  props.setProgress(10);


  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  
  setLoading(true);
  let data=await fetch(url);
  props.setProgress(30);
  let parsedData=await data.json();
 props.setProgress(70);
  
  // console.log(parsedData);
  // this.setState({
  //   articles:parsedData.articles,totalResults:parsedData.totalResults,
  //   loading:false,
  // })

  setArticles(parsedData.articles);
  setTotalResults(parsedData.totalResults);
  setLoading(false);
  props.setProgress(100);


}

useEffect(()=>{
  document.title=`${capitalizeFirstLetter(props.category)}-NewsMonkey`;
  updateNews();
  //eslint-disable-next-line

  
},[])



  // async componentDidMount(){
// let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=586a9ee9d9ac4ce2a3e703b26824c31a&page=1&pageSize=${this.props.pageSize}`
// this.setState({loading:true});
// let data=await fetch(url);
// let parsedData=await data.json();

// console.log(parsedData);
// this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,
//   loading:false})
// this.updateNews();

  // }

  
//  handlePrevclick= async()=>{
//   console.log("Previous");
//   this.setState({loading:true});
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=586a9ee9d9ac4ce2a3e703b26824c31a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

//   let data=await fetch(url);
//   let parsedData=await data.json();
  
//   console.log(parsedData);
//   this.setState({articles:parsedData.articles,
//     page: this.state.page-1,  loading:false
// })

// this.setState({page:this.state.page-1})

// this.updateNews();

    // }



  // handleNextclick= async()=>{
//   console.log("Next");
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=586a9ee9d9ac4ce2a3e703b26824c31a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
// if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
// this.setState({loading:true});



// let data=await fetch(url);
// let parsedData=await data.json();

// console.log(parsedData);
// this.setState({articles:parsedData.articles,
//   page: this.state.page+1,loading:false
// })
    //}

    // this.setState({page:this.state.page+1});
    // this.updateNews();

  // }

  
  const fetchMoreData =async  () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    // this.setState({page:this.state.page+1})
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;

    setPage(page+1)  ;

    // this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    
    // console.log(parsedData);
   setArticles(articles.concat(parsedData.articles));setTotalResults(parsedData.totalResults);
 
    

  };

    return (
      <>

      <div className="container my-3 ">
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>
        Newsmonkey - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading &&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >

<div className="container">

        <div className="row">
{articles.map((element)=>{
 return <div className="col md-4" key={element.url}>
   <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} published={element.publishedAt} source={element.source.name}/>
</div>

  


})}
     </div> 
     </div> 




  </InfiniteScroll>    
     {/* <div className="container d-flex justify-content-between">

    
      <button type="button" disabled={this.state.page<=1} className="btn btn-info" onClick={this.handlePrevclick}>&larr; Previous</button>
      <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-info" onClick={this.handleNextclick}>Next &rarr;</button>
      </div> */}




      
      </div>
      </>
    )
  }




  News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News;

