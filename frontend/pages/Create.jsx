import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextForm from '../components/forms/TextForm.jsx';
import SelectForm from '../components/forms/SelectForm.jsx';
import AxiosInstance from '../api/Axios.jsx';
import MultiSelectForm from '../components/forms/MultiSelectForm.jsx';
import DescriptionForm from '../components/forms/DescriptionForm.jsx';
import Message from '../components/forms/Success.jsx'
import {useNavigate} from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Create = () => {
  const [country, setCountry] = useState([]);
  const [league, setLeague] = useState([]);
  const [characteristic, setCharacteristic] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate()

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

  const validationSchema = yup.object({
    name: yup
      .string("The name must be text")
      .required("Name is required"),
    attendance: yup
      .number("Attendance must be number")
      .required("Attendance is required"),
    characteristic: yup
      .array()
      .min(1, "Select atleast one")
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      country: "",
      league: "",
      attendance: "",
      city: "",
      characteristic: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      AxiosInstance.post('footballclub/', values)
        .then(() => {
          setSuccessMessage("You successfully submitted data to the database!")
          formik.resetForm()

          setTimeout(()=>{
            navigate("/")
          }, 1500)
        })
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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

        {successMessage && (
          <Message
            messageText={successMessage}
            messageColor="green"
          />
        )}

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
            <TextForm
              label="Club Name"
              name='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <TextForm
              label="City"
              name='city'
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />

            <SelectForm
              label="League"
              options={league}
              name="league"
              value={formik.values.league || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.league && Boolean(formik.errors.league)}
              helperText={formik.touched.league && formik.errors.league}
            />

            <Button variant="contained" type='submit'>Submit the Data</Button>
          </Box>

          <Box sx={{ width: '33%', padding: '15px', display: 'flex', flexDirection: 'column', gap: "20px" }}>
            <SelectForm
              label="Country"
              options={country}
              name="country"
              value={formik.values.country || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />

            <TextForm
              label="Attendance"
              name="attendance"
              value={formik.values.attendance}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.attendance && Boolean(formik.errors.attendance)}
              helperText={formik.touched.attendance && formik.errors.attendance}
            />

            <MultiSelectForm
              label="Characteristics"
              options={characteristic}
              name="characteristic"
              value={formik.values.characteristic}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.characteristic && Boolean(formik.errors.characteristic)}
              helperText={formik.touched.characteristic && formik.errors.characteristic}
            />
          </Box>

          <Box sx={{ width: '33%', padding: '15px' }}>
            <DescriptionForm
              label="Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Create;