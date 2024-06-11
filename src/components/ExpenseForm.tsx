import { Box, Button, Input } from "@chakra-ui/react";
import { FC, useState } from "react";
import { IExpense } from "./App";

interface IExpenseFormProps {
    onAddExpense: (expense: IExpense) => void;
}

const ExpenseForm: FC<IExpenseFormProps> = (props) => {
    const {onAddExpense} = props;
    const [name, setName] = useState('');
    const [sum, setSum] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    return(
        <Box border='2px solid black' w='500px'>
      <Input
        placeholder='Введіть назву'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder='Введіть сумму'
        value={sum}
        onChange={(e) => setSum(e.target.value)}
      />
      <Input
        placeholder='Введіть категорію'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Input
        placeholder='Введіть дату'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button onClick={() => {
        setName('');
        setSum('');
        setCategory('');
        setDate('');
        onAddExpense({ name, sum, category, date });
      }}>Додати витрату</Button>
    </Box>
  );
}

export default ExpenseForm;