// this.state = user = {
//   username: "",
//   password: ""
// }

// create user in backend, log them in, and get user json back
export const postUser = (user) => {
  console.log("posting new user");
  return $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user: { username: user.username, password: user.password } }
  })
}

// log in user in backend and get user json back
export const postSession = (user) => {
  console.log("posting new session");
  return $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user: { username: user.username, password: user.password } }
  })
}

// log out any current user in backend
export const deleteSession = () => {
  console.log("deleting session");
  return $.ajax({
    url: "/api/session",
    method: "DELETE"
  })
}