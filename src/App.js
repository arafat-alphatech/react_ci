import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'
import Footer from './Components/Footer'

		  

const apiKey = '4ae9d1e760ef432394d997e24fc15541'
const baseUrl = 'https://newsapi.org/v2/'
const urlEverything = baseUrl + 'everything?' + 'q=technology&' + 'pageSize=20&' + 'sortBy=publishedAt&' + 'language=en&' + "apiKey="  + apiKey
const urlTopHeadline = baseUrl + 'top-headlines?' + 'country=id&' + "apiKey="  + apiKey
class App extends Component {
  state = {
	listNews : [],
	trendNews : []
  }

	componentDidMount = () => {
		const self = this
		// Everything Articles about React
		axios({
			method: 'GET',
			url: urlEverything
		})
		.then((response) => {
			console.log('Everything: ', response.data.articles)
			self.setState({ listNews: response.data.articles})
		})
			.catch((error) => {
			console.log(error)
		});

		// Article Top in indonesia
		axios({
			method: 'GET',
			url: urlTopHeadline
		})
		.then((response) => {
			console.log('Top Headlines: ',response.data.articles)
			self.setState({ trendNews: response.data.articles})
		})
		.catch((error) => {
			console.log(error)
		});
	}

  render() {

	const { listNews, trendNews } = this.state

	return (
	  <div className="container">
		<Navbar/>

		  <div className="row row-offcanvas row-offcanvas-right mt-4">
			
			<div className="col-xs-6 col-sm-4 col-sm-pull-9 sidebar-offcanvas" id="sidebar">  

				<div className="list-group">
					<div className="list-group-item group-active">Trending Stories <span className='float-right view-all'><a href='#'>view all</a></span> </div>
					{/* <Sidebar/> */}
					{	
						trendNews.filter((article) => {
							return article.content !== null && article.urlToImage !== null && article.author !== null
						}).map((item, key) => {
							// console.log('ubah trend: ', item, 'key: ', key)	
							if (key < 10){
								return <Sidebar key={key} title={item.title} number={key+1} url={item.url} />
							}
						})
					}      

				</div>
			</div>

			<div className="col-xs-12 col-sm-8 col-sm-push-3">
				<div className='clearfix'>          

					<form className="form-inline mt-2 mt-md-0 float-left">
						<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
						<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
					</form>

					<div className='float-right'>
						<button className="btn btn-outline-primary my-2 my-sm-0 ml-4">Login</button>
						<button className="btn btn-outline-primary my-2 my-sm-0 ml-4">Sign Up</button>
					</div>
				</div>
				
				{
					listNews.filter((article) => {
						return article.content !== null && article.urlToImage !== null && article.author !== null
					}).map((item, key) => {	
						// console.log('ubah trend: ', item, 'key: ', key)
						return <Content key={key} author={item.author} content={item.content} description={item.description} publishedAt={item.publishedAt} title={item.title} urlToImage={item.urlToImage} url={item.url} />
					})
				}
			</div>
		  </div>

		<Footer/>

	  </div>
	);
  }
}

export default App;