import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#333',
        }}
      >
        Add a New Movie
      </h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="title" style={{ fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              width: '100%',
            }}
          />
        </div>
        <div>
          <label htmlFor="director" style={{ fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>Director</label>
          <input
            type="text"
            id="director"
            name="director"
            value={formData.director}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              width: '100%',
            }}
          />
        </div>
        <div>
          <label htmlFor="genre" style={{ fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>Genre</label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              width: '100%',
            }}
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>
        <div>
          <label htmlFor="releaseYear" style={{ fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>Release Year</label>
          <input
            type="number"
            id="releaseYear"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              width: '100%',
            }}
          />
        </div>
        <div>
          <label htmlFor="synopsis" style={{ fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>Synopsis</label>
          <textarea
            id="synopsis"
            name="synopsis"
            value={formData.synopsis}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              width: '100%',
              resize: 'vertical',
              height: '100px',
            }}
          />
        </div>
        <div>
          <label htmlFor="posterUrl" style={{ fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>Poster Image URL</label>
          <input
            type="url"
            id="posterUrl"
            name="posterUrl"
            value={formData.posterUrl}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              width: '100%',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: 'black',
              color: 'white',
            }}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: '#8B0000',
              color: 'white',
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
