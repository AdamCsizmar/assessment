const USERS_API_URL = "https://assessment-users-backend.herokuapp.com/users";

export type UserDetails = {
  first_name: string;
  last_name: string;
  status: string;
  created_at: string;
  updated_at: string;
  id: number;
}

export const getUsers = async () => {
  try {
    const response = await fetch(USERS_API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByID = async (id: number) => {
  try {
    const response = await fetch(`${USERS_API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const addUser = async (user: Partial<UserDetails>) => {
  try {
    const response = await fetch(USERS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


export const editUser = async ( user: Partial<UserDetails>) => {
  try {
    const response = await fetch(`${USERS_API_URL}/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const toggleStatus = async (userID: number, status: string) => {
  try {
    const response = await fetch(`${USERS_API_URL}/${userID}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: status })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}