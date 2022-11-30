import UserDetailForm from "../components/UserDetailForm"

const EditUser = () => {
  const EditUserHandler = () => {
    console.log("Edit user")
  }

  const userDetails = {
    first_name: "John",
    last_name: "Doe",
    id: 1
  }

  return (
    <UserDetailForm action="Edit" cb={EditUserHandler} />
  )
}

export default EditUser