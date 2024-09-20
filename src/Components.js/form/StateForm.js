import { useState } from 'react';
import Form from './Form';


const StateForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState("");  

    return  (
        <div className="App">
        <Form   name={name} setName={setName} 
                email={email} setEmail={setEmail}
                phone={phone} setPhone={setPhone}
                message={message} setMessage={setMessage}
        />
        </div>
    );
}

export default StateForm;