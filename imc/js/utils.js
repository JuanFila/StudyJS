export function notNumber(value){
    return isNaN(value) || value === ""
}

export function calculateIMC(height, weight) {
    return (height / ((weight / 100) ** 2)).toFixed(2)
}