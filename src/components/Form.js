import React, {useRef} from 'react' 
import './FormStyles.css'
import emailJs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs.sendForm(
      import.meta.env.REACT_APP_SERVICE_ID,
      import.meta.env.REACT_APP_TEMPLATE_ID,
      form.current,
      import.meta.env.REACT_APP_USER_ID
    ).then(
      result => console.log(result.text), 
      error => console.log(error.text)
    );

    e.target.reset();
  };

  return (
    <div className='form'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your name</label>
        <input type='text' name='user_name' required/>
        <label>Email</label>
        <input type='email' name='user_email' required/>
        <label>Message</label>
        <textarea name="message" placeholder='Type a short message here'/>
        <input type="submit" value="Send" className='btn'/>
      </form>
    </div>
  )
}
 
export default Form
