function stepBoard (matrix){
    let new_matrix =[];
    //check if matrix is empty
    if(Array.isArray(matrix[0])){
        for(let row = 0; row < matrix.length; row++){
            let current_row = [];
            for(let col = 0; col < matrix[row].length; col++){
                current_row.push(check_neighbors([row, col], matrix));
            }   
            //add updated row to matrix
            new_matrix.push(current_row);
        }
    }
    console.log("Matrix Given: ",matrix);
    console.log("Matrix Returned: ", new_matrix);
    return new_matrix;
  }
  
  
  function check_neighbors(current_index,matrix){
    //current index is a array [n,y]
    let row = current_index[0];
    let col = current_index[1];
    //array of possible horizontal neighbors
    let hor_checks = [[row, col -1], [row, col +1]];
    //array of possible vertical neighbors
    let ver_cheks = [[row-1,col], [row+1, col]];
    //array of possible diagonal neiughbors
    let diagonal_checks = [[row-1, col-1], [row-1, col +1], [row+1, col -1], [row+1, col +1]];
  
    //total alive neighbors
    let total_alive_neighbors = neighbor_counter(hor_checks, matrix) + neighbor_counter(ver_cheks, matrix) + neighbor_counter(diagonal_checks, matrix);
    let am_i_alive = matrix[row][col];
    //check if cell is alive
    if(am_i_alive){
         //if number of alive neighbors = 2 or 3 stay alive
        if(total_alive_neighbors === 2 || total_alive_neighbors === 3){
            return true;
        }else{return false;}
    }
    //if cell is dead
    else{
        //if number of alive neighbors = 3 become alive
        if(total_alive_neighbors === 3){
            return true;
        }else{return false;}
    } 
  }
  
  //count number of alive neighbors
  function neighbor_counter(array, matrix){
    let current = 0;
    for(a of array){
        let row = a[0];
        let col = a[1];
        let row_number = matrix.length;
        let column_number = matrix[0].length;
        if(row >= 0 && col >= 0 && row < row_number && col < column_number){
            if(matrix[row][col]){
                current++;
            }
        }
    }
    return current;
  }