export default function Hello(app) {
  app.get("/hello", (req, res) => {
    res.send("Life is good!");
  }); //route that responds to hello
  app.get("/", (req, res) => {
    res.send("Welcome to Full Stack Development!");
  }); //route that responds to root
}
