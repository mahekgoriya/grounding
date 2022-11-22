import {useParams} from 'react-router-dom';
function ContactUs(){
    const {mobile,email} = useParams()
    return(
        <div>
            <h1>Contact Us</h1>
            <b>Email</b>{email}<br/>
            <b>Mobile</b>{mobile}<br/>

        </div>
    )
}
export default ContactUs;