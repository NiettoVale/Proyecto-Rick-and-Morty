import React, { useState } from "react";
import formImage from "../../image/imageForm.jpg";
import styles from "./Form.module.css";
import validateForm from "./validation"; // Importa la función de validación

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // Estado local para los errores de validación
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Variable para verificar si todos los campos están llenos
  const allFieldsFilled = Object.values(userData).every(
    (value) => value.trim() !== ""
  );

  // Función para manejar cambios en los campos de entrada
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validar campos y actualizar los errores
    const fieldErrors = validateForm({ ...userData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldErrors[name],
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar campos nuevamente antes de enviar el formulario
    const fieldErrors = validateForm(userData);
    setErrors(fieldErrors);

    // Si no hay errores y todos los campos están llenos, puedes enviar los datos del formulario
    if (Object.keys(fieldErrors).length === 0 && allFieldsFilled) {
      login(userData);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div className={styles.imageContainer}>
          <img src={formImage} alt="form" className={styles.imgForm} />
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <br />
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <br />
            {/* Mostrar error si existe */}
            {errors.email && <div className={styles.error}>{errors.email}</div>}
            <label htmlFor="password">Password: </label>
            <br />
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <br />
            {/* Mostrar error si existe */}
            {errors.password && (
              <div className={styles.error}>{errors.password}</div>
            )}
            <button
              type="submit"
              className={styles.button}
              disabled={!allFieldsFilled}
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
