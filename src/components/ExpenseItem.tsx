import { Button, Input, Td, Tr } from "@chakra-ui/react";
import { FC, useState } from "react";
import { IExpense } from "./App";

interface IExpenseItemProps{
    expense: IExpense;
    onDelete: (expense: IExpense) => void;
    onChange: (expense: IExpense) => void;
}

const ExpenseItem: FC<IExpenseItemProps> = (props) =>{
    const {expense, onDelete, onChange} = props;
    const [isEditing, setIsEditing] = useState(false);
    let itemContent;
    if (isEditing){
        itemContent = (
        <>
        <Td>
            <Input
                value={expense.name}
                onChange={e => {
                    onChange({...expense, name: e.target.value});
                }}
            />
        </Td>
        <Td>
            <Input
                value={expense.sum}
                onChange={e => {
                    onChange({ ...expense, sum: e.target.value });
                }}
            />
        </Td>
        <Td>
            <Input
                value={expense.category}
                onChange={e => {
                    onChange({ ...expense, category: e.target.value });
                }}
            />
        </Td>
        <Td>
            <Input
                value={expense.date}
                onChange={e => {
                    onChange({ ...expense, date: e.target.value });
                }}
            />
        </Td>
        <Td>
            <Button onClick={() => setIsEditing(false)}>Save</Button>
        </Td>
        </>  
        )
    } else {
        itemContent = (
            <>
              <Td>{expense.name}</Td>
              <Td>{expense.sum}</Td>
              <Td>{expense.category}</Td>
              <Td>{expense.date}</Td>
              <Td>
                <Button onClick={() => setIsEditing(true)}>Edit</Button>
                <Button onClick={() => onDelete(expense)}>Delete</Button>
              </Td>
            </>
        );
    }

    return <Tr>{itemContent}</Tr>
}

export default ExpenseItem;