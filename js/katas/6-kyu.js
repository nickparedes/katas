
export const directionInGrid = (n = 3,m = 1)=>{
    

    let contador= 0;

    let matriz = new Array(n);

    for (let index = 0; index < matriz.length; index++) {
        matriz[index] = new Array(m);
    }
    

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = contador;
            contador ++;
        }  
    }


    
    let copia = [].concat(matriz)
    console.log(copia)
    
    const result = [];
    let top = 0;
    let bottom = matriz.length - 1;
    let left = 0;
    let right = matriz[0].length - 1;
    
    while (top <= bottom && left <= right) {
      // recorre la parte superior de la matriz de izquierda a derecha
      for (let i = left; i <= right; i++) {
        result.push(matriz[top][i]);
      }
      top++;
      
      // recorre el lado derecho de la matriz de arriba hacia abajo
      for (let i = top; i <= bottom; i++) {
        result.push(matriz[i][right]);
      }
      right--;
      
      // recorre la parte inferior de la matriz de derecha a izquierda
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(matriz[bottom][i]);
        }
        bottom--;
      }
      
      // recorre el lado izquierdo de la matriz de abajo hacia arriba
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(matriz[i][left]);
        }
        left++;
      }
    }
  
  


    console.log(result)
/*     console.log(spiralMatrix(matriz))
    const recorrido = [...spiralMatrix(matriz)]
    console.log(recorrido) */
    const diferencia = result[result.length - 1] - result[result.length - 2]
    
    console.log(diferencia)
    
    if(diferencia === -1 ){
        return "L"
    }else if(diferencia === 1){
        return "R"
    }else if(diferencia  < -1){
        return "U"
    }else if(diferencia > 1){
        return "D"
    }else  {
        return "R"
    }  
      

}


const spiralMatrix = (matriz) => {
    const result = [];
    while (matriz.length) {
      // recorre la parte superior de la matriz de izquierda a derecha
      result.push(...matriz.shift());
      // recorre el lado derecho de la matriz de arriba hacia abajo
      for (let i = 0; i < matriz.length; i++) {
        result.push(matriz[i].pop());
      }
      // recorre la parte inferior de la matriz de derecha a izquierda
      if (matriz.length && matriz[matriz.length - 1].length) {
        result.push(...matriz.pop().reverse());
      }
      // recorre el lado izquierdo de la matriz de abajo hacia arriba
      for (let i = matriz.length - 1; i >= 0; i--) {
        if (matriz[i].length) {
          result.push(matriz[i].shift());
        }
      }
    }
    return result;
  }



  function spiralMatriz(matriz) {
    const result = [];
    let top = 0;
    let bottom = matriz.length - 1;
    let left = 0;
    let right = matriz[0].length - 1;
    
    while (top <= bottom && left <= right) {
      // recorre la parte superior de la matriz de izquierda a derecha
      for (let i = left; i <= right; i++) {
        result.push(matriz[top][i]);
      }
      top++;
      
      // recorre el lado derecho de la matriz de arriba hacia abajo
      for (let i = top; i <= bottom; i++) {
        result.push(matriz[i][right]);
      }
      right--;
      
      // recorre la parte inferior de la matriz de derecha a izquierda
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(matriz[bottom][i]);
        }
        bottom--;
      }
      
      // recorre el lado izquierdo de la matriz de abajo hacia arriba
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(matriz[i][left]);
        }
        left++;
      }
    }
    
    return result;
  }