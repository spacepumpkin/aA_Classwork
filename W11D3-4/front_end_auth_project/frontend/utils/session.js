// send user
export const postUser = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user },
  })
};

// send user to get session token assigned
export const postSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user },
  })
};

export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE',
  })
};

