var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
		function logArray(arr){
			for (var index in x){
				console.log(x[index]);
			}
		}
		x.push(100)
		logArray(x)
		x += ["hello", "world", "JavaScript is Fun"]
		console.log(x)
		var sum = 0
		for(var i = 1; i<501; i++){
			sum += i;
		}
		console.log(sum);
		var arr = [1,5,90,25,-3,0];
		var min = arr[0]
		for(var i=1; i<arr.length; i++){
			if(arr[i]<min){
				min = arr[i]
			}
		}
		console.log(min);
		var sum = 0
		for(var i=0; i<arr.length; i++){
			sum += arr[i];
		}
		var avg = sum/arr.length;
		console.log(avg);

		var new_ninja = {
		 name: 'Jessica',
		 profession: 'coder',
		 favorite_language: 'JavaScript', //like that's even a question!
		 dojo: 'Dallas'
		}
		for(var key in new_ninja){
			console.log(key, new_ninja[key]);
		}