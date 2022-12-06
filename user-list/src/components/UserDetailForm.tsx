import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByID, UserDetails } from "../service/usersService";
import { User } from "./UserCard";

type Props = {
  cb: (user: Partial<UserDetails> ) => Promise<void>;
  action: "Add" | "Edit";
};

const UserDetailForm = (props: Props) => {
  const { cb, action } = props;
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const { first_name: oldFirstName, last_name: oldLastName } = userDetails || {};
  const [firstName, setFirstName] = useState(oldFirstName);
  const [lastName, setLastName] = useState(oldLastName);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const user = await getUserByID(Number(id));
      setUserDetails(user);
    })();
  }, [id])


  const addObject = {
    first_name: firstName,
    last_name: lastName,
    status: "active",
  };

  const editObject = {
    id: Number(id),
    first_name: firstName,
    last_name: lastName,
  };

  const cbHandler: FormEventHandler<HTMLFormElement> = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(id)
    action === 'Add' && await cb(addObject);
    action === 'Edit' && await cb(editObject);
  }

  return (
    <form onSubmit={cbHandler} className='UserDetailsForm'>
      <div className='InputWrapper'>
        <label htmlFor='first_name'>First Name <span className="ErrorMsg">{firstNameError}</span></label>
        <input placeholder={oldFirstName} value={firstName} onChange={e => setFirstName(e.target.value)} type='text' name='first_name' id='first_name' />
      </div>
      <div className='InputWrapper'>
        <label htmlFor='last_name'>Last Name <span className="ErrorMsg">{lastNameError}</span></label>
        <input placeholder={oldLastName} value={lastName} onChange={e => setLastName(e.target.value)} type='text' name='last_name' id='last_name' />
      </div>
      <button className="SubmitBtn">{action} user</button>
    </form>
  );
};

export default UserDetailForm;
