function sayHello() {
  new Promise((resolve) => {setTimeout(resolve, 3000)});
  console.log("Bonjour");
}

sayHello();

