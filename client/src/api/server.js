import React, { useEffect, useState } from "react";
import useStore from "../context/index";

export const userConnection = () => {
  const { assignAccessToken, addUser: addUserProfile, assignAuth } = useStore();
  // Tests ------------------------------------------------------------
  // Test method to connect to backend
  const connect = async () => {
    try {
      const response = await fetch(
        "http://207.246.75.81:3800/api/v1/testthrou",
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
      const response = await fetch("http://207.246.75.81:3800/api/v1/user", {
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
      const response = await fetch("http://207.246.75.81:3800/api/v1/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data[0]);
      assignAccessToken(data[0].token.toString());
      addUserProfile(data[0]);
      assignAuth({
        isAuthenticated: true,
        accessToken: data[0].token.toString(),
        userId: data[0]._id.toString(),
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Method to get user data from database, with access token in header

  const getUser = async (token) => {
    try {
      const response = await fetch("http://207.246.75.81:3800/api/v1/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-acces-token": `${token}`,
        },
      });
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Method to store user wallet address and update it's profiile in the database
  const updateUserById = async (userId, newData) => {
    try {
      const response = await fetch(
        `http://http://207.246.75.81:3800/api/v1/user/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        }
      );
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Mail ---------------------------------------------------------------------------

  return {
    connect,
    addUser,
    logIn,
    getUser,
  };
};

export const EmailHandler = () => {
  // Method to send an email to a user
  const sendEmail = async (emailData, token) => {
    try {
      const response = await fetch("http://207.246.75.81:3800/api/v1/mail/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
