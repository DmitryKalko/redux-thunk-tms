// еще варинт асинхронных действий в redux это redux-saga
// она значительно сложнее и гораздо реже используется в проектах
// она работает на генераторах
// мы ее с вами рассматривать не будем но про генераторы немного расскажу - может понадобится

// функция генератор - ее выполнение можно управлять и возвращать несколько значений из одной функции
function* fn(num) {  
  for (let i = 0; i < num; i += 1) {
    yield console.log(i)  //  0, 1
  }
}
const loop = fn(5);
loop.next();  // возвращает объект генератора  {value: undefined, done: false}  // value: значение из yield.
loop.next();

//

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let generator = generateSequence();
let one = generator.next();
console.log(JSON.stringify(one)); // {value: 1, done: false}

// Повторный вызов generator.next() возобновит выполнение и вернёт результат следующего yield:
let two = generator.next();
console.log(JSON.stringify(two)); // {value: 2, done: false}


// И, наконец, последний вызов завершит выполнение функции и вернёт результат return:
let three = generator.next();
console.log(JSON.stringify(three)); // {value: 3, done: true}

// Функция завершена.
// Внешний код должен увидеть это из свойства done:true и обработать value:3, как окончательный результат.
// Новые вызовы generator.next() больше не имеют смысла.
// Но если их вызвать, то ошибки не будет, но будут возвращать один и тот же объект: {done: true}.
// «Открутить назад» завершившийся генератор нельзя
// но можно создать новый ещё одним вызовом generateSequence() и выполнить его.