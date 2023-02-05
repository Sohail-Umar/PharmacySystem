const checkValidData = (req, res, next) => {

  if (!req.body.user_name) {
    res.status(400).json({ message: "Full Name is required" })
  }


  if (!req.body.email) {
    res.status(400).json({ message: "Email is required" })
  }


  if (!req.body.password) {
    res.status(400).json({ message: "Password is required" })
  }

  if (!req.body.password) {
    res.status(400).json({ message: "Password is required" })
  }

  next();
}


const checkRole = (req, res) => {

  if (req.body.role === "Admin") {
    res.status(400).json({ message: "role is required" })
  }
}