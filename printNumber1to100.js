let matrix = new Array(10)

for(let i = 0 ; i< 10 ; i++){
    matrix[i] = new Array(10)
    for (let j= 0 ; j <10 ; j++){
        matrix[i][j] = i*10 + j + 1
    }
}

const printMatrix  = (matrix)=>{
    for(let i = 0 ;i < matrix.length ; i++){
        let rowStr = ''
        for (let j = 0; j<matrix[i].length; j++){
            rowStr += matrix[i][j] +"|"
        }
      console.log(rowStr)
    }
}


printMatrix(matrix)