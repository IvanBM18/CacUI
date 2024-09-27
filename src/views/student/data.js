
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

export const columns = [
  {
    field: 'photo',
    headerName: 'Photo',
    width: 90,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Profile"
        style={{ width: 40, height: 40, borderRadius: '50%' }}
      />
    ),
  },
  { field: 'id', headerName: 'Codigo', width: 120 },
  { field: 'name', headerName: 'Nombre', width: 150 },
  { field: 'age', headerName: 'Edad', type: 'number', width: 110 },
  { field: 'email', headerName: 'Correo', width: 200 },
  
];

export const rows = [
  { photo: avatar1, id: 246808085, name: 'Juan Pérez', age: 28, email: 'juan@example.com' },
  { photo: avatar6, id: 252429305, name: 'María López', age: 34, email: 'maria@example.com' },
  { photo: avatar2, id: 294825846, name: 'María López', age: 34, email: 'maria@example.com' },
  { photo: avatar3, id: 252262549, name: 'Carlos Sánchez', age: 45, email: 'carlos@example.com' },
  { photo: avatar5, id: 290670518, name: 'Ana Gómez', age: 22, email: 'ana@example.com' },
  { photo: avatar1, id: 246808085, name: 'Juan Pérez', age: 28, email: 'juan@example.com' },
  { photo: avatar2, id: 294825846, name: 'María López', age: 34, email: 'maria@example.com' },
  { photo: avatar5, id: 276674424, name: 'Carlos Sánchez', age: 45, email: 'carlos@example.com' },
  { photo: avatar4, id: 244863814, name: 'Ana Gómez', age: 22, email: 'ana@example.com' },
  { photo: avatar1, id: 252429305, name: 'Juan Pérez', age: 28, email: 'juan@example.com' },
  { photo: avatar2, id: 252262549, name: 'María López', age: 34, email: 'maria@example.com' },
  { photo: avatar3, id: 229384769 , name: 'Carlos Sánchez', age: 45, email: 'carlos@example.com' },
  { photo: avatar4, id: 294825846, name: 'Ana Gómez', age: 22, email: 'ana@example.com' },
  { photo: avatar6, id: 229384769 , name: 'Juan Pérez', age: 28, email: 'juan@example.com' },
  { photo: avatar6, id: 286900080, name: 'Carlos Sánchez', age: 45, email: 'carlos@example.com' },
  { photo: avatar4, id: 276674424, name: 'Ana Gómez', age: 22, email: 'ana@example.com' },
];
