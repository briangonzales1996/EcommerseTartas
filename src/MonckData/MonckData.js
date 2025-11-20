import React from "react";

const products = [
    { id: 1, name: 'Bautismo Dorada', category: "bautismo", description: 'Personalizada para eventos', image: '../../public/tartas/bautismo-dorado.jpeg' },
    { id: 2, name: 'Bautismo Celesete', category: "bautismo", description: 'Personalizada para eventos', image: '../../public/tartas/bautismo-celeste.jpeg' },
    { id: 3, name: 'Bautismo Rosa', category: "bautismo", description: 'Personalizada para eventos', image: '../../public/tartas/bautismo-rosa.jpeg' },
    { id: 4, name: 'Boda Salmon', category: "boda", description: 'Personalizada para eventos', image: '../../public/tartas/boda-salmon.jpeg' },
    { id: 5, name: 'Boda para 200 personas', category: "boda", description: 'Personalizada para eventos', image: '../../public/tartas/boda-200-persona.jpeg' },
    { id: 6, name: 'Aniversario celeste', category: "aniversario", description: 'Tarta para 200 persones para aniversario o boda', image: '../../public/tartas/celeste-7-tortas.jpeg' },
    { id: 7, name: 'Bautismo de Mickey', description: 'Tarta Personalizada para 150 personas', image: '../../public/tartas/bautismo-mickey.jpeg' },
    { id: 8, name: 'Tortas figura cuadrada', category: "aniversario", description: 'Personalizada para eventos', image: '../../public/tartas/bautismo-cuadrados.jpeg' },
    { id: 9, name: 'Familiar 2 pisos', category: "cumpleaños", description: 'Tarta de 2 pisos para 50 personas', image: '../../public/tartas/familiar-2pisos.jpeg' },
    { id: 10, name: 'Tarta Personalizada Boca', category: "cumpleaños", description: 'Tarta personalizada para 30 personas', image: '../../public/tartas/boca-escudo.jpeg' },
    { id: 11, name: 'Tarta Personalizada Bolivar', category: "cumpleaños", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 12, name: 'Tarta de Boda Rosa', category: "boda", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 13, name: 'Tarta de Boda Blanca', category: "boda", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 14, name: 'Tarta Plateada', category: "aniversario", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 15, name: 'Tarta de Bautismo Rosa', category: "bautismo", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 16, name: 'Tarta de Bautismo Verde', category: "bautismo", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 17, name: 'Tarta para Mis 15', category: "15años", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },

    // Agrega más productos aquí
];


const imageModules = import.meta.glob('../../public/tartas/*.{jpg,png,jpeg}', { eager: false });

// 2. Obtener las claves (las rutas de los archivos)
const paths = Object.keys(imageModules);

// 3. ORDENAR las rutas alfabéticamente (por nombre de archivo)
// .sort() es suficiente si usaste el patrón numérico 01, 02, 10
paths.sort();

// 4. Mapear y cargar (importar) dinámicamente el contenido
// Usamos useState y useEffect para manejar la carga asíncrona



// Definimos una función asíncrona para cargar
let loadedImages
async function loadImages() {
    loadedImages = await Promise.all(
        paths.map(async (path) => {
            // Llama a la función de importación y extrae la URL (module.default)
            const module = await imageModules[path]();
            return module.default;
        })
    );
    loadedImages = await loadedImages
    return loadedImages
}










export const  orderImage = async () => {
    const images = await loadImages();
    const newProducts =products.map((item) => {

        
        
        if (images) {
            
            for (let i = 0;  images.length > i; i++) {
                
                // 1. Obtener el nombre del archivo (con la extensión) -> "10-bolivar-escudo.jpeg"
                const nombreConExtension =  images[i].split('/').pop();

                // 2. Obtener el nombre sin la extensión -> "10-bolivar-escudo"
                const numberImage = nombreConExtension.split('.')[0];
                
                
                if (item.id == numberImage.slice(0, 1)) {
                    
                    item.image = images[i]
                    
                    return item
                }
                else if(item.id == numberImage.slice(0,2)){
                    item.image = images[i]
                    
                    return item
                }
            }
        }
        

    })
        
 
    
    return newProducts

}

