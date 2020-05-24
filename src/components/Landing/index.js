import React, {useState} from 'react';

export default function Landing(props) {
    const[name, setName] = useState('');

    return(
        <div>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <h1>Welcome {name}, to our website</h1>
        </div>
    );
}
