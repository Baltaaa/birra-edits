export const productos = [
    {
        "id": 1,
        "Nombre": "DAMM INEDIT",
        "Descripción": "Creada por los cerveceros de Damm junto a Ferrán Adriá y los sumilleres de El Bulli, se elabora con una mezcla de malta de cebada y trigo aromatizada con cilantro, piel de naranja y regaliz.",
        "Graduación": "4,8º",
        "Envase": "Botella de 75cl",
        "Precio": "3,90€",
        "img": 'https://i.ibb.co/tzwTk9r/damminnedit-Rubia.png',
        "stock": '3',
        "categorias": 
            "golden"

        
    },
    {
        "id": '2',
        "Nombre": "ALHAMBRA 1925",
        "Descripción": "Con su característica botella de color verde, se trata de una cerveza extra con una graduación de 6,8º. Se distingue por su peculiar toque acaramelado y por su perfecto y refrescante amargor final.Gran cuerpo y mucho equilibrio.",
        "Graduación": "6,8º",
        "Envase": "Botella de 33 cl.",
        "Precio": "1€",
        "img": 'https://i.ibb.co/bKN0Dzs/alhambra-Rubia-Roja.png',
        "stock": '2',
        "categorias": 
            "golden"

        
    },
    {
        "id": '3',
        "Nombre": "MAHOU CINCO ESTRELLAS",
        "Descripción": "Un auténtico clásico entre nuestras cervezas. Muy ligera y agradable, resulta especialmente refrescante. Con una ligera acidez, sabor a cebada tostada y un correcto amargor final.",
        "Graduación": "5,5º",
        "Envase": "Pack de 6 botellines de 25 cl.",
        "Precio": "2,70€",
        "img": 'https://i.ibb.co/SJrJ1mj/mahou-Rubia.png',
        "stock": '8',
        "categorias": 
            "golden"
        
    },
    {
        "id": '4',
        "Nombre": "SAN MIGUEL 1516",
        "Descripción": "Entre las varias opciones de esta marca, una de las más internacionales de las españolas, destaca esta 1516 elaborada según métodos tradicionales. Fresca, amarga y con baja graduación, lo que la hace muy agradable a cualquier hora.",
        "Graduación": "4,2º",
        "Envase": "Botella de 33 cl.",
        "Precio": "0,80€",
        "img": 'https://i.ibb.co/KctJ4Yq/sanmiguel-Rubia.png',
        "stock": '8',
        "categorias": 
            "golden"

        
    },
    // {
    //     "id": '5',
    //     "Nombre": "CRUZ CAMPO RESERVA 1904",
    //     "Descripción": "Cerveza cien por cien malta, de gran calidad. Intensa y equilibrada, con agradable final amargo. Graduación muy adecuada para acompañar cualquier tipo de comida.",
    //     "Graduación": "6,4º",
    //     "Envase": "Botella de 33cl",
    //     "Precio": "1€",
    //     "img": "https://i.ibb.co/p3pHz9x/cruzcampo-Roja.png",
    //     "stock": '8',
    //     "categorias": [
    //         "Roja"

    //     ]
    // },
    {
        "id": '6',
        "Nombre": "VOLL DAMM",
        "Descripción": "Elaborada con el doble de malta, lo que le proporciona un sabor muy característico, y un cuerpo intenso y peculiar, diferente de otras. Alta graduación alcohólica. Adecuada para tomar como copa.",
        "Graduación": "7,2º",
        "Envase": "Botella de 33cl",
        "Precio": "1,10€",
        "img": 'https://i.ibb.co/K01skrj/volldam-Roja.png',
        "stock": '5',
        "categorias": 
            "red"

        
    },
    {
        "id": '7',
        "Nombre": "ÁMBAR ESPECIAL",
        "Descripción": "La Zaragozana es una centenaria fábrica de cervezas de la capital zaragozana. Ofrece una amplia variedad. La más atractiva es esta Especial, una lager de baja fermentación que resulta muy fácil y agradable de beber.",
        "Graduación": "5,2º",
        "Envase": "Botella de 33cl",
        "Precio": "0,90€",
        "img": 'https://i.ibb.co/DWJD7GW/ambar-Especial.png',
        "stock": '8',
        "categorias": 
            "golden"

        
    },
    {
        "id": '8',
        "Nombre": "MORITZ",
        "Descripción": "Una cerveza casi artesanal, que es una institución en Barcelona desde 1856. En su elaboración se emplean agua de un manantial de Vichy Catalán y flores de lúpulo en lugar de extractos, lo que le confiere más aroma y menos amargor.",
        "Graduación": "5,4º",
        "Envase": "Botella de 33cl",
        "Precio": "1,20€",
        "img": 'https://i.ibb.co/VxWbTNF/moritz-Roja.png',
        "stock": '8',
        "categorias": 
            "red"

        
    },
    {
        "id": '9',
        "Nombre": "MORITZ STOUT",
        "Descripción": "Una cerveza casi artesanal, que es una institución en Barcelona desde 1856. En su elaboración se emplean granos de cafe Arábica y un lupulo Columbus refinado, lo que le trae un sabor amargo a paladar y despues una cadena intensa de sabores cremosos y amargos.",
        "Graduación": "8,4º",
        "Envase": "Botella de 33cl",
        "Precio": "1,20€",
        "img": 'https://i.ibb.co/pRtkV07/moritz-Negra.png',
        "stock": '8',
        "categorias": 
            "black"

        
    },
    {
        "id": '10',
        "Nombre": "BRABANTE LAGER",
        "Descripción": "Elaborada en Bélgica con métodos tradicionales, se puede considerar española pues la hacen empresarios madrileños para el mercado nacional. De sus variedades destaca esta blanca de trigo, ligera y suave.",
        "Graduación": "5º",
        "Envase": "Botella de 33cl",
        "Precio": "1,50€",
        "img": 'https://i.ibb.co/Jv4Tv9S/barbante-Roja.png',
        "stock": '2',
        "categorias": 
            "red"

        
    }
]


const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}
export default getData

