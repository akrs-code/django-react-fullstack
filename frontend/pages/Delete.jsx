import React, { useState, useEffect } from 'react'
import AxiosInstance from '../api/Axios'
import { Box, Typography, Button, Chip } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate, useParams } from 'react-router';
import Message from '../components/forms/Success';

const Delete = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [message, setMessage] = useState(null)

    const [myData, setMyData] = useState({
        name: "",
        description: "",
        country: "",
        league: "",
        attendance: 0,
        city: "",
        characteristic: [],
    })

    const GetData = () => {
        AxiosInstance.get(`footballclub/${id}/`)
            .then((res) => setMyData(res.data))
            .catch((err) => console.error(err))
    }

    useEffect(() => {
        GetData()
    }, [])

    const DeleteRecord = () => {
        if (!window.confirm("This action cannot be undone. Are you sure?")) return;

        AxiosInstance.delete(`footballclub/${id}/`)
            .then(() => {
                setMessage(
                    <Message
                        messageText="You successfully deleted the club!"
                        messagecolor="green"
                    />
                )
                setTimeout(() => navigate('/'), 1500)
            })
            .catch((err) => console.error(err))
    }

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 700 }}>
                
      
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        bgcolor: '#00003f',
                        color: 'white',
                        p: 2,
                        fontWeight: 'bold',
                        borderRadius: 1,
                    }}
                >
                    <AddBoxIcon />
                    <Typography variant="subtitle2">Delete Club</Typography>
                </Box>

                {message}

                <Box
                    sx={{
                        mt: 3,
                        p: 2,
                        bgcolor: 'white',
                        borderRadius: 1,
                        boxShadow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography>
                        You are about to delete the club <strong>{myData.name}</strong> from <strong>{myData.city}</strong>.
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={DeleteRecord}
                        fullWidth
                    >
                        Delete
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate(-1)}
                        fullWidth
                    >
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Delete