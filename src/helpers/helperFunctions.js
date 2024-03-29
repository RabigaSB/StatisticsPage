import {postsList} from './mock';

export function getRandomPost() {
    const inx = getRandomInt(postsList.length - 1, 0);
    return postsList[inx];
}

export function getRandomInt (max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getValuesSum (obj) {
    return Object.values(obj).reduce((sum, expense) => {
        return sum + expense;
    }, 0);
}

export function roundFloat (num) {
    return Math.round(num * 100) / 100
}

export function saveExpensesToLS(data) {
    const string = JSON.stringify(data);
    localStorage.setItem('expenses', string);
}

export function removeExpensesFromLS() {
    localStorage.removeItem('expenses');
}

export function loadExpensesFromLS() {
    const string = localStorage.getItem('expenses');
    return JSON.parse(string);
}
