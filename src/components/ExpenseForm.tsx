import { Box, Button, Input } from "@chakra-ui/react";
import { FC, useContext, useState } from "react";
import { ExpensesContext } from "../context/ExpensesProvider";

const ExpenseForm: FC = () => {
  const { handleAddExpense } = useContext(ExpensesContext)!;
  const [name, setName] = useState('');
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

    return(
        <Box w='500px'>
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
        handleAddExpense({ name, sum, category, date });
      }}>Додати витрату</Button>
    </Box>
  );
}

export default ExpenseForm;