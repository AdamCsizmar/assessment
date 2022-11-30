import { Link } from "react-router-dom";
import { AiOutlineLock, AiOutlineUnlock, AiOutlineEdit } from "react-icons/ai";

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  status: string;
  created_at: string;
  updated_at: string;
};

const UserCard = (userProps: User) => {
  const { id, first_name, last_name, status, created_at, updated_at } =
    userProps;

  const creationDate = new Date(created_at).toLocaleDateString("en-US");

  return (
    <div className={`UserCard ${status}`}>
      <div className='Details'>
        <p>{`${first_name} ${last_name}`}</p>
        <p>Registered at: {creationDate}</p>
      </div>
      <div className='Actions'>
        <div className='UserAction'>
          {status === 'active' && <AiOutlineLock />}
          {status === 'locked' && <AiOutlineUnlock />}
        </div>
        <Link to={`/edit?id=${id}`} className='UserAction'>
          <AiOutlineEdit />
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
