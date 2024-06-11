import { Box, Input, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { IExpense } from './App';

interface IStatisticsProps{
    expenses: IExpense[];
}

const Statistics: FC<IStatisticsProps> = (props) => {
    const {expenses} = props;
    const [filter, setFilter] = useState('');
    const filteredExpenses = expenses.filter(expense =>
        expense.date.includes(filter)
    );
    return (
        <Box border='2px solid black' w='500px' p='4' mt='4'>
            <Input
                placeholder='Введіть дату'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <Table border='2px solid black' w='500px'>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Sum</Th>
                        <Th>Category</Th>
                        <Th>Date</Th>
                    </Tr>
                </Thead>
            <Tbody>
            {filteredExpenses.map((expense, index) => (
                <Tr key={index}>
                  <Td>{expense.name}</Td>
                  <Td>{expense.sum}</Td>
                  <Td>{expense.category}</Td>
                  <Td>{expense.date}</Td>
                </Tr>
            ))}
            </Tbody>
          </Table>
        </Box>
      );
};

export default Statistics;