import AppBarContext from '@/context/appBarContext';
import { useContext } from 'react';

const useAppBar = () => useContext(AppBarContext);

export default useAppBar;
