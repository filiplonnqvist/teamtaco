const chartNumbers = [1, 2, 3, 4, 5]

function validateChartNumbers (chartNumbers) {
    if (!Array.isArray(chartNumbers)) {
        throw new Error('chartNumbers must be an array')
    }

    if (chartNumbers.length === 0) {
        throw new Error('chartNumbers must not be empty')
    }

    if (!chartNumbers.every(Number.isFinite)) {
        throw new Error('chartNumbers must contain only numbers')
    }
}

function addChartNumbers (chartNumbers) {
    validateChartNumbers(chartNumbers)
    return chartNumbers.reduce((a, b) => a + b, 0) // Sum all chart numbers
}
