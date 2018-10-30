import React from 'react'
import './Content.css'
import moment from 'moment'
import PropTypes from "prop-types";

const Content = (props) => {
    
    return (
        <div className="card mt-3 mb-3">
            <img className="card-img-top" src={props.urlToImage} alt="Card image cap"/>
            <div className="card-body">
                <a href={props.url} className='link-title' target='_blank'>
                    <h4>{props.title}</h4>
                </a>
                <small>
                    {/* { moment(props.publishedAt).format('MMMM Do YYYY, h:mm:ss a') } */}
                    { props.author }, { moment(props.publishedAt).startOf('hour').fromNow()  }
                </small>

                <p className="card-text mt-4">{props.description}</p>
            </div>
            <div className='card-footer'>
                <div className='row text-center'>
                    <div className='col-sm-4 col-xs-12'>
                        <a href='#' className='footer-card'>
                            <i className="fas fa-heart"> Sukai</i>
                        </a>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                        <a href='#' className='footer-card'>
                            <i className="fas fa-comment"> Komentar</i>
                        </a>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                        <a href='#' className='footer-card'>
                            <i className="fas fa-share-alt"> Bagikan</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>        
    );
}

Content.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    urlToImage: PropTypes.string,
    url: PropTypes.string
}

export default Content