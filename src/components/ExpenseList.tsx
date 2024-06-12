import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { ExpensesContext } from '../context/ExpensesProvider';
import ExpenseItem from './ExpenseItem';


const ExpenseList: FC = () => {
    const { expenses, handleDeleteExpense, handleChangeExpense } = useContext(ExpensesContext)!;
    const rows = expenses.map((expense, index) => (
        <ExpenseItem
        key={index}
        expense={expense}
        onDelete={handleDeleteExpense}
        onChange={handleChangeExpense}
        />
    ));

    return(
        <Table border='2px solid black' w='500px'>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Sum</Th>
                    <Th>Category</Th>
                    <Th>Date</Th>
                    <Th>Actions</Th>
                </Tr>
            </Thead>
            <Tbody>{rows}</Tbody>
        </Table>
    );
}

export default ExpenseList;