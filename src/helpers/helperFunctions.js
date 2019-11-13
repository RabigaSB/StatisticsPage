import {postsList} from "./mock";

export function getRandomPost() {
    const inx = getRandomInt(postsList.length - 1, 0);
    return postsList[inx];
}

function getRandomInt (max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
