export default error => {
  let message;
  let b = error.response ? error.response : error.message;
  if (b.data && Array.isArray(b.data.errors)) {
    message = b.data.errors[0].message;
  } else if (b.data && b.data.errors) {
    message = b.data.errors.message;
  } else {
    message = b;
  }
  return message; // I like to get my error message back
};
