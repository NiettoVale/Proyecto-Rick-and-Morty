// validation.js
const validateForm = (formData) => {
  const errors = {};

  // Validamos el email:
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!formData.email.trim()) {
    errors.email = "El email no puede estar vacío.";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Ingresa un email válido.";
  } else if (formData.email.length > 35) {
    errors.email = "El email no puede tener más de 35 caracteres.";
  }

  // Validamos la password:
  const passwordRegex = /^(?=.*\d).{6,10}$/;

  if (!formData.password) {
    errors.password = "La contraseña no puede estar vacía.";
  } else if (!passwordRegex.test(formData.password)) {
    errors.password =
      "La contraseña debe tener entre 6 y 10 caracteres y al menos un número.";
  }

  return errors;
};

export default validateForm;
