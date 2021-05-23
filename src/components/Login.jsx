import React from 'react';
import axios from 'axios';

function Login({ onLogin }) {
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const onEnter = async () => {
        if (!roomId || !userName) {
            return alert('You must enter room title and your name');
        }
        const obj = {
            roomId,
            userName,
        };
        setLoading(true);
        await axios.post('/rooms', obj);
        onLogin(obj);
    };

    return (
        <div className="join-block">
            <input
                type="text"
                placeholder="Room Title"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button disabled={isLoading} onClick={onEnter} className="btn btn-success">
                {isLoading ? 'Logging in' : 'Log in'}
            </button>
        </div>
    );
}

export default Login;
