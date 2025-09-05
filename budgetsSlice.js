import { createSlice } from '@reduxjs/toolkit';


export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    // Updates the budget amount for a given category
editBudget: (state, action) => {
    editBudget: (state, action) => {
      state.map(budget => {
        if (budget.category === action.payload.category) {
          budget.amount = action.payload.amount;
        }
        return budget;
      });
    }
  }
});


export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
