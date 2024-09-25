
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'


const DataAlumnos = [
  {
    avatar: { src: avatar1},
    user: {
      name: 'Josefina Rubio',
      new: true,
      registered: 'Jan 1, 2023',
    },
    group: {name: 'Basicos', color: 'success'},
    usage: {
      value: 50,
      period: 'Jun 11, 2023 - Jul 10, 2023',
      color: 'success',
    },
    code: '219747661',
    activity: 'INCO',
  },
  {
    avatar: { src: avatar2 },
    user: {
      name: 'Moises Martinez',
      new: false,
      registered: 'Jan 1, 2023',
    },
    group: {name: 'Basicos', color: 'success'},
    usage: {
      value: 22,
      period: 'Jun 11, 2023 - Jul 10, 2023',
      color: 'info',
    },
    code: '216735661',
    activity: 'INFO',
  },
  {
    avatar: { src: avatar3},
    user: { name: 'Argenis Lopez', new: true, registered: 'Jan 1, 2023' },
    group: {name: 'Basicos', color: 'success'},
    usage: {
      value: 74,
      period: 'Jun 11, 2023 - Jul 10, 2023',
      color: 'warning',
    },
    code: '219747162',
    activity: 'INCO',
  },
  {
    avatar: { src: avatar4 },
    user: { name: 'Dafne Crespo', new: true, registered: 'Jan 1, 2023' },
    group: {name: 'Basicos', color: 'success'},
    usage: {
      value: 98,
      period: 'Jun 11, 2023 - Jul 10, 2023',
      color: 'danger',
    },
    code: '219586925',
    activity: 'INCO',
  },
  {
    avatar: { src: avatar5},
    user: {
      name: 'Alexa Salcedo',
      new: true,
      registered: 'Jan 1, 2023',
    },
    group: {name: 'Intermedios', color: 'danger'},
    usage: {
      value: 22,
      period: 'Jun 11, 2023 - Jul 10, 2023',
      color: 'primary',
    },
    code: '219747658',
    activity: 'INCO',
  },
  {
    avatar: { src: avatar6},
    user: {
      name: 'Ivan Barba',
      new: true,
      registered: 'Jan 1, 2023',
    },
    group: {name: 'Intermedios', color: 'danger'},
    usage: {
      value: 43,
      period: 'Jun 11, 2023 - Jul 10, 2023',
      color: 'success',
    },
    code: '219747662',
    activity: 'INCO',
  },
];

export default DataAlumnos;