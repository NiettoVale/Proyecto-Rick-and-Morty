const dataLogin = require("../utils/users");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    const user = dataLogin.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      return res.status(200).json({ access: true });
    } else {
      return res.status(401).json({ access: false });
    }
  } catch (error) {
    // Manejo de errores si es necesario
    console.error(error);
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
};

module.exports = login;
