
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
  { field: 'id', headerName: 'Codigo', width: 120 },
  { field: 'firstName', headerName: 'Nombre', width: 180 },
  { field: 'lastName', headerName: 'Apellido', width: 180 },
  { field: 'email', headerName: 'Correo', width: 290 },
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
    firstName: 'Ivan',
    lastName: 'Barba macias',
    student_id: '0',
    id: '219747662',
    registerDate: '2023-04-10',
    siiauCode: '219747662',
    email: 'ivan.barba7476@alumnos.udg.mx',
    group: 'Intermedio',
    codeProfiles: {
      codeForces: 'ivanBM',
      vJudge: 'ivanBM18',
    }
  },
  {
    photo: avatar2,
    firstName: "María",
    lastName: "Hernández",
    id: "219747671",
    siiauCode: "219747671",
    registerDate: "2024-05-03",
    email: "maria.hernandez@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar4,
    firstName: "Luis",
    lastName: "García",
    id: "219747672",
    siiauCode: "219747672",
    registerDate: "2024-07-28",
    email: "luis.garcia@alumnos.udg.mx",
    group: 'Avanzado'
  },
  {
    photo: avatar1,
    firstName: "Ana",
    lastName: "Martínez",
    id: "219747673",
    siiauCode: "219747673",
    registerDate: "2023-02-28",
    email: "ana.martinez@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar3,
    firstName: "Carlos",
    lastName: "Pérez",
    id: "219747674",
    siiauCode: "219747674",
    registerDate: "2023-06-13",
    email: "carlos.perez@alumnos.udg.mx",
    group: 'Intermedio'
  },
  {
    photo: avatar4,
    firstName: "Elena",
    lastName: "Torres",
    id: "219747675",
    siiauCode: "219747675",
    registerDate: "2024-04-15",
    email: "elena.torres@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar2,
    firstName: "Andrés",
    lastName: "Sánchez",
    id: "219747676",
    siiauCode: "219747676",
    registerDate: "2023-04-18",
    email: "andres.sanchez@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar5,
    firstName: "Patricia",
    lastName: "Morales",
    id: "219747677",
    siiauCode: "219747677",
    registerDate: "2023-07-23",
    email: "patricia.morales@alumnos.udg.mx",
    group: 'Intermedio'
  },
  {
    photo: avatar1,
    firstName: "José",
    lastName: "González",
    id: "219747678",
    siiauCode: "219747678",
    registerDate: "2023-10-13",
    email: "jose.gonzalez@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar2,
    firstName: "Sofía",
    lastName: "Jiménez",
    id: "219747679",
    siiauCode: "219747679",
    registerDate: "2023-05-23",
    email: "sofia.jimenez@alumnos.udg.mx",
    group: 'Intermedio'
  },
  {
    photo: avatar1,
    firstName: "Ricardo",
    lastName: "Ramírez",
    id: "219747680",
    siiauCode: "219747680",
    registerDate: "2024-05-26",
    email: "ricardo.ramirez@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar3,
    firstName: "Lucía",
    lastName: "Vázquez",
    id: "219747681",
    siiauCode: "219747681",
    registerDate: "2023-04-11",
    email: "lucia.vazquez@alumnos.udg.mx",
    group: 'Avanzado'
  },
  {
    photo: avatar1,
    firstName: "Javier",
    lastName: "Moreno",
    id: "219747682",
    siiauCode: "219747682",
    registerDate: "2023-12-18",
    email: "javier.moreno@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar5,
    firstName: "Valentina",
    lastName: "Cervantes",
    id: "219747683",
    siiauCode: "219747683",
    registerDate: "2023-12-01",
    email: "valentina.cervantes@alumnos.udg.mx",
    group: 'Avanzado'
  },
  {
    photo: avatar4,
    firstName: "Sebastián",
    lastName: "Mendoza",
    id: "219747684",
    siiauCode: "219747684",
    registerDate: "2023-01-20",
    email: "sebastian.mendoza@alumnos.udg.mx",
    group: 'Avanzado'
  },
  {
    photo: avatar2,
    firstName: "Camila",
    lastName: "Rojas",
    id: "219747685",
    siiauCode: "219747685",
    registerDate: "2024-07-15",
    email: "camila.rojas@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar1,
    firstName: "Diego",
    lastName: "Cruz",
    id: "219747686",
    siiauCode: "219747686",
    registerDate: "2023-08-08",
    email: "diego.cruz@alumnos.udg.mx",
    group: 'Intermedio'
  },
  {
    photo: avatar3,
    firstName: "Gabriela",
    lastName: "Salazar",
    id: "219747687",
    siiauCode: "219747687",
    registerDate: "2024-01-07",
    email: "gabriela.salazar@alumnos.udg.mx",
    group: 'Basico'
  },
  {
    photo: avatar4,
    firstName: "Ángel",
    lastName: "Fuentes",
    id: "219747688",
    siiauCode: "219747688",
    registerDate: "2023-01-27",
    email: "angel.fuentes@alumnos.udg.mx",
    group: 'Avanzado'
  },
  {
    photo: avatar5,
    firstName: "Natalia",
    lastName: "Alvarado",
    id: "219747689",
    siiauCode: "219747689",
    registerDate: "2024-03-17",
    email: "natalia.alvarado@alumnos.udg.mx",
    group: 'Intermedio'
  }
];
