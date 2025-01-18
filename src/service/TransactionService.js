export const createTransaction = async (data) => {
    try {

      const token = data.user.token;
      const transactionData = data.transactionData;
      transactionData.userId = data.user.userId;

      const response = await fetch('http://localhost:8081/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(transactionData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return {
          success: true,
          message: result.message || 'Transaction added successfully',
        };
      } else {
        return {
          success: false,
          message: result.message || 'Could not add the transaction',
        };
      }
    } catch (error) {
      console.error('Error during transaction-save:', error);
      return {
        success: false,
        message: 'An error occurred. Please try again later.',
      };
    }
  };