import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";
import { IExpense } from "../components/App";

interface IExpenseContext {
    expenses: IExpense[];
    handleAddExpense: (expense: IExpense) => void;
    handleDeleteExpense: (expense: IExpense) => void;
    handleChangeExpense: (updatedExpense: IExpense) => void;
}

interface IExpensesProviderProps{
    Expenses: IExpense[];
}

const ExpensesContext = createContext<IExpenseContext>({
    expenses: [],
    handleAddExpense: () => {},
    handleDeleteExpense: () => {},
    handleChangeExpense: () => {},
});

const ExpensesProvider: FC<PropsWithChildren<IExpensesProviderProps>> = (props) => {
    const {children, Expenses} = props;
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

    return(
        <ExpensesContext.Provider
            value={{
                expenses, 
                handleAddExpense, 
                handleDeleteExpense, 
                handleChangeExpense,
            }}
        >
        {children}
        </ExpensesContext.Provider>
    )
}

export { ExpensesContext, ExpensesProvider };

