import React, { useState } from 'react';

const trainers = [
  "Syam Kumar",
  "Daniel Craig",
  "Priya Sharma",
  "John Abraham",
  "Deepa Raj",
  "Donald Watson"
];

const FilterSearch = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = trainers.filter(trainer =>
    trainer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>

        {/* Input + Clear button container */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            onChange={handleChange}
            value={search}
            placeholder="Search trainer"
            style={{ padding: '8px', width: '200px' }}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              style={{
                marginLeft: '8px',
                padding: '8px',
                cursor: 'pointer',
                border: '1px solid gray',
                background: 'white'
              }}
            >
              ❌
            </button>
          )}
        </div>

        {/* Filtered Results */}
        {search.trim() !== '' && (
          <ul>
            {filtered.length > 0 ? (
              filtered.map((trainer, index) => (
                <li key={index}>{trainer}</li>
              ))
            ) : (
              <li>No trainers found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterSearch;
