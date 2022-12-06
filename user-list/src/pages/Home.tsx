import { useEffect, useState } from "react";
import UserCard, { User } from "../components/UserCard";
import { getUsers } from "../service/usersService";

const Home = () => {
  const [users, setUsers] = useState<User[] | []>([]);
  const [displayedUsers, setDisplayedUsers] = useState<User[] | []>([]);
  const [pagination, setPagination] = useState<number>(1);

  useEffect(() => {
    (async () => {
      const users = await getUsers();
      
      setUsers(users);
      setDisplayedUsers(users.slice(0, 10));
    })();
    return () => {};
  }, []);

  useEffect(() => {
    setDisplayedUsers(users.slice(pagination * 10 - 10, pagination * 10));
    return () => {};
  }, [pagination, users]);

  return (
    <div className='UserListWrapper'>
      <div className='Pagination'>
        <button
          onClick={() => setPagination(pagination - 1)}
          disabled={pagination <= 1}
          className='Pagination-button'
        >
          {"<"}
        </button>
        <span>{pagination}</span>
        <button
          onClick={() => setPagination(pagination + 1)}
          disabled={pagination * 10 >= users.length}
          className='Pagination-button'
        >
          {">"}
        </button>
      </div>
      <div className='UserList'>
        {displayedUsers.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
