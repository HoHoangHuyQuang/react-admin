
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockContact';

const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'age', headerName: 'Age', flex: 0.5 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 3 },
    { field: 'city', headerName: 'City', flex: 1.5 },
    { field: 'zipCode', headerName: 'Zip Code', flex: 1 },
]

const ContactsPage = () => {
    return(
        <Box sx={{ height: '75vh', width: '80vw' }}>
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    );
}
export default ContactsPage