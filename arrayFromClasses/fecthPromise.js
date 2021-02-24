export default function usersPromise() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
}