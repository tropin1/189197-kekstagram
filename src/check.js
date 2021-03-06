function getMessage(a, b) {
	if (( typeof a ) === 'boolean' ) {
		if (a === true ){
		     return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров'
		    }
		    else {
		     return 'Переданное GIF-изображение не анимировано'
		    }
	}
	else if (( typeof a ) === 'number' ) {
	 return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + b * 4 + ' атрибутов';
	}

	else if ( Array.isArray(a)  && Array.isArray(b)) {	
		function arraysSum(array1, array2){ 
			var sum = 0;
			for(var i = 0; i < array1.length || i < array2.length; i++){
    		sum += array1[i] * array2[i];
    		} 
    return sum
	}

	var artifactsSquare = arraysSum(a, b);
	 return 'Общая площадь артефактов сжатия: ' + artifactsSquare + ' пикселей';
		}
	else if ( Array.isArray(a)) {

		function arraySum(array){ 
			var sum = 0;
			for(var i = 0; i < array.length; i++){
    		sum += array[i];
    		} 
    return sum
	}
	var amountOfRedPoints = arraySum(a);
	 return 'Количество красных точек во всех строчках изображения: ' + amountOfRedPoints;
	}
}
