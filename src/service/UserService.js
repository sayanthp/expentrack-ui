export const signUpUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:8081/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return {
          success: true,
          message: result.message || 'Sign-up successful',
        };
      } else {
        return {
          success: false,
          message: result.message || 'Sign-up failed',
        };
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      return {
        success: false,
        message: 'An error occurred. Please try again later.',
      };
    }
  };
  