
import avatar1 from 'src/assets/images/avatars/1.png'
import avatar2 from 'src/assets/images/avatars/2.png'
import avatar3 from 'src/assets/images/avatars/3.png'
import avatar4 from 'src/assets/images/avatars/4.png'
import avatar5 from 'src/assets/images/avatars/5.png'



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

  { field: 'siiauCode', headerName: 'Codigo', width: 120 },
  { field: 'firstName', headerName: 'Nombre', width: 180 },
  { field: 'lastName', headerName: 'Apellido', width: 180 },
  { field: 'email', headerName: 'Correo', width: 290 },
  { field: 'group', headerName: 'Grupo', width: 200, 
    // renderCell: (params) => (
    //   <div style={{ textAlign: 'center', width: '100%' }}>
    //     {params.value}
    //   </div>
    // ),
  //   renderCell: (params) => (
  //   <div style={{ backgroundColor: getCellColor(params.value), textAlign: 'center', borderRadius: '4px' }}>
  //     {params.value}
  //   </div>
  // ), 
  },
  
];
