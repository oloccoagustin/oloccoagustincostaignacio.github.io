const Contacto = document.getElementById("formContacto");

Contacto?.addEventListener("submit", function (fail) {
  fail.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if (!nombre || !email || !mensaje) {
    Swal.fire("Error", "Por favor, completá todos los campos");
    return;
  }

  Swal.fire({
    title: "Mensaje enviado",
    text: `Gracias ${nombre}, responderemos a ${email} pronto.`,
    icon: "success",
    confirmButtonText: "Aceptar"
  });

  Contacto.reset();
});