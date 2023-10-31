class Wallet {
    #owner = " ";
    #amount = 0;
  

get owner() {
  return this.#owner;
}

set owner(newOwner) {
  this.#owner = newOwner;
}


get amount() {
  return this.#amount;
}

set amount(newAmount) {
  this.#amount = newAmount
}

static async fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if(response.ok) {
      const data = await response.json()
      console.log(data)
      const h2 = document.createElement("h2")
      h2.textContent = data[0].title;
      const body = document.querySelector("body")
      body.appendChild(h2)
      console.log(h2)
      //const ownerName = data.
      return ownerName
    } else {
      console.error("error fetch")
    }

  }catch (error) {
    console.error("error fetch")
  }
}
}





Wallet.fetchData()




