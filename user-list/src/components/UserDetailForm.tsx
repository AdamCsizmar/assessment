import { FormEvent, FormEventHandler } from "react";
import { User } from "./UserCard";

type Props = {
  cb: () => void;
  action: "Add" | "Edit";
  userDetails?: User;
};

const UserDetailForm = (props: Props) => {
  const { cb, action, userDetails } = props;
  const { first_name, last_name, id } = userDetails || {};

  const cbHandler: FormEventHandler<HTMLFormElement> = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cb();
  }

  return (
    <form onSubmit={cbHandler} className='UserDetailForm'>
      <div className='InputWrapper'>
        <label htmlFor='first_name'>First Name</label>
        <input placeholder={first_name} type='text' name='first_name' id='first_name' />
      </div>
      <div className='InputWrapper'>
        <label htmlFor='last_name'>Last Name</label>
        <input placeholder={last_name} type='text' name='last_name' id='last_name' />
      </div>
      <button>{action} user</button>
    </form>
  );
};

export default UserDetailForm;
