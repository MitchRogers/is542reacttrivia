import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import '../../src/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Leaderboard from './Leaderboard';

function HighScorePanel() {
    const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <span class="bounce_button anim-leaderboard">Check out the leaderboard&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} /></span>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Leaderboard />
        </div>
      </Collapse>
    </>
  );
}
  
export default HighScorePanel;