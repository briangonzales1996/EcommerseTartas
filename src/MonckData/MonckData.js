import React from "react";

const products = [
    { id: 1, carrousel:false,name: 'Bautismo Dorada', category: "bautismo", description: 'Torta para 100 personas color dorada para bautismo', image: '../../public/tartas/bautismo-dorado.jpeg' },
    { id: 2, carrousel:false,name: 'Bautismo Celeste', category: "bautismo", description: 'Torta para 200 personas color celeste para bautismo', image: '../../public/tartas/bautismo-celeste.jpeg' },
    { id: 3, carrousel:false,name: 'Bautismo Rosa', category: "bautismo", description: 'Torta para 200 personas color rosa para bautismo', image: '../../public/tartas/bautismo-rosa.jpeg' },
    { id: 4, carrousel:false,name: 'Boda Salmon', category: "boda", description: 'Torta para 300 personas color celeste para casamiento', image: '../../public/tartas/boda-salmon.jpeg' },
    { id: 5, carrousel:false,name: 'Boda para 200 personas', category: "boda", description: 'Torta para 500 personas color celeste para casamiento', image: '../../public/tartas/boda-200-persona.jpeg' },
    { id: 6, carrousel:false,name: 'Aniversario celeste', category: "aniversario", description: 'Tarta para 200 persones para aniversario o boda', image: '../../public/tartas/celeste-7-tortas.jpeg' },
    { id: 7, carrousel:false,name: 'Bautismo de Mickey', description: 'Tarta Personalizada para 150 personas', image: '../../public/tartas/bautismo-mickey.jpeg' },
    { id: 8, carrousel:true,name: 'Bautismo cuadrada celeste claro', category: "bautismo", description: 'Tarta para 100 personas para bautismo', image: '../../public/tartas/bautismo-cuadrados.jpeg' },
    { id: 9, carrousel:false,name: 'Familiar 2 pisos', category: "cumpleaños", description: 'Tarta de 2 pisos para 50 personas', image: '../../public/tartas/familiar-2pisos.jpeg' },
    { id: 10,carrousel:false, name: 'Tarta Personalizada Boca', category: "cumpleaños", description: 'Tarta personalizada para 30 personas', image: '../../public/tartas/boca-escudo.jpeg' },
    { id: 11,carrousel:false, name: 'Tarta Personalizada Bolivar', category: "cumpleaños", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 12,carrousel:false, name: 'Tarta de Boda Rosa', category: "boda", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 13,carrousel:false, name: 'Tarta de Boda Blanca', category: "boda", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 14,carrousel:false, name: 'Tarta Plateada', category: "aniversario", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 15,carrousel:false, name: 'Tarta de Bautismo Rosa', category: "bautismo", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 16,carrousel:true, name: 'Tarta de Bautismo Verde', category: "bautismo", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 17,carrousel:true, name: 'Tarta para Mis 15', category: "15años", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 18,carrousel:false, name: 'Tarta personalizada Real madrid', category: "cumpleaños", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 19,carrousel:true, name: 'Tarta para boda rosa claro', category: "boda", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 20,carrousel:false, name: 'Tarta para Mis 15', category: "cumpleaños", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 21,carrousel:false, name: 'Tarta con  roseras rosas', category: "cumpleaños", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 22,carrousel:true, name: 'Tarta para bautismo cuadrada azul', category: "bautismo", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 23,carrousel:true, name: 'Tarta para aniversario blanca', category: "aniversario", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 24,carrousel:true, name: 'Boda con rosas salmon', category: "boda", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 25,carrousel:false, name: 'Tarta para cumpleaños', category: "cumpleaños", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 26,carrousel:false, name: 'Tarta personalizada de Dragon Ball', category: "cumpleaños", description: 'Hecha a tu medida.', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 27,carrousel:false, name: 'Tarta de coco', category: "boda", description: 'Tarta de coco de 3 tortas para boda con rosetas para 70 personas', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 28,carrousel:false, name: 'Torta cuadrada color verde', category: "bautismo", description: 'Tarta cuadrada para bautismo con fuente y 9 tortas para 300 personas color verde', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 29,carrousel:false, name: 'Torta cuadrada color rojo', category: "boda", description: 'Tarta cuadrada para boda con fuente y 9 tortas para 150 personas', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 30,carrousel:false, name: 'Tarta personalizada con arandanos', category: "cumpleaños", description: 'Tarta familiar con arandanos para 20 personas', image: '../../public/tartas/bolivar-escudo.jpeg' },
    { id: 31,carrousel:false, name: 'Tarta de coco con flores', category: "boda", description: 'Tarta para 70 personas de coco', image: '../../public/tartas/bolivar-escudo.jpeg' },
    

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

