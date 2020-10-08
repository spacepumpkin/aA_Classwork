// Gonna send it over now!

const signup = ({username, password}) => {
    return $.ajax({
        url: "/api/users",
        method: "POST",
        data: {user: {username: username, password: password}}
    })
}

const login = ({ username, password }) => {
  return $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user: { username: username, password: password } }
  })
}

// this.state = {
//   username: "",
//   password: ""
// }

const logout = () => {
  return $.ajax({
    url: "/api/session",
    method: "DESTROY"
  })
}