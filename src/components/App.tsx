import { Box, ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ExpensesProvider } from '../context/ExpensesProvider';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import Statistics from './Statistics';

export interface IExpense {
  name: string;
  sum: string;
  category: string;
  date:string;
}

interface IVagon{
  VagonNumber: string;
  VagonType: string;
  CargoName: string;
  OwnerName: string;
  DepartureStationName: string;
}

const Expenses: IExpense[] = [
  { name: 'ATB', sum: '10$', category: 'Products', date: '05.05.2023' },
  { name: 'TBA', sum: '20$', category: 'Cars', date: '19.10.2023' },
  { name: 'GASD', sum: '190$', category: 'Gas', date: '22.01.2024' },
  { name: 'TGVZX', sum: '220$', category: 'Games', date: '12.07.2024' },
  { name: 'TRQW', sum: '1230$', category: 'Bank', date: '02.09.2024' },
];

const queryClient = new QueryClient();

const ExpensesPage: FC= () =>{
  return (
      <ChakraProvider>
      <ExpensesProvider Expenses={Expenses}>
        <Box>
          <ExpenseForm/>
          <ExpenseList/>
          <Statistics/>
        </Box>
      </ExpensesProvider>
    </ChakraProvider>
  );
}

const Vagons: FC = () => {
  const {isLoading, data} = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(
        'https://rwl.artport.pro/commercialAgent/hs/CarrWorkApp/VagonInfo'
      ).then((res) => res.json()),
  });

  if (isLoading){
    return <Box>Завантаження....</Box>
  }

  return(
    <Box>
      {data.Vagons.map((vagon: IVagon) => (
        <Box border='2px solid black'>
        VagonNumber:{vagon.VagonNumber}<br/>
        VagonType:{vagon.VagonType}<br/>
        CargoName:{vagon.CargoName}<br/>
        OwnerName: {vagon.OwnerName}<br/>
        DepartureStationName: {vagon.DepartureStationName}<br/>
        </Box>
      ))}

    </Box>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Box>
      <Link to={'/ExpensesPage'}>Expenses</Link><br/>
      <Link to={'/Vagons'}>Vagons</Link>
      </Box>
  },
  {
    path: "ExpensesPage",
    element: <ExpensesPage></ExpensesPage>
  },
  {
    path: "Vagons",
    element:
    <QueryClientProvider client={queryClient}>
     <Vagons></Vagons>
     </QueryClientProvider>
  }
])

const App: FC = () => {

  return (
  <RouterProvider router={router}/>
  );
}

export default App;
