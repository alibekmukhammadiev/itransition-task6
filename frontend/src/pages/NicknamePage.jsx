import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NicknamePage() {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleEnter = () => {
    if (nickname.trim()) {
      localStorage.setItem('nickname', nickname);
      navigate('/presentations');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Enter your nickname</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleEnter}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default NicknamePage;
