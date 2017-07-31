'use strict';

module.exports = {

    aritGeo: (array) => {
        //check if the array is empty
        if(array.length < 1 ){
            return 0;
        }
        else{
            //collect the the diffrence or quaitent of the array values
            const arith = array[1] - array[0];
            const geo = array[1] / array[0];

            //set arithmetic and geometric variables to zero
            let arithmetic = true;
            let geometric = true;

            //loop through to determine if its geometric or arithmetic
            for(let i =0; i < array.length-1; i++ ){
                
                if(array[i+1] - array[i] != arith ){
                    arithmetic = false;
                }

                if(array[i+1] / array[i] != geo ){
                    geometric = false;
                }
                
            }

            //if is arithmetic; return value
            if(arithmetic == true){
                return 'Arithmetic';

            //if is Geometric; retune values
            }else if(geometric == true){
                return 'Geometric';

            //if its  none, return value
            }else if(arithmetic == false && geometric == false){
                return -1 ;
            }
        }
    }
}