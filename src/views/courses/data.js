
const getCellColor = (level) => {
  switch (level) {
    case 0:
      return 'rgba(144, 238, 144, 0.4)'; // Color para "beginner"
    case 1:
      return 'rgba(173, 216, 230, 0.4)'; // Color para "intermediate"
    default:
      return 'white'; // Color por defecto
  }
};

export const columns = [
  { field: 'classId', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: 'Curso', flex: 1 },
  { field: 'description', headerName: 'Descripcion', flex: 1 },
  { field: 'classDate', headerName: 'Dia', flex: 1 },
  { field: 'professorId', headerName: 'Admin', flex: 1 },
  { field: 'groupId', headerName: 'Grupo', flex: 1,
    renderCell: (params) => (
      <div style={{ textAlign: 'center', width: '100%' }}>
        {params.value}
      </div>
    ),
    renderCell: (params) => (
    <div style={{ backgroundColor: getCellColor(params.value), textAlign: 'center', borderRadius: '4px' }}>
      {params.value}
    </div>
  ), 
  },
];

