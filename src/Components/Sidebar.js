import React from 'react'
import './Sidebar.css'
import PropTypes from "prop-types";

const Sidebar = (props) => {
    return (
        <a href={props.url} className="list-group-item " target='_blank' >
            <div className="badge badge-pill badge-danger">#{props.number}</div> <br/>
            {props.title}
        </a>
    );
}

Sidebar.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
}

export default Sidebar