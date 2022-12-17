export default function authHeader() {

  const obj = JSON.parse(localStorage.getItem("authUser"))
console.log("obj",obj)
  if (obj && obj.token) {
    console.log("authorization")
    return { Authorization:"Bearer "+obj.token }
  } else {
    return {}
  }
}
