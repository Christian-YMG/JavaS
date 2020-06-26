const añadir_parrafo = () =>{
    let original = document.getElementById('original');
    let nuevo_parrafo = document.createElement('p');
    let tiempo_actual = new Date();
    let texto = `Este nuevo párrafo aparecio en ${tiempo_actual}`;

    let nuevo_contenedor = document.createTextNode(texto);

    nuevo_parrafo.appendChild(nuevo_contenedor);
    document.body.insertBefore(nuevo_parrafo, original);
}