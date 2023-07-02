function anagrama(p1, p2) {
    let palabra1 = p1.split('').sort();
    let palabra2 = p2.split('').sort();

    let result = true;

    if(p1.length === p2.length){
        for (let i = 0; i < palabra1.length; i++) {
            if(palabra1[i] !== palabra2[i]){
                result = false;
            }
            
        }
    }else{
        result =  false;
    }

    console.log(result);
}

anagrama('gato', 'toge');

