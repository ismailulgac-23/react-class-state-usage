import UserService from "../services/user.service";
export const incrementUserAge = () => {
  const { user, setState } = UserService.getState();
  if (user) {
    setState({
      user: {
        ...user,
        age: user.age + 1,
      },
    });
  }
  return null;
};
