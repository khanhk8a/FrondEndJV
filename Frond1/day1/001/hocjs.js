//dùng function như 1 tham số
// // function sum (a,b){
// return a+b;
// }
// sum(2,3); //có thể truyền được number , string, boolean, object, array
// var coffeeMachine = {
// 	makeCoffee: function(onFinish){
// 		console.log('Making Coffee:...');
// 		onFinish();
// 	}

// };
// var beep = function(){
// 	console.log('tít tít');
// };
// coffeeMachine.makeCoffee(beep);

/// aray map (biến đổi 1 hàm cũ thành hàm mới theo ...)
// array.map(function(item) {
// 	transform
//	//return newvalue 
// })
 
 // var numbers = [1,2,3,4];
 // var squaredNumbers = numbers.map(function(x){
 // 	return  x*x;
 // });
 // console.log(squaredNumbers) ;

//  var retangles = [
//  	{ w:12,h:24},
//  	{ w:13,h:24},
//  	{ w:14,h:24},
//  ]
 // var acreageRetangles = retangles.map(a => 
 // 	a.w * a.h);
//  console.log(acreageRetangles);

//array filter(tìm các phần tử  thỏa mãn điều kiện đầu vào)
// var numbers = [1, 2, 3, 4];
// var valueNumbers = numbers.filter(function(x) {
// 	return x % 2 === 0;
// });
// console.log(valueNumbers);

//array.find (tìm phần tử đầu tiên thỏa mãn điều kiện đầu vào)
// array reduce
 // var numbers = [1, 2, 4, 6]
 // var totalNumbers = numbers.reduce(function(x,y){
 // 	return x+y;
 // })
 // // console.log(totalNumbers);
 // var orders = [
 // 	{ name: 'táo', quantity: 2, unitPrice: 300 },
 // 	{ name: 'nho', quantity: 4, unitPrice: 100 },
 // 	{ name: 'mận', quantity: 3, unitPrice: 200 },
 // 	{ name: 'xoài', quantity: 2, unitPrice: 100 },
 // ];
 // var totals = orders.map(function(x){
 //  return x.quantity *x.unitPrice
	// }).reduce(function(x,y){
 //  return x +y;
	// });

 // // console.log(totals);
 // var users = [ 
 // 	{name:'Tom', gender: 'male'},
 // 	{name:'Telanas', gender: 'female'},
 // 	{name:'Athur', gender: 'male'},
 // 	{name:'Violet', gender: 'female'},
 // 	{name:'Taraa', gender: 'female'}
 // ];
 // var userList = $('#userList');
 // var genderFilter = $('#genderFilter');
 // render(userList,users);
 // function render(container,items){
	// var htmlItems = items.map(function(item){
 // 		return '<li class="list-group-item">'+ item.name +'</li>';
 // 		});	
 // 		var html = htmlItems.join('');
 // 		container.html(html);
 // 	}
 // 	// 	var content = '';
	// 	// for (var usee of users){
	// 	// 		content +='<li class="list-group-item">'+ usee.name +'</li>';
	// 	// 		document.getElementById('userList').innerHTML=content;
	// 	// };
 	
 // 	genderFilter.on('change',function() {
 // 		var selectGender= this.value;
 // 		/* Act on the event */
 // 		var filterUsers = users.filter(function(user) {
 // 			return user.gender === selectGender;
 // 		});
 // 		render (userList,filterUsers);

 // 	});
//  var products = [
//   {name: 'A', unitPrice: 100, quantity: 10, category: 'Electronics'},
//   {name: 'B', unitPrice: 50, quantity: 5, category: 'Electronics'},
//   {name: 'C', unitPrice: 200, quantity: 3, category: 'Wood'},
//   {name: 'D', unitPrice: 120, quantity: 6, category: 'Wood'},
//  ];
//  //filter các sản phẩm nằm trong category nào đó
//  //tính tổng số tiền hàng trong kho
//  // chọn ra sản phẩm có tiền hàng lớn (600);
 	
// function totaltien(){
// 	var totals = products.map(function(x){
// 		return x.unitPrice * x.quantity;
// 	}).reduce(function(a,b){
// 		var totals = a+b;
// 		return totals;
// 		document.getElementById('tongtien').innerHTML = totals;
// 	})
	
// 	console.log(totals);
// }
//sort array (sawsp xeesp trong mangr?)
// if sort function
// return value < 0
// 1. a will come before b;
// return value > 0
// 2.  a will come after b;
// return 0 
// 3. a and b will stay unchange

// var x = [1, 5, 2, 4, 3];
// var y = ['a', 'g', 'r', 'b', 'c'];

// var x1 = x.sort(function(a,b){
// 	return a-b;
// })
// console.log(x1);
// var x2 = x.sort(function(a,b){
// 	return b-a;
// })
// console.log(x2);

// var x3 = y.sort();
// console.log(x3);
// var x4 = y.reverse();
// console.log(x3);

//Math object trong javascript
//Math.PI tính diện tích hình tròn
// function discArea (r){
// 	return r * r * Math.PI
// }
// var s = discArea(5);
// console.log(s);
// //Math.ceil(number) làm tròn số thập phân 9,4 lấy 10;
// //Math.floor(number) làm tròn số thập phân 9,7 lấy 9;
// //Math.round(number);
// //Math.max(x1,x2,...); Nhận 2 hay nhiều tham số trở lên để só sánh các tham số;
// //Math.min(x1,x2,...);
// //Math.random();lấy số ngẫu nhiên nằm trong khoảng từ 0 -> 1. 
// function tossAcoin(){
// 	var random = Math.random();
// 	console.log(random);
// 	return random > 0.5;
// }
// // console.log('Mặt sấp', tossAcoin())
// function xucxac(number) {
// 	// var random = Math.random();
// 	return 'Bạn đã xóc được ' + Math.ceil((Math.random()) * Math.ceil(number));
// };
// console.log(xucxac(6));


//'new' key word
// var today =  new Date();
// console.log(today);

// function Mouse(color){
// 	this.weight = 0.2;
// 	this.color = color;
// }

// var mouse1 = new Mouse('White');
// var mouse2 = new Mouse('Black');

// console.log(mouse1);
// console.log(mouse2);
// var Tom = {
//   name: 'Tom',
//   stomach: [],
//   eat: function(Mouse){
//     this.stomach.push(Mouse);
//     return this;
//   }
// };

//  function Mouse(name){
//    this.name = name;
//  }

//  var m1 = new Mouse('m1');
//  var m2 = new Mouse('m2');
//  var m3 = new Mouse('m3');
//  Tom.eat(m1).eat(m2).eat(m3);

//  console.log(Tom);


//