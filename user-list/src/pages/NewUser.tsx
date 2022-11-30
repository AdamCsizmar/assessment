import UserDetailForm from "../components/UserDetailForm"

const NewUser = () => {
  const NewUserHandler = () => {
    console.log("New user")
  }

  return (
    <UserDetailForm action="Add" cb={NewUserHandler}/>
  )
}

export default NewUser