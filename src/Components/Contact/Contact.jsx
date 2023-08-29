
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
    <div className="container">
       <div className="form col-md-5">
               <div className="cont-form mt-4" >
               <h3 className="heading">Talk to Us</h3>
                <label for="contact-name" className="label">Name<br/>
                    <input type="text" id="contact-name" className="field" placeholder="Name"/>
                </label>
    
                <label for="contact-email" className="label">Email<br/>
                    <input type="email" id="contact-email" className="field" placeholder="Email"/>
                </label>
                
                <label for="contact-message" className="label">Message<br/>
                    <textarea name="" id="contact-message" className="field" placeholder="Message"></textarea>
                </label>
                <button className="btn" id="signup">Submit</button>
               </div>
            </div>
    </div>
</div>
  )
}

export default Contact
