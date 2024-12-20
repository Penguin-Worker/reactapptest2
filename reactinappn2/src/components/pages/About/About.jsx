import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material';


export default function About() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="about-container">
      <Typography variant="h6" className="about-text">
        About Page
      </Typography>

      <div className="select-container">
        <FormControl fullWidth>
          <InputLabel id="select-label">Выберите интересующий вопрос</InputLabel>
          <Select
            labelId="select-label"
            value={selectedOption}
            onChange={handleChange}
            label="Choose an option"
          >
            <MenuItem value="Сколько">Сколько ?</MenuItem>
            <MenuItem value="Зачем">Зачем ?</MenuItem>
            <MenuItem value="oНашелся">Нашелся ?</MenuItem>
          </Select>
        </FormControl>
      </div>

      {selectedOption && <Typography>Вы выбрали: {selectedOption}</Typography>}
    </div>
  );
}
