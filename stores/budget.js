import { defineStore } from 'pinia';

export const useBudgetStore = defineStore('budget', {
    state: () => ({
        // 總預算
        totalBudget: [],
        // 預算分配
        budgetAllocation: [],
        // 年度預算
        yearlyBudget: []
    }),

    getters: {
        // 獲取總覽數據
        overview: (state) => {
            const monthlyTotal = state.budgetAllocation.reduce((sum, item) => sum + item.total, 0);
            const monthlySpent = state.budgetAllocation.reduce((sum, item) => sum + item.amount, 0);
            
            return {
                monthlyBudget: monthlyTotal,
                monthlySpent: monthlySpent,
                monthlyRemaining: monthlyTotal - monthlySpent,
                dailyAvailable: (monthlyTotal - monthlySpent) / 30
            };
        },

        // 獲取月度預算項目
        monthlyBudgets: (state) => {
            return {
                title: 'Monthly',
                amount: state.budgetAllocation.reduce((sum, item) => sum + item.amount, 0),
                total: state.budgetAllocation.reduce((sum, item) => sum + item.total, 0),
                items: state.budgetAllocation
            };
        },

        // 獲取年度預算項目
        yearlyBudgets: (state) => {
            return {
                title: 'Yearly',
                amount: state.yearlyBudget.reduce((sum, item) => sum + item.amount, 0),
                total: state.yearlyBudget.reduce((sum, item) => sum + item.total, 0),
                items: state.yearlyBudget
            };
        }
    },

    actions: {
        // 新增預算項目
        addBudgetItem(type, item) {
            const newItem = {
                id: Date.now().toString(),
                ...item
            };

            if (type === 'monthly') {
                this.budgetAllocation.push(newItem);
            } else if (type === 'yearly') {
                this.yearlyBudget.push(newItem);
            }
        },

        // 更新預算項目
        updateBudgetItem(type, itemId, updates) {
            const targetArray = type === 'monthly' ? this.budgetAllocation : this.yearlyBudget;
            const itemIndex = targetArray.findIndex(item => item.id === itemId);
            
            if (itemIndex !== -1) {
                targetArray[itemIndex] = {
                    ...targetArray[itemIndex],
                    ...updates
                };
            }
        },

        // 刪除預算項目
        deleteBudgetItem(type, itemId) {
            if (type === 'monthly') {
                this.budgetAllocation = this.budgetAllocation.filter(item => item.id !== itemId);
            } else if (type === 'yearly') {
                this.yearlyBudget = this.yearlyBudget.filter(item => item.id !== itemId);
            }
        },

        // 新增群組
        addGroup(group) {
            this.totalBudget.push({
                id: Date.now().toString(),
                ...group
            });
        }
    }
}); 