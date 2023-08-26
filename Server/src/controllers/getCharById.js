const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params; // Obtén el id del parámetro de la URL

    const response = await fetch(`${URL}${id}`);

    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzamos un error
      throw new Error("No se pudo obtener el personaje");
    }

    const data = await response.json();

    if (data.id) {
      // Si se encuentra el personaje, envía una respuesta JSON con las propiedades requeridas
      const personaje = {
        id: data.id,
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin.name,
        location: data.location.name,
        image: data.image,
        gender: data.gender,
      };

      console.log("Este es el personaje:", personaje);
      res.status(200).json(personaje);
    } else {
      // Si no se encuentra el personaje, envía una respuesta de error con status 404
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    // Si se produce un error, enviamos una respuesta de error con status 500
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;
