import '../css/contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {FaLinkedin} from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_srqfyed', 'template_5pns8gs', form.current, 'HGbojDFJ9uiZSclis')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return (
        <section id= 'contact'>
            <h5> Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>tolumaj@gmail.com</h5>
                <a href="mailto:tolumaj@gmail.com" target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                <FaLinkedin className='contact__option-icon'/>
                <h4>Linkedin</h4>
                <h5>My profile</h5>
                <a href="https://www.linkedin.com/in/majaro-adebayo/" target="_blank">Let's Connect</a>
                </article>
            </div>
            
            <form ref={form} onSubmit = {sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name="email" placeholder='Your Email' required/>
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type ='submit' className='btn btn-primary'>Send Message</button>
            </form>
            </div>
        
        </section>
    );   
        

    
        
}

export default Contact;