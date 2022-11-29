const Headers = {
  "Content-Type": "application/json",
};

const USERS_API_URL = "https://assessment-users-backend.herokuapp.com/users";

export const getUsers = async () => {
  try {
    const response = await fetch(USERS_API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
