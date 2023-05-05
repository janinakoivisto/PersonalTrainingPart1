import React, {useEffect, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {Link} from 'react-router-dom';
import {Box, Button, Container} from '@mui/material';


const CustomerList = () => {
    const [customers,
        setCustomers] = useState([]);

    useEffect(() => {
        fetch('https://traineeapp.azurewebsites.net/api/customers')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCustomers(data.content)
            });
    }, []);

    const columnDefs = [
        {
            headerName: 'Name',
            field: 'firstname',
            sortable: true,
            filter: true
        }, {
            headerName: 'Last name',
            field: 'lastname',
            sortable: true,
            filter: true
        }, {
            headerName: 'Street address',
            field: 'streetaddress',
            sortable: true,
            filter: true
        }, {
            headerName: 'Postcode',
            field: 'postcode',
            sortable: true,
            filter: true
        }, {
            headerName: 'City',
            field: 'city',
            sortable: true,
            filter: true
        }, {
            headerName: 'Email',
            field: 'email',
            sortable: true,
            filter: true
        }, {
            headerName: 'Phone',
            field: 'phone',
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
                        height: '500px',
                        width: '74%'
                    }}>
                        <h1>Customers</h1>
                        <AgGridReact rowData={customers} columnDefs={columnDefs}/>
                    </div>

                </div>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: '5rem'
                }}>
                    <Button component={Link} to="../trainings" variant="contained">Go to Training</Button>
                </Box>

            </Container>
        </Container>
    );

};

export default CustomerList;
