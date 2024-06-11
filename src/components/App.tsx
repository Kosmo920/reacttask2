import { Box } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
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
  const [expenses, setExpenses] = useState<IExpense[]>(Expenses);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expense: IExpense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (expenseToDelete: IExpense) => {
    setExpenses(expenses.filter(expense => expense !== expenseToDelete));
  };

  const handleChangeExpense = (updatedExpense: IExpense) => {
    setExpenses(expenses.map(expense => {
      if (expense.name === updatedExpense.name) {
        return updatedExpense;
      } else {
        return expense;
      }
    }));
  };

  return (
    <Box>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={handleDeleteExpense}
        onChangeExpense={handleChangeExpense}
      />
      <Statistics expenses={expenses} />
    </Box>
  );
}

export default App;
