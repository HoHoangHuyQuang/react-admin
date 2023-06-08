import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockContact";
import React from "react";
const columns = [
  { field: "id", headerName: "ID", flex: 0.5 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "age", headerName: "Age", flex: 0.5 },
  { field: "phone", headerName: "Phone", flex: 1 },
  { field: "address", headerName: "Address", flex: 3 },
  { field: "city", headerName: "City", flex: 1.5 },
  { field: "zipCode", headerName: "Zip Code", flex: 1 },
];

const ContactsPage = () => {
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);

  const handleRowClick = (params) => {
    setRowSelectionModel(params);
    // console.log(
    //   params.map((id) => mockDataContacts.find((row) => row.id === id))
    // );
  };
  return (
    <div>
      <div>
        <h1>Contact pages</h1>
      </div>

      <Box
        sx={{
          flex: "auto",
          width: "90vw",
        }}
      >
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
          onRowSelectionModelChange={(newRowSelectionModel) => {
            // setRowSelectionModel(newRowSelectionModel);
            handleRowClick(newRowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
        />
        <p>length {rowSelectionModel.length}</p>
        
      </Box>
    </div>
  );
};
export default ContactsPage;
