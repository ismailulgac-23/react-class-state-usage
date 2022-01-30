import ClassState from "react-class-state";

class UserClass extends ClassState {
  user = null;
  login = () => {
    this.setState({
      user: {
        fullName: "İsmail Ulgaç",
        username: "ismailulgac",
        age: 15,
      },
    });
  };
  logout = () => {
    this.setState({
      user: null,
    });
  };
  getUserInfo = () => {
    console.log("user => ", this.user);
  };
}
const UserService = new UserClass();
export default UserService;
