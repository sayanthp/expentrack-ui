// create a new budget or update the existing one
export const createBudget = async (data) => {
    try {
        const token = data.user.token;
        const budgetData = data.budget;

        const response = await fetch('http://localhost:8081/budget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(budgetData),
        });

        const result = await response.json();

        if (response.ok) {
            return {
                success: true,
                message: result.message || 'Transaction added successfully',
                body: result
            };
        } else {
            return {
                success: false,
                message: result.message || 'Could not add the transaction',
            };
        }

    } catch (error) {
        console.error('Error creating budget:', error);
        return { success: false, message: error.message };
    }
};

// fetch the existing budget for the user
export const getBudget = async (data) => {
    try {

        const token = data.user.token;
        const userId = data.user.userId;

        const response = await fetch(`http://localhost:8081/budget/user/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const result = await response.json();

        if (response.ok) {
            return {
                success: true,
                message: result.message || 'Budget fetched successfully',
                body: result
            };
        } else {
            return {
                success: false,
                message: result.message || 'Could not fetch the budget',
            };
        }

    } catch (error) {
        console.error('Error fetching budget:', error);
        return { success: false, message: error.message };
    }
};
