const problem1 = () => {
    let b = 0
    for (let a = 1; a < 1000; a++){
      b += (a % 3 == 0 || a % 5 == 0) ? a : 0
    }
    return b
}