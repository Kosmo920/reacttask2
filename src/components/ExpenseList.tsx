import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { FC } from 'react';
import { IExpense } from './App';
import ExpenseItem from './ExpenseItem';

interface IExpenseListProps{
    expenses: IExpense[];
    onDeleteExpense: (expense: IExpense) => void;
    onChangeExpense: (expense: IExpense) => void;
}

const ExpenseList: FC <IExpenseListProps> = (props) =>{
    const {expenses, onDeleteExpense, onChangeExpense} = props;
    const rows = expenses.map((expense, index) => (
        <ExpenseItem
        key={index}
        expense={expense}
        onDelete={onDeleteExpense}
        onChange={onChangeExpense}
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