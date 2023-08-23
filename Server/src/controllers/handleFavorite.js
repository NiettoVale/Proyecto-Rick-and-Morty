// Declara un arreglo vacío para almacenar los personajes favoritos
let myFavorites = [];

// Función para agregar un personaje favorito
const postFav = (req, res) => {
  try {
    // Obtén el personaje que se recibe en el cuerpo (body) de la solicitud (req)
    const newFavorite = req.body;

    // Agrega el nuevo personaje a la lista de favoritos
    myFavorites.push(newFavorite);

    // Devuelve la lista de favoritos actualizada en formato JSON
    return res.status(200).json(myFavorites);
  } catch (error) {
    // Manejo de errores si es necesario
    console.error(error);
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
};

// Función para eliminar un personaje favorito por su ID
const deleteFav = (req, res) => {
  try {
    // Obtén el ID del personaje a eliminar desde los parámetros (params) de la solicitud
    const characterId = req.params.id;

    // Filtra la lista de favoritos para eliminar el personaje con el ID especificado
    myFavorites = myFavorites.filter(
      (character) => character.id !== characterId
    );

    // Devuelve la lista de favoritos actualizada en formato JSON
    return res.status(200).json(myFavorites);
  } catch (error) {
    // Manejo de errores si es necesario
    console.error(error);
    return res.status(500).json({ error: "Ha ocurrido un error" });
  }
};

module.exports = { postFav, deleteFav };
