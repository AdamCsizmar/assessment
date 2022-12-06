import UserDetailForm from "../components/UserDetailForm"
import { addUser } from "../service/usersService"

const NewUser = () => {
  return (
    <UserDetailForm action="Add" cb={addUser}/>
  )
}

export default NewUser