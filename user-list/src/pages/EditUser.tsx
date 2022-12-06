import UserDetailForm from "../components/UserDetailForm"
import { editUser } from "../service/usersService"

const EditUser = () => {
  return (
    <UserDetailForm action="Edit" cb={editUser} />
  )
}

export default EditUser


