
import avatar1 from 'src/assets/images/avatars/1.png'
import avatar2 from 'src/assets/images/avatars/2.png'
import avatar3 from 'src/assets/images/avatars/3.png'
import avatar4 from 'src/assets/images/avatars/4.png'
import avatar5 from 'src/assets/images/avatars/5.png'



const getCellColor = (level) => {
  switch (level) {
    case 'Basico':
      return 'rgba(144, 238, 144, 0.4)'; // Color para "beginner"
    case 'Intermedio':
      return 'rgba(173, 216, 230, 0.4)'; // Color para "intermediate"
    case 'Avanzado':
      return 'rgba(240, 128, 128, 0.4)'; // Color para "advanced"
    default:
      return 'white'; // Color por defecto
  }
};

export const columns = [
  {
    field: 'photo',
    headerName: 'Photo',
    width: 150,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <img
        src={params.value}
        alt="Profile"
        style={{ width: 50, height: 50, borderRadius: '50%' }}
      />
      </div>
    ),

  },
  { field: 'fullname', headerName: 'Nombre', width: 180,
    renderCell: (params) => (
      `${params.row.firstName} ${params.row.lastName}`
    ) 
   },
  { field: 'id', headerName: 'Codigo', width: 120 },
  { field: 'group', headerName: 'Grupo', width: 200, 
    renderCell: (params) => (
      <div style={{ textAlign: 'center', width: '100%' }}>
        {params.value}
      </div>
    ),
    renderCell: (params) => (
    <div style={{ backgroundColor: getCellColor(params.value), textAlign: 'center', borderRadius: '4px' }}>
      {params.value}
    </div>
  ), },
  
];

export const students = [
 {
    photo: avatar3,
    firstName: 'Fernando',
    lastName: 'Jiménez',
    id: '219747670',
    register_date: '2023-04-10',
    correo: 'fernando.jimenez@alumnos.udg.mx',
    group: 'Basico'
  },
  {
    photo: avatar2,
    firstName: "María",
    lastName: "Hernández",
    id: "219747671",
    register_date: "2024-05-03",
    correo: "maria.hernandez@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar4,
    firstName: "Luis",
    lastName: "García",
    id: "219747672",
    register_date: "2024-07-28",
    correo: "luis.garcia@alumnos.udg.mx",
    group: 'Avanzado'
  },
  {
    photo: avatar1,
    firstName: "Ana",
    lastName: "Martínez",
    id: "219747673",
    register_date: "2023-02-28",
    correo: "ana.martinez@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar3,
    firstName: "Carlos",
    lastName: "Pérez",
    id: "219747674",
    register_date: "2023-06-13",
    correo: "carlos.perez@alumnos.udg.mx",
    group: 'Intermedio'
  },
  {
    photo: avatar4,
    firstName: "Elena",
    lastName: "Torres",
    id: "219747675",
    register_date: "2024-04-15",
    correo: "elena.torres@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar2,
    firstName: "Andrés",
    lastName: "Sánchez",
    id: "219747676",
    register_date: "2023-04-18",
    correo: "andres.sanchez@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar5,
    firstName: "Patricia",
    lastName: "Morales",
    id: "219747677",
    register_date: "2023-07-23",
    correo: "patricia.morales@alumnos.udg.mx",
    group: 'Intermedio'
  },
  {
    photo: avatar1,
    firstName: "José",
    lastName: "González",
    id: "219747678",
    register_date: "2023-10-13",
    correo: "jose.gonzalez@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar2,
    firstName: "Sofía",
    lastName: "Jiménez",
    id: "219747679",
    register_date: "2023-05-23",
    correo: "sofia.jimenez@alumnos.udg.mx",
    group: 'Intermedio'
  },
  {
    photo: avatar1,
    firstName: "Ricardo",
    lastName: "Ramírez",
    id: "219747680",
    register_date: "2024-05-26",
    correo: "ricardo.ramirez@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar3,
    firstName: "Lucía",
    lastName: "Vázquez",
    id: "219747681",
    register_date: "2023-04-11",
    correo: "lucia.vazquez@alumnos.udg.mx",
    group: 'Avanzado'
  },
  {
    photo: avatar1,
    firstName: "Javier",
    lastName: "Moreno",
    id: "219747682",
    register_date: "2023-12-18",
    correo: "javier.moreno@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar5,
    firstName: "Valentina",
    lastName: "Cervantes",
    id: "219747683",
    register_date: "2023-12-01",
    correo: "valentina.cervantes@alumnos.udg.mx",
    group: 'Avanzado'
  },
  {
    photo: avatar4,
    firstName: "Sebastián",
    lastName: "Mendoza",
    id: "219747684",
    register_date: "2023-01-20",
    correo: "sebastian.mendoza@alumnos.udg.mx",
    group: 'Avanzado'
  },
  {
    photo: avatar2,
    firstName: "Camila",
    lastName: "Rojas",
    id: "219747685",
    register_date: "2024-07-15",
    correo: "camila.rojas@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar1,
    firstName: "Diego",
    lastName: "Cruz",
    id: "219747686",
    register_date: "2023-08-08",
    correo: "diego.cruz@alumnos.udg.mx",
    group: 'Intermedio'
  },
  {
    photo: avatar3,
    firstName: "Gabriela",
    lastName: "Salazar",
    id: "219747687",
    register_date: "2024-01-07",
    correo: "gabriela.salazar@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar4,
    firstName: "Ángel",
    lastName: "Fuentes",
    id: "219747688",
    register_date: "2023-01-27",
    correo: "angel.fuentes@alumnos.udg.mx",
    group: 'Avanzado'
  },
  {
    photo: avatar5,
    firstName: "Natalia",
    lastName: "Alvarado",
    id: "219747689",
    register_date: "2024-03-17",
    correo: "natalia.alvarado@alumnos.udg.mx",
    group: 'Intermedio'
  }
];
