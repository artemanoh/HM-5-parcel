import { add, multiply, subtract, divide } from './calculator';

const x = 10;
const y = 5;

document.querySelector('#sum').textContent = `Сума ${x} + ${y} = ${add(x, y)}`;
document.querySelector('#subtract').textContent = `Віднімання ${x} - ${y} = ${subtract(x, y)}`;
document.querySelector('#multiply').textContent = `Ділення ${x} + ${y} = ${multiply(x, y)}`;
document.querySelector('#divide').textContent = `Ділення ${x} / ${y} = ${divide(x, y)}`;