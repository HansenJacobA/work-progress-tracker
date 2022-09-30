import React, { useState } from 'react';
import css from './Form.css';

const Form = () => {

  const [topic, setTopic] = useState('');
  const [yesterday, setYesterday] = useState('');
  const [today, setToday] = useState('');
  const [continued, setContinued] = useState('');
  const [blockers, setBlockers] = useState('');

  const sendSubmits = (e) => {
    e.preventDefault();
    console.log(topic, yesterday, today, continued, blockers);
    // Get nano ID here per entry just in case entries are update and resubmitted? 
    // Or delete the preventDefault and what is submitted is final?
  };

  return (
    <section className='form'>
      <form>
        <label>Topic</label>
        <br />
        <input type="text" onChange={e => setTopic(e.target.value)} />
        <br />
        <label>What was done yesterday?</label>
        <br />
        <textarea rows="8" cols="50" onChange={e => setYesterday(e.target.value)}></textarea>
        <br />
        <label>What was done today?</label>
        <br />
        <textarea rows="8" cols="50" onChange={e => setToday(e.target.value)}></textarea>
        <br />
        <label>What needs continued work?</label>
        <br />
        <textarea rows="8" cols="50" onChange={e => setContinued(e.target.value)}></textarea>
        <br />
        <label>Any blockers?</label>
        <br />
        <textarea rows="8" cols="50" onChange={e => setBlockers(e.target.value)}></textarea>
        <br />
        <button onClick={sendSubmits}>Submit</button>
      </form>
    </section>
  );
};

export default Form;
