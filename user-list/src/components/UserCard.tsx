export type User = {
  id: number;
  first_name: string;
  last_name: string;
  status: string;
  created_at: string;
  updated_at: string;
};

const UserCard = (userProps: User) => {
  const { id, first_name, last_name, status, created_at, updated_at } = userProps;

  return (
  <div className={`UserCard ${status}`}>
    <h3>{`${first_name} ${last_name}`}</h3>
    <h4>Registered at: {created_at}</h4>
  </div>
  );
};

export default UserCard;
