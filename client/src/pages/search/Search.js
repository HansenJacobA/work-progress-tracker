import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './Search.css';
import Previews from './previews/Previews';

const Search = () => {

    const [selectedTopic, setSelectedTopic] = useState('');
    const [entries, setEntries] = useState([]);
    const [allTopics, setAllTopics] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/topic').then(({ data }) => {
            setAllTopics(data.data);
        });
    }, [false]);

    const getEntries = async (e) => {
        e.preventDefault();
        if (allTopics.find(({ name }) => name === selectedTopic) == undefined) {
            setEntries([]);
        } else {
            await axios.get(`http://localhost:4000/api/entry/topic/${selectedTopic}`)
                .then(({ data }) => setEntries(data.data));
        }
    };

    return (
        <section className='search'>

            <h1>Browse entries by topic.</h1>

            <form>
                <input type="text" onChange={e => setSelectedTopic(e.target.value)} list="topics" />
                <datalist id="topics">
                    {allTopics.map(({ name, id }) => <option value={name || 'No Name'} key={id} />)};
                </datalist>

                <button onClick={getEntries}>Search</button>
            </form>

            <ul className='entries'>
                {entries.length ?
                    entries.map(entry => <Previews entry={entry} key={entry.id} />)
                    :
                    <span>No previews for this topic.</span>}
            </ul>
        </section>
    );
};

export default Search;