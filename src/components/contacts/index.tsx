import { ContactsStyle } from './style'
import { AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp, AiFillInstagram } from 'react-icons/ai'

export const Contact = () => {

    return (
        <ContactsStyle id='contacts'>
            <div className='container'>
                <h3>Let's set up a conversation and <b>develop our creativity</b> together ?</h3>
                <ul className='contacts'>
                    <li>
                        <a href="https://www.linkedin.com/in/matheus-rocha-577162240/" target='_blank'>
                            <div style={{ backgroundImage: 'linear-gradient(#3653bc, #6882e1)' }} className='containerIcon'>
                                <AiFillLinkedin className='icon' />
                            </div>
                            <div className='info'>
                                <h4>My LinkedIn</h4>
                                {/* <p>We can create more constant interactions as well as a sharing network</p> */}
                                <span>Go to LinkedIn Now</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:mathheus.rp111@gmail.com" target='_blank'>
                            <div style={{ backgroundImage: 'linear-gradient(#b63594, #f962d1)' }} className='containerIcon'>
                                <AiOutlineMail className='icon' />
                            </div>
                            <div className='info'>
                                <h4>My Email</h4>
                                {/* <p>We can create more constant interactions as well as a sharing network</p> */}
                                <span >Go to Email Now</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5511988475406" target='_blank'>
                            <div style={{ backgroundImage: 'linear-gradient(#4aa163, #55e9ab)' }} className='containerIcon'>
                                <AiOutlineWhatsApp className='icon' />
                            </div>
                            <div className='info'>
                                <h4>My WhatsApp</h4>
                                {/* <p>We can create more constant interactions as well as a sharing network</p> */}
                                <span>Go to WhatsApp Now</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/mathheusrp1/" target='_blank'>
                            <div style={{ backgroundImage: 'linear-gradient(#6E51C3, #F26945)' }} className='containerIcon'>
                                <AiFillInstagram className='icon' />
                            </div>
                            <div className='info'>
                                <h4>My Instragram</h4>
                                {/* <p>We can create more constant interactions as well as a sharing network</p> */}
                                <span>Go to Instagram Now</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </ContactsStyle>
    )
}