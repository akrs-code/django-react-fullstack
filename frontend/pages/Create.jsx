import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextForm from '../components/forms/TextForm.jsx';
import SelectForm from '../components/forms/SelectForm.jsx';
import AxiosInstance from '../api/Axios.jsx';
import MultiSelectForm from '../components/forms/MultiSelectForm.jsx';
import DescriptionForm from '../components/forms/DescriptionForm.jsx';

const Create = () => {
  const [country, setCountry] = useState([]);
  const [league, setLeague] = useState([]);
  const [characteristic, setCharacteristic] = useState([]);

  const GetData = () => {
    AxiosInstance.get('country/').then((res) =>
      setCountry(res.data)
    );
    AxiosInstance.get('league/').then((res) =>
      setLeague(res.data)
    );
    AxiosInstance.get('characteristic/').then((res) =>
      setCharacteristic(res.data)
    );
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          backgroundColor: '#00003f',
          alignItems: 'center',
          padding: '10px',
          color: 'white',
          fontWeight: 'bold',
          gap: '10px',
        }}
      >
        <AddBoxIcon />
        <Typography variant='subtitle2'>Create a new Club</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          minHeight: '200px',
          justifyContent: 'space-between',
          padding: '20px',
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        }}
      >
        <Box sx={{ width: '33%', padding: '15px', display: 'flex', flexDirection: 'column', gap: "20px" }}>
          <TextForm label="Name" />

          <TextForm label="City" />

          <SelectForm label="League" options={league} />
          <Button variant="contained">Submit the Data</Button>

        </Box>


        <Box sx={{ width: '33%', padding: '15px', display: 'flex', flexDirection: 'column', gap: "20px" }}>
          <SelectForm label="Country" options={country} />
          <TextForm label="Attendance" />
          <MultiSelectForm label="Characteristics" options={characteristic} />
        </Box>

        <Box sx={{ width: '33%', padding: '15px' }}>
          <DescriptionForm label="Description" />
        </Box>
      </Box>
    </div>
  );
};

export default Create;