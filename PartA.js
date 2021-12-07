/* Part A - Bai 1 */
function adjacentElementsProduct(inputArray) {
    let resultArray = []
    let idx = 0

    for (let i = 0; i <= inputArray.length - 2; i++) {
        resultArray[idx] = inputArray[i] * inputArray[i+1]
        idx++
    }

    let max = resultArray[0]

    for (let i = 1; i < resultArray.length; i++) {
        if (resultArray[i] > max) {
            max = resultArray[i]
        }
    }

    return max
}

// console.log(adjacentElementsProduct([2, 3, -5, -2, 4]))

/* Part A - Bai 2 */
function alternatingSums(a) {
    let sumTeam1 = 0
    let sumTeam2 = 0

    for (let i = 0; i < a.length; i++) {
        if ((i+1) % 2 != 0) {
            sumTeam1 += a[i]
        }
        else sumTeam2 += a[i]
    }
    
    let result = [sumTeam1, sumTeam2]
    return result
}

// console.log(alternatingSums([60, 40, 55, 75, 64]))