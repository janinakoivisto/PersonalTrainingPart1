import React, {useEffect, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {Link} from 'react-router-dom';
import {Box, Button, Container} from '@mui/material';

const TrainingList = () => {
    const [trainings,
        setTrainings] = useState([]);

    useEffect(() => {
        fetch('https://traineeapp.azurewebsites.net/gettrainings').then((response) => response.json()).then((data) => {
            const trainings = data.map((item) => ({
                id: item.id,
                date: new Date(item.date).toLocaleDateString() + ' ' + new Date(item.date).toLocaleTimeString(),
                duration: item.duration,
                activity: item.activity,
                customer: `${item.customer.firstname} ${item.customer.lastname}`
            }));
            setTrainings(trainings);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    const columnDefs = [
        {
            headerName: 'Date',
            field: 'date',
            sortable: true,
            filter: true
        }, {
            headerName: 'Duration (min)',
            field: 'duration',
            sortable: true,
            filter: true
        }, {
            headerName: 'Activity',
            field: 'activity',
            sortable: true,
            filter: true
        }, {
            headerName: 'Customer',
            field: 'customer',
            sortable: true,
            filter: true
        }

    ];

    return (
        <Container>
            <Container>
                <div>
                    <div
                        className="ag-theme-alpine"
                        style={{
                        height: '700px',
                        width: '76%'
                    }}>
                        <h1>Training</h1>
                        <AgGridReact rowData={trainings} columnDefs={columnDefs}/>
                    </div>

                </div>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: '5rem'
                }}>
                    <Button component={Link} to="../" variant="contained">Go to Customers</Button>
                </Box>

            </Container>
        </Container>
    );

};

export default TrainingList;