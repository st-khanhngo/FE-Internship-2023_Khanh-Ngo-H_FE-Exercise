// 10. Cho biết kết quả in ra của đoạn code sau.
// console.log('stack [1]');
// setTimeout(function A() { console.log('macro [2]')}, 0); 
// setTimeout(function B() { console.log('macro [3]')}, 0); 
// const p = Promise.resolve();
// p.then(function C() {
//   setTimeout(function D() {
//     console.log('macro [4]');
//     setTimeout(function E() { console.log('macro [5]')});
//     p.then(function F() { console.log('micro [6]') });
//   }, 0);
//   console.log('micro [7]');
// });
// console.log('stack [8]');

// Thứ tự output: stack [1] -> stack [8] -> micro [7] -> macro [2] -> macro [3] -> macro [4] -> micro [6] -> macro [5]

// => log(1) 
// setTimeout của function A() và B() và promise p là các async tasks nên được bỏ qua Web APIs chờ xử lý
// => log(8) 
// Ở callback queue, promise là microtask nên được ưu tiên chạy trước, bên trong có 1 hàm setTimeout được bỏ qua Web APIs
// => log(7)
// Thực thi 2 tasks còn lại ở callback queue
// => log(2)
// => log(3)
// Chạy funtion D(), tiếp tục bỏ function E() và F() qua Web APIs
// => log(4)
// Ưu tiên cho promise
// => log(6)
// => log(6)
