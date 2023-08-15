export const getFullDate = (dateString) => {
  return new Date(dateString).toDateString();
};
export const getDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};
export const getHour = (dateString) => {
  return new Date(dateString).toLocaleTimeString();
};
