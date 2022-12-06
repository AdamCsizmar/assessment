import { Link } from "react-router-dom";
import { AiOutlineLock, AiOutlineUnlock, AiOutlineEdit } from "react-icons/ai";
import { toggleStatus } from "../service/usersService";

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  status: string;
  created_at: string;
  updated_at: string;
};

const UserCard = (props: User) => {
  const { id, first_name, last_name, status, created_at } =
    props;
  const creationDate = new Date(created_at).toLocaleDateString("en-US");

  return (
    <div className={`UserCard ${status}`}>
      <div className='Details'>
        <p>{`${first_name} ${last_name}`}</p>
        <p>Registered at: {creationDate}</p>
      </div>
      <div className='Actions'>
        <div className='UserAction' >
          {status === 'active' && <AiOutlineLock onClick={() => toggleStatus(id, 'locked')}/>}
          {status === 'locked' && <AiOutlineUnlock onClick={() => toggleStatus(id, 'active')}/>}
        </div>
        <Link to={`/edit/${id}`} className='UserAction'>
          <AiOutlineEdit />
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
