import React from 'react';
import './Home.css'; 
import { LinearProgress, CircularProgress , Checkbox, FormGroup, FormControlLabel} from '@mui/material';

export default function Home() {
  return (
    <div className="home-container">
      <p className="home-text">Отладка: компонент Home рендерится корректно.</p>
      
      {/* Добавляем компоненты прогресса */}
      <div className="progress-container">
        <p>Загрузка данных:</p>
        <LinearProgress />
        <CircularProgress style={{ marginTop: '20px' }} />
      </div>
      <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Базовый" />
      <FormControlLabel control={<Checkbox />} label="Продвинутый" />
      <FormControlLabel control={<Checkbox />} label="Учебный" />
    </FormGroup>
    </div>
  );
}
