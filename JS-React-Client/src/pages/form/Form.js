import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import css from './Form.css';

const Form = () => {

  const [topic, setTopic] = useState('');
  const [yesterday, setYesterday] = useState('');
  const [today, setToday] = useState('');
  const [continued, setContinued] = useState('');
  const [blockers, setBlockers] = useState('');
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:4000/api/topic').then(({ data }) => {
      setAllTopics(data.data);
    });

  }, [false]);

  const sendSubmits = async () => {
    // Handle new topic by submitting new topic

    if (allTopics.find(({ name }) => name === topic) == undefined) {
      const newTopic = {
        name: topic,
        complete: false,
        completedAt: null
      }
      await axios.post('http://localhost:4000/api/topic', newTopic);
    };

    // Submit new entry
    await axios.post('http://localhost:4000/api/entry', { data: { topic, yesterday, today, continued, blockers } })
      .then(() => console.log('Entry Saved'));
  };

  return (
    <section className='form'>
      <form>
        <label>Topic</label>
        <input type="text" onChange={e => setTopic(e.target.value)} list="topics" />

        <datalist id="topics">
          {allTopics.map(({ name, id }) => <option value={name || 'No Name'} key={id} />)};
        </datalist>

        <label>What was done yesterday?</label>
        <textarea rows="8" cols="50" onChange={e => setYesterday(e.target.value)}></textarea>

        <label>What was done today?</label>
        <textarea rows="8" cols="50" onChange={e => setToday(e.target.value)}></textarea>

        <label>What needs continued work?</label>
        <textarea rows="8" cols="50" onChange={e => setContinued(e.target.value)}></textarea>

        <label>Any blockers?</label>
        <textarea rows="8" cols="50" onChange={e => setBlockers(e.target.value)}></textarea>

        <Link to='/' className='form-button'>
          <button onClick={sendSubmits}>Submit</button>
        </Link>
      </form>
    </section>
  );
};

export default Form;
