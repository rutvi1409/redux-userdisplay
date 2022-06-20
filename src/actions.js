export const handleSubmit = (user) => (dispatch, getState) => {
  // if (user.name && user.email && user.password && user.contact) {

  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!user.name) {
    errors.name = "Name is required";
  }
  if (!user.password) {
    errors.password = "password is required";
  }
  if (!user.email) {
    errors.email = "email is required";
  } else if (!regex.test(user.email)) {
    errors.email = "email is not valid";
  }
  if (!user.contact) {
    errors.contact = "contact is required";
  }
  if (user.name && user.email && user.password && user.contact) {
    console.log("---old data", getState());
    const data = getState().data;
    const newdata = data ? [...data, user] : [user];
    // console.log("newdata", newdata);
    let update = data?.find((u) => u.name === user.name);

    if (!update) {
      // console.log({ newdata });
      dispatch({ type: "submit", payload: newdata });
    } else {
      for (let d of data) {
        if (d.name === user.name) {
          d.password = user.password;
          d.email = user.email;
          d.contact = user.contact;
        }
      }
      console.log({ data });
      dispatch({ type: "submit", payload: data });
    }
    // } else {
    //   alert("Enter Details");
  } else {
    dispatch({ type: "errors", payload: errors });
  }
};
export const handleDelete = (user) => (dispatch, getState) => {
  const data = getState();
  const removedata = data.filter((d) => d.name !== user.name);
  dispatch({ type: "delete", payload: removedata });
};
