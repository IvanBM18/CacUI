export const columns = [
    { field: 'identifier', headerName: 'Handle', flex: 3, resizable:false},
    { field: 'siiauCode', headerName: 'Codigo', flex:2,  resizable:false, valueGetter: (value,row) => row.student?.siiauCode || 'N/A' },
    { field: 'email', headerName: 'Correo', flex:2, resizable:false, valueGetter: (value,row) => row.student?.email || 'N/A'},
    { field: 'firstName', headerName: 'Nombre', flex:3, resizable:false, valueGetter: (value,row) => row.student?.firstName || 'N/A'},
    { field: 'lastName', headerName: 'Apellido', flex:3, resizable:false, valueGetter: (value,row) => row.student?.lastName || 'N/A'},
    ];
  