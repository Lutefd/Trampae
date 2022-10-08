import { IoBarChartSharp } from 'react-icons/io5';
import { FaWpforms } from 'react-icons/fa';
import { MdQueryStats } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
const links = [
  {
    id: 1,
    text: 'Dashboard',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'Trampos',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    id: 1,
    text: 'Adicionar Trampo',
    path: 'add-job',
    icon: <FaWpforms />,
  },
  {
    id: 1,
    text: 'Perfil',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;
