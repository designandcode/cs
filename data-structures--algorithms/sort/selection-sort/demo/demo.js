// Selection O(n^2) Time and O(n) Space Complexities
function selectionSort(A) {

  var pos = 0;
  var arr = [];

  while (A.length) {
    minimum = A[0];
    
    for (var i = 0; i < A.length; i++) {
      if (A[i] <= minimum) {
        pos = i;
      }
    }

    minimum = A.splice(pos, 1)[0];
  
    arr.push(minimum);
  }
  
  return arr;
}


document.addEventListener('DOMContentLoaded', function(event) {
    
	var unsorted = [2, 4, 1, 9, 8, 3];
	var input = document.getElementById('input');
	input.innerHTML = libArrayPrinter(unsorted);

	// interactive
	var before = document.getElementById('before');
	var lowest = document.getElementById('lowest');
	var after = document.getElementById('after');
	after.innerHTML = '';


	// this is just to demonstrate the algo over time
	window.pause(1000, 0, before, lowest, after, [2, 4, 1, 9, 8, 3]);

	setTimeout( () => {
		window.pause(1000, 0, before, lowest, after, [2, 4, 9, 8, 3]);
	}, 8000);
	setTimeout( () => {
		window.pause(1000, 0, before, lowest, after, [4, 9, 8, 3]);
	}, 15000);
	setTimeout( () => {
		window.pause(1000, 0, before, lowest, after, [4, 9, 8]);
	}, 21000);
	setTimeout( () => {
		window.pause(1000, 0, before, lowest, after, [9, 8]);
	}, 26000);
	setTimeout( () => {
		window.pause(1000, 0, before, lowest, after, [9]);
	}, 29000);
	setTimeout( () => {
		window.pause(1000, 0, before, lowest, after, []);
	}, 31000);
	

	
	// actually run and display the results of the algorithm
	var sorted = window.selectionSort(unsorted);
	var output = document.getElementById('output');
	output.innerHTML = libArrayPrinter(sorted);

});

function libArrayPrinter (array) {

	var str = '';

	str += '[ ';

	var arrstr = array.reduce( (p, c, i, a) => {
		return i < a.length - 1 ? `${p} ${c}, ` : `${p} ${c}`;
	}, '');

  str += arrstr;

	str += ' ]';

	return str;
}



var r = [];

function pause (time, p, dom, dom2, dom3, arr) {

	// create the dom from arr
	var before = '';

	arr.forEach( (x, i) => {

		if (i===0) {
			before += `<span class="active">${x}</span>`;
		} else {
			before += `<span>${x}</span>`
		}
	});

	dom.innerHTML = before;

	var children = dom.querySelectorAll('span');
	var t = 0;
	var l = arr[0];

	children.forEach( (child, idx) => {
		t = time * idx + 1000;

		window.setTimeout( () => {

			if (arr[idx] < l) { l = arr[idx] }

			children.forEach((c) => c.classList.remove('active'));
			child.classList.add('active');
			
			if (Number(child.innerHTML) <= l) { // innerHTML is string
				children.forEach((c) => c.classList.remove('lowest'));
				child.classList.add('lowest');
			}
		}, time * idx);

	});

	window.setTimeout( () => {
		
		dom2.innerHTML = l;

		if (l) {
			r.push(l);
			dom3.innerHTML = libArrayPrinter(r);
		}
	}, t);
}
