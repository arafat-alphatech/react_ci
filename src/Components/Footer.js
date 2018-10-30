import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className='text-center'>
                &copy; arafat, 2018. &nbsp; Alphatech Academy
                <div className="sosmed float-right">
                    <i className="fab fa-facebook-f"></i> 
                    <i className="fab fa-instagram"></i> 
                    <i className="fab fa-twitter"></i> 
                    <i className="fab fa-slack-hash"></i> 
                </div>
            </div>
      </footer>
    );
}

export default Footer