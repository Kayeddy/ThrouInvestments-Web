import useAuthStore from "../context/useAuthStore";
import useUserStore from "../context/useUserStore";

export const userConnection = () => {
  const { addUser: addUserProfile } = useUserStore();
  const { assignAccessToken, assignAuth } = useAuthStore();
  // Tests ------------------------------------------------------------
  // Test method to connect to backend

  const connect = async () => {
    try {
      const response = await fetch(
        "https://throu.online:3800/api/v1/testthrou",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.text();

      console.log(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // User interaction --------------------------------------------------------
  // Method to add users to database
  const addUser = async (userData) => {
    try {
      const response = await fetch("https://throu.online:3800/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Method to log users in with email and password in body

  const logIn = async (userData) => {
    try {
      const response = await fetch("https://throu.online:3800/api/v1/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Error: ${response.status} ${response.statusText} - ${errorMessage}`
        );
      }

      const data = await response.json();
      const userInformation = data[0];
      console.log(userInformation);

      if (
        userInformation &&
        typeof userInformation === "object" &&
        userInformation.token &&
        typeof userInformation.token === "string" &&
        userInformation._id &&
        typeof userInformation._id === "string"
      ) {
        assignAccessToken(userInformation.token);
        addUserProfile(userInformation);
        assignAuth({
          isAuthenticated: true,
          accessToken: userInformation.token,
          userId: userInformation._id,
        });
        return userInformation;
      } else {
        throw new Error("Data validation failed");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Method to get user data from database, with access token in header

  const getUser = async (id, token) => {
    try {
      const response = await fetch(
        `https://throu.online:3800/api/v1/user/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      );
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Method to update a user's data using the ID
  const updateUserById = async (userId, newData, token) => {
    try {
      const response = await fetch(
        `https://throu.online:3800/api/v1/user/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
          body: JSON.stringify(newData),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Error: ${response.status} ${response.statusText} - ${errorMessage}`
        );
      }

      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Method to generate Sumsub auth token for Sumsub verification
  const generateSumsubToken = async (userId, token) => {
    try {
      const response = await fetch(
        `https://throu.online:3800/api/v1/user/${userId}/sumsubaccesstoken`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "x-access-token": token,
          },
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Error: ${response.status} ${response.statusText} - ${errorMessage}`
        );
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getUserWalletStateById = async (userId, token) => {
    try {
      const response = await fetch(
        `https://throu.online:3800/api/v1/user/${userId}/iswalletassigned`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      );

      console.log();

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Error: ${response.status} ${response.statusText} - ${errorMessage}`
        );
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Method that allows users to update their password
  const updateUserPassword = async (newPassword, token) => {};

  //File management

  const uploadDocumentFile = async (formData) => {
    try {
      const response = await fetch(`https://throu.online:3800/api/v1/file`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Error: ${response.status} ${response.statusText} - ${errorMessage}`
        );
      }

      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const retrieveDocumentFileById = async () => {};

  return {
    connect,
    addUser,
    logIn,
    getUser,
    updateUserById,
    generateSumsubToken,
    getUserWalletStateById,
    uploadDocumentFile,
  };
};

export const EmailHandler = () => {
  // Method to send an email to a user
  const sendEmail = async (emailData, token) => {
    try {
      const response = await fetch("https://throu.online:3800/api/v1/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${token}`,
        },
        body: JSON.stringify(emailData),
      });
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    sendEmail,
  };
};
