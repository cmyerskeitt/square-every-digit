function squareDigits(num){
    let eachNum = num.toString().split("")
    let newDigits = []
    for (let i = 0; i < eachNum.length; i++){
        let square = eachNum[i]**2
        newDigits += square
    }
     return parseInt(newDigits)
}