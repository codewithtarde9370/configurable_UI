import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import { NavMenu, FooterData } from '../../data';

function Footer() {
    const { slogan, socialMedia, payment, companyLinks, recentNews } = FooterData;
    const { title, menuLink } = NavMenu[0];
    
    return (
        <div className='footer'>
            <div className="footer-grid">
                <div className='footer-text'>
                    <h3>{title}</h3>
                    <p>{slogan}</p>
                </div>
                <p>Accepted payment methods</p>
                <div className="payment">
                    <img src={payment.img1} alt='American Express' />
                    <img src={payment.img2} alt='Mastercard' />
                    <img src={payment.img3} alt='PayPal' />
                    <img src={payment.img4} alt='Visa' />
                </div>
            </div>

            <div className='footer-grid'>
                <h3>Recent News</h3>
                <ul>
                    <li>{recentNews.news1}</li>
                    <li>{recentNews.news2}</li>
                    <li>{recentNews.news3}</li>
                    <li>{recentNews.news4}</li>
                </ul>
            </div>

            <div className='footer-grid'>
                <h3>Navigation</h3>
                <ul>
                    <li><Link to="/home">{menuLink.one}</Link></li>
                    <li><Link to="/about">{menuLink.two}</Link></li>
                    <li><Link to="/contact">{menuLink.three}</Link></li>
                    <li><Link to="/services">{menuLink.four}</Link></li>
                    <li><Link to="/gallery">{menuLink.five}</Link></li>
                </ul>
            </div>

            <div className='footer-grid'>
                <h3>The Company</h3>
                <ul>
                    <li><Link to="/about">{companyLinks.info1}</Link></li>
                    <li><Link to="/business-tool">{companyLinks.info2}</Link></li>
                    <li><Link to="/success-stories">{companyLinks.info3}</Link></li>
                    <li><Link to="/resources">{companyLinks.info4}</Link></li>
                    <li><Link to="/support">{companyLinks.info5}</Link></li>
                </ul>
            </div>

            <div className='footer-grid'>
                <h3>Connect With Us</h3>
                <div className="social-media">
                    <img src={socialMedia.insta} alt='Instagram' />
                    <img src={socialMedia.fb} alt='Facebook' />
                    <img src={socialMedia.linkedin} alt='LinkedIn' />
                    <img src={socialMedia.twitter} alt='Twitter' />
                </div>
            </div>
        </div>
    );
}

export default Footer;
