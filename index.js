function submitData(name, email) {
  const data = {
    "name": name,
    "email": email
  }
  const body = document.querySelector("body")
  const header = document.createElement("h1")

  console.log("name", name)
  console.log("email", email)
  return fetch("http://localhost:3000/users", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    "body": JSON.stringify(data)
  }).then(res => {
    return res.json()
  }).then(json => {
    header.textContent = json.id
    body.append(header)
  }).catch(error => {
    header.textContent = error.message
    body.append(header)
  })
}
