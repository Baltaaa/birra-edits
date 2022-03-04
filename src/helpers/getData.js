const getData = (productos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    })
}

export default getData;