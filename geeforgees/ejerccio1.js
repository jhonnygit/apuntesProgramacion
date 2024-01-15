/**
 * Dada una matriz A sin clasificar de tamaño N que contiene solo números enteros no negativos, busque una submatriz continua 
 * que se agregue a un número S dado y devuelva el índice izquierdo y derecho (indexación basada en 1) de esa submatriz.
 * En caso de múltiples subarreglos, devuelva los índices de subarreglo que aparecen primero al moverse de izquierda a derecha.
 */
class Solution {
    subarraySum(arr, n, s) {
      let left = 0;
      let right = 0;
      let sum = 0;
  
      while (right < n) {
        sum += arr[right];
  
        while (sum > s) {
          sum -= arr[left];
          left++;
        }
  
        if (sum === s) {
          return [left + 1, right + 1];
        }
  
        
        if (arr[right] === 0) {
          return [right + 1, right + 1]; 
        }
  
        right++;
      }
  
      return [-1]; 
    }
  }
  
  // Example usage:
  const solution = new Solution();
  const arr = [1, 2, 3, 4];
  const n = arr.length;
  const s = 8;
  
  const result = solution.subarraySum(arr, n, s);
  console.log(result);
  