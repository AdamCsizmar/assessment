import { useEffect, useState } from "react";
import UserCard, { User } from "../components/UserCard";
import { getUsers } from "../service/usersService";
import { GrLinkPrevious, GrLinkNext  } from "react-icons/gr";


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
  }, [pagination]);

  return (
    <div className='UserListWrapper'>
      <div className='UserList'>
        {displayedUsers.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
      <div className='Pagination'>
        <button
          onClick={() => setPagination(pagination - 1)}
          disabled={pagination <= 1}
        >
          <GrLinkPrevious />
        </button>
        <span>{pagination}</span>
        <button
          onClick={() => setPagination(pagination + 1)}
          disabled={pagination * 10 >= users.length}
        >
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default Home;
