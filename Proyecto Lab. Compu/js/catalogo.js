const autos = [
  {
    modelo: "Toyota Corolla 2024",
    descripcion: "Sedán compacto eficiente con gran tecnología.",
    imagen: "https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(85)/https://assets.iprofesional.com/assets/jpg/2024/02/568396.jpg",
    specs: ["Motor 2.0L", "Transmisión automática", "Pantalla 8''", "Consumo 16km/l"]
  },
  {
    modelo: "Ford Ranger Raptor",
    descripcion: "Pick-up potente ideal para terrenos difíciles.",
    imagen: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-ranger-raptor-1-672d040010d41.jpg?crop=0.712xw:0.601xh;0.287xw,0.245xh&resize=1200:*",
    specs: ["Motor V6 Biturbo", "4x4", "Suspensión FOX", "Pantalla táctil"]
  },
  {
    modelo: "Chevrolet Tracker 2023",
    descripcion: "SUV urbana cómoda y segura.",
    imagen: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_8841650e41014ee48dcfee60a68821ee.jpg",
    specs: ["Motor Turbo 1.2L", "6 airbags", "Wi-Fi integrado", "Asistente de carril"]
  }
];

const container = document.getElementById("autosContainer");
function Autos(lista) {
  container.innerHTML = "";
  lista.forEach((auto, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4 card-auto";
    card.innerHTML = `
      <div class="card h-100" data-aos="fade-up">
        <img src="${auto.imagen}" class="card-img-top" alt="${auto.modelo}">
        <div class="card-body">
          <h5 class="card-title">${auto.modelo}</h5>
          <p class="card-text">${auto.descripcion}</p>
          <button class="btn btn-primary w-100" onclick="verDetalles(${index})">Ver más</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

Autos(autos);

function verDetalles(index) {
  const auto = autos[index];
  document.getElementById("modalTitulo").textContent = auto.modelo;
  document.getElementById("modalImg").src = auto.imagen;
  document.getElementById("modalDescripcion").textContent = auto.descripcion;

  const lista = document.getElementById("modalSpecs");
  lista.innerHTML = "";
  auto.specs.forEach(spec => {
    const item = document.createElement("li");
    item.textContent = spec;
    lista.appendChild(item);
  });

  const modelo = new bootstrap.Modal(document.getElementById("modalAuto"));
  modelo.show();
}

const buscador = document.getElementById("buscador");
buscador?.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const filtrados = autos.filter(auto => auto.modelo.toLowerCase().includes(texto));
  Autos(filtrados);
});
