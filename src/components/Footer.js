import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'


function Footer() {
    return (
        <div className = 'footer-container'>
            <section className = 'footer-subscription'>
                <p className = "footer-subscription-heading">
                    Join the Adventure newsletter to recive our
                     best vacation deals
                </p>
                < p className = "footer-subscription-text">
                    You can unsuscribe any time.
                </p>
                <div className = "input-areas">
                    <form>
                        <input type = "email" name = "email"
                        placeholder = "Your E-mail" className = "footer-input"/>
                    </form>
                    <Button buttonStyle = 'btn--outline'>Subscribe</Button>
                </div>
                
            </section>
            <div className = 'footer-links'>
                <div className = "footer-link-wrapper">
                    <div className = "footer-link-items">
                        <h2>About Us</h2>
                        <Link to = '/signup'>How it works</Link>
                        <Link to = '/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className = "social-media">
                <div className = "social-media-wrap">
                    <div className = "footer-logo">
                        <Link to = "/" className = "social-logo">
                            MySite<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hexagon" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19 6.873a2 2 0 0 1 1 1.747v6.536a2 2 0 0 1 -1.029 1.748l-6 3.833a2 2 0 0 1 -1.942 0l-6 -3.833a2 2 0 0 1 -1.029 -1.747v-6.537a2 2 0 0 1 1.029 -1.748l6 -3.572a2.056 2.056 0 0 1 2 0l6 3.573z"></path>
                        </svg>
                        </Link>
                    </div>
                    <small class='website-rights'>MySite © 2020</small>
                    <div class='social-icons'>
                        <Link
                        class='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                        <i class='fa fa-facebook-f' />
                        </Link>
                        <Link
                        class='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                        <i class='fa fa-instagram' />
                        </Link>
                        <Link
                        class='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <i class='fa fa-youtube' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i class='fa fa-twitter' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <i class='fa fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
