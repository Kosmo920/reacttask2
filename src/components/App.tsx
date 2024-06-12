import { Box, ChakraProvider } from '@chakra-ui/react';
import { FC } from 'react';
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

const Expenses: IExpense[] = [
  { name: 'ATB', sum: '10$', category: 'Products', date: '05.05.2023' },
  { name: 'TBA', sum: '20$', category: 'Cars', date: '19.10.2023' },
  { name: 'GASD', sum: '190$', category: 'Gas', date: '22.01.2024' },
  { name: 'TGVZX', sum: '220$', category: 'Games', date: '12.07.2024' },
  { name: 'TRQW', sum: '1230$', category: 'Bank', date: '02.09.2024' },
];

const App: FC = () => {

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

export default App;
