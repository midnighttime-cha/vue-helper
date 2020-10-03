export default {
  isEmpty: (value) => {
    if (Object.keys(value).length > 0) {
      return false;
    }
    return true;
  }
}