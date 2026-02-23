import { useState, useEffect, useMemo } from 'react'
import { Box, Chip, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import { MaterialReactTable } from 'material-react-table'
import AxiosInstance from '../api/Axios';

const Home = () => {
  const [data, setData] = useState([]);

  const GetData = () => {
    AxiosInstance.get('footballclub/').then((res) =>
      setData(res.data)
    );
  };

  useEffect(() => {
    GetData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name'
      },
      {
        accessorKey: 'country_details.name',
        header: 'Country'
      },
      {
        accessorKey: 'league_details.name',
        header: 'League'
      },
      {
        accessorKey: 'city',
        header: 'City'
      },
      {
        accessorKey: 'attendance',
        header: 'Attendance'
      },
      {
        accessorKey: 'characteristic_details',
        header: 'Characteristics',
        Cell: ({ cell }) => (
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {cell.getValue()?.map((item) => (
              <Chip key={item.id} label={item.name} />
            ))}
          </div>
        )
      }
    ]
  )

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
        <CalendarViewMonthIcon />
        <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }} variant='subtitle2'>
          View all clubs
        </Typography>
      </Box>

      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowActions
        renderRowActions={({ row }) => (
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
            <IconButton color='primary' component={Link} to={`/edit/${row.original.id}`}>
              <EditIcon />
            </IconButton>
            <IconButton color='error' component={Link} to={`/delete/${row.original.id}`}>
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      />
    </div>
  )
}

export default Home