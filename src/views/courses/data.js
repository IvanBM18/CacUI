

export const columns = [
  { field: 'name', headerName: 'Curso', flex: 3 },
  { field: 'admin', headerName: 'Instructor', flex: 2 },
  { field: 'dia', headerName: 'Dia', flex: 1 },
  { field: 'hora', headerName: 'Hora', flex: 1 },
];

export const clases = [
  { 
    class_id: 1,
    name: 'Strings I', admin: 'Elena Morales',
    dia: '2024-03-23', hora: '13:00',
    subtemas: [
      'Strings',
      'Big num',
      'Manejo de caracteres',
      'Sistemas numericos'
    ]
  },
  { 
    class_id: 3,
    name: 'Topicos Iniciales', admin: 'Juan Alvarado',
    dia: '2024-03-23', hora: '18:00',
    subtemas: [
      'Programacion Competitiva',
      'Competencias',
      'Club',
      'Jueces en linea'
    ]
  },
  { 
    class_id: 2,
    name: 'STL, Ordenamiento, Greedy', admin: 'María Gonzalez',
    dia: '2024-03-23', hora: '14:00',
    subtemas: [
      'Complejidad',
      'Ejemplos de problemas',
      'Estrategias para estudiar',
    ]
  },
  { 
    class_id: 4,
    name: 'Busqueda Binaria', admin: 'Ana Torres',
    dia: '2024-03-23', hora: '14:00',
    subtemas: [
      'Busqueda sobre arreglos',
      'Sobre funciones',
      'Fraccionaria'
    ]
  },
  { 
    class_id: 5,
    name: 'Grafos I', admin: 'Carlos Perez',
    dia: '2024-03-23', hora: '15:00',
    subtemas: [
      'Definicion de grafos',
      'DFS',
      'BFS',
      'Topological'
    ]
  },
  { 
    class_id: 6,
    name: 'Programacion Dinamica I', admin: 'Juan Alvarado', 
    dia: '2024-03-23', hora: '19:00',
    subtemas: [
      'Monedas',
      'Caminos',
      'Fibonacci',
      'Knapsack'
    ]
  },
  { 
    class_id: 7,
    name: 'Algoritmos Miscelaneos II', admin: 'María López',
    dia: '2024-03-23', hora: '18:30',
    subtemas: [
      'Sumatorias',
      'Comprension de datos',
      'Offline sum',
      'Bases numericas'
    ]
  },
  { 
    class_id: 8,
    name: 'Teoria de numeros I', admin: 'Carlos Sánchez',
    dia: '2024-03-23', hora: '12:00',
    subtemas: [
      'Criterios de visibilidad',
      'Modulo',
      'Test primalidad',
      'Criba'
    ]
  },
  { 
    class_id: 9,
    name: 'Combinatoria I', admin: 'Maria Gonzalez', 
    dia: '2024-03-23', hora: '13:30',
    subtemas: [
      'Conteos',
      'Acomodos',
      'Factoriales'
    ]
  },
  { 
    class_id: 10,
    name: 'Grafos II', admin: 'Juan Pérez',
    dia: '2024-03-23', hora: '14:30',
    subtemas: [
      'Graficos implicitos',
      'topological',
      'Dijkstra'
    ]
  },
  { 
    class_id: 11,
    name: 'Teoria de numeros y Combinatoria II', admin: 'María López', 
    dia: '2024-03-23', hora: '18:30',
    subtemas: [
      'GCD',
      'LCM',
      'Permutaciones',
      'Inclusion Exclusion'
    ]
  },
];

