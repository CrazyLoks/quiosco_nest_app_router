export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}

export function getImagePath(imagePath: string) { // va a recibir la url de la imagen
    const cloudinaryBaseUrl = 'https://res.cloudinary.com' // asi empiezan las que están guardadas en cloudinary
    if (imagePath.startsWith(cloudinaryBaseUrl)) {
        return imagePath;
    } else {
        return `/products/${imagePath}.jpg`
    }
}