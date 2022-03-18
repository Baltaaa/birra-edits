export const productos = [
    {
        "id": '1',
        "name": "DAMM INEDIT",
        "description": "Created by the Damm brewers together with Ferrán Adriá and the El Bulli sommeliers, it is made with a mixture of barley and wheat malt flavored with coriander, orange peel and liquorice.",
        "graduation": "4,8º",
        "pack": "75cl Bottle",
        "price": "3,90€",
        "img": 'https://i.ibb.co/tzwTk9r/damminnedit-Rubia.png',
        "stock": '3',
        "categorys": 
            "golden"

        
    },
    {
        "id": '2',
        "name": "ALHAMBRA 1925",
        "description": "With its characteristic green color, it is an extra beer with a graduation of 6.8º. It is distinguished by its peculiar caramel touch and its perfect and refreshing final bitterness. Great body and great balance.",
        "graduation": "6,8º",
        "pack": "33 Bottle cl.",
        "price": "1€",
        "img": 'https://i.ibb.co/bKN0Dzs/alhambra-Rubia-Roja.png',
        "stock": '2',
        "categorys": 
            "golden"

        
    },
    {
        "id": '3',
        "name": "MAHOU CINCO ESTRELLAS",
        "description": "True classic among our beers. Very light and pleasant, it is especially refreshing. With a slight acidity, toasted barley flavor and a correct final bitterness.",
        "graduation": "5,5º",
        "pack": "Pack de 6 botellines de 25 cl.",
        "price": "2,70€",
        "img": 'https://i.ibb.co/SJrJ1mj/mahou-Rubia.png',
        "stock": '8',
        "categorys": 
            "golden"
        
    },
    {
        "id": '4',
        "name": "SAN MIGUEL 1516",
        "description": "Among the various options of this brand, one of the most international of the Spanish, stands out this 1516 made according to traditional methods. Fresh, bitter and with a low alcohol content, which makes it very pleasant at any time.",
        "graduation": "4,2º",
        "pack": "33 Bottle cl.",
        "price": "0,80€",
        "img": 'https://i.ibb.co/KctJ4Yq/sanmiguel-Rubia.png',
        "stock": '8',
        "categorys": 
            "golden"

        
    },
    {
        "id": '5',
        "name": "VOLL DAMM",
        "description": "Made with double the malt, which gives it a very characteristic flavor, and an intense and peculiar body, different from others. High alcoholic graduation. Suitable to drink as a glass.",
        "graduation": "7,2º",
        "pack": "33cl Bottle",
        "price": "1,10€",
        "img": 'https://i.ibb.co/K01skrj/volldam-Roja.png',
        "stock": '5',
        "categorys": 
            "red"

        
    },
    {
        "id": '6',
        "name": "ÁMBAR ESPECIAL",
        "description": "La Zaragozana is a hundred-year-old brewery in the capital of Zaragoza. Offers a wide variety. The most attractive is this Especial, a bottom-fermented lager that is very easy and pleasant to drink.",
        "graduation": "5,2º",
        "pack": "33cl Bottle",
        "price": "0,90€",
        "img": 'https://i.ibb.co/DWJD7GW/ambar-Especial.png',
        "stock": '8',
        "categorys": 
            "golden"

        
    },
    {
        "id": '7',
        "name": "MORITZ",
        "description": "An almost craft beer, which has been an institution in Barcelona since 1856. In its production, water from a Vichy Catalán spring and hop flowers are used instead of extracts, which gives it more aroma and less bitterness.",
        "graduation": "5,4º",
        "pack": "33cl Bottle",
        "price": "1,20€",
        "img": 'https://i.ibb.co/VxWbTNF/moritz-Roja.png',
        "stock": '8',
        "categorys": 
            "red"

        
    },
    {
        "id": '8',
        "name": "MORITZ STOUT",
        "description": "An almost craft beer, which has been an institution in Barcelona since 1856. Arabica coffee beans and refined Columbus hops are used in its production, which gives it a bitter taste on the palate and then an intense chain of creamy and bitter flavours.",
        "graduation": "8,4º",
        "pack": "33cl Bottle",
        "price": "1,20€",
        "img": 'https://i.ibb.co/pRtkV07/moritz-Negra.png',
        "stock": '8',
        "categorys": 
            "black"

        
    },
    {
        "id": '9',
        "name": "BRABANTE LAGER",
        "description": "Made in Belgium using traditional methods, it can be considered Spanish as it is made by Madrid entrepreneurs for the national market. Of its varieties, this white wheat one stands out, light and soft.",
        "graduation": "5º",
        "pack": "33cl Bottle",
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

