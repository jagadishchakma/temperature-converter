export function fahToCel(value){
    if(value === ''){
        return '';
    }else{
        let result =  (parseFloat(value) - 32) * 5/9;
        return result;
    }
}

export function celToFah(value){
    if(value === ''){
        return '';
    }else{
        let result =  (9/5)*parseFloat(value)+32
        return result;
    }
    
}