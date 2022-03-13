export const productos = [
    {
        "id": '1',
        "name": "DAMM INEDIT",
        "description": "Creada por los cerveceros de Damm junto a Ferrán Adriá y los sumilleres de El Bulli, se elabora con una mezcla de malta de cebada y trigo aromatizada con cilantro, piel de naranja y regaliz.",
        "graduation": "4,8º",
        "package": "75cl Bottle",
        "price": "3,90€",
        "img": 'https://i.ibb.co/tzwTk9r/damminnedit-Rubia.png',
        "stock": '3',
        "categorys": 
            "golden"

        
    },
    {
        "id": '2',
        "name": "ALHAMBRA 1925",
        "description": "Con su característica color Bottle verde, se trata de una cerveza extra con una graduation de 6,8º. Se distingue por su peculiar toque acaramelado y por su perfecto y refrescante amargor final.Gran cuerpo y mucho equilibrio.",
        "graduation": "6,8º",
        "package": "33 Bottle cl.",
        "price": "1€",
        "img": 'https://i.ibb.co/bKN0Dzs/alhambra-Rubia-Roja.png',
        "stock": '2',
        "categorys": 
            "golden"

        
    },
    {
        "id": '3',
        "name": "MAHOU CINCO ESTRELLAS",
        "description": "Un auténtico clásico entre nuestras cervezas. Muy ligera y agradable, resulta especialmente refrescante. Con una ligera acidez, sabor a cebada tostada y un correcto amargor final.",
        "graduation": "5,5º",
        "package": "Pack de 6 botellines de 25 cl.",
        "price": "2,70€",
        "img": 'https://i.ibb.co/SJrJ1mj/mahou-Rubia.png',
        "stock": '8',
        "categorys": 
            "golden"
        
    },
    {
        "id": '4',
        "name": "SAN MIGUEL 1516",
        "description": "Entre las varias opciones de esta marca, una de las más internacionales de las españolas, destaca esta 1516 elaborada según métodos tradicionales. Fresca, amarga y con baja graduation, lo que la hace muy agradable a cualquier hora.",
        "graduation": "4,2º",
        "package": "33 Bottle cl.",
        "price": "0,80€",
        "img": 'https://i.ibb.co/KctJ4Yq/sanmiguel-Rubia.png',
        "stock": '8',
        "categorys": 
            "golden"

        
    },
    {
        "id": '5',
        "name": "VOLL DAMM",
        "description": "Elaborada con el doble de malta, lo que le proporciona un sabor muy característico, y un cuerpo intenso y peculiar, diferente de otras. Alta graduation alcohólica. Adecuada para tomar como copa.",
        "graduation": "7,2º",
        "package": "33cl Bottle",
        "price": "1,10€",
        "img": 'https://i.ibb.co/K01skrj/volldam-Roja.png',
        "stock": '5',
        "categorys": 
            "red"

        
    },
    {
        "id": '6',
        "name": "ÁMBAR ESPECIAL",
        "description": "La Zaragozana es una centenaria fábrica de cervezas de la capital zaragozana. Ofrece una amplia variedad. La más atractiva es esta Especial, una lager de baja fermentación que resulta muy fácil y agradable de beber.",
        "graduation": "5,2º",
        "package": "33cl Bottle",
        "price": "0,90€",
        "img": 'https://i.ibb.co/DWJD7GW/ambar-Especial.png',
        "stock": '8',
        "categorys": 
            "golden"

        
    },
    {
        "id": '7',
        "name": "MORITZ",
        "description": "Una cerveza casi artesanal, que es una institución en Barcelona desde 1856. En su elaboración se emplean agua de un manantial de Vichy Catalán y flores de lúpulo en lugar de extractos, lo que le confiere más aroma y menos amargor.",
        "graduation": "5,4º",
        "package": "33cl Bottle",
        "price": "1,20€",
        "img": 'https://i.ibb.co/VxWbTNF/moritz-Roja.png',
        "stock": '8',
        "categorys": 
            "red"

        
    },
    {
        "id": '8',
        "name": "MORITZ STOUT",
        "description": "Una cerveza casi artesanal, que es una institución en Barcelona desde 1856. En su elaboración se emplean granos de cafe Arábica y un lupulo Columbus refinado, lo que le trae un sabor amargo a paladar y despues una cadena intensa de sabores cremosos y amargos.",
        "graduation": "8,4º",
        "package": "33cl Bottle",
        "price": "1,20€",
        "img": 'https://i.ibb.co/pRtkV07/moritz-Negra.png',
        "stock": '8',
        "categorys": 
            "black"

        
    },
    {
        "id": '9',
        "name": "BRABANTE LAGER",
        "description": "Elaborada en Bélgica con métodos tradicionales, se puede considerar española pues la hacen empresarios madrileños para el mercado nacional. De sus variedades destaca esta blanca de trigo, ligera y suave.",
        "graduation": "5º",
        "package": "33cl Bottle",
        "price": "1,50€",
        "img": 'https://i.ibb.co/Jv4Tv9S/barbante-Roja.png',
        "stock": '2',
        "categorys": 
            "red"

        
    }
]


const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
            reject('Error 404 not found')
        }, 1000)
    })
}

export default getData

