const counter = document.querySelector('.counter')
const increaseBtn = document.querySelector('.increase-btn')
const decreaseBtn = document.querySelector('.decrease-btn')

let count = 0;
cost max = 0;

const handleIncrease = () => {
    console.log('click!!')
    if (count >= max) return;
    count += 1
    counter.innerHTML = count;
    console.log('plus');
    // updateValue()
};

increaseBtn.addEventListener('click', handleIncrease)

console.log('increase!!', increaseBtn)
console.log('decrease', decreaseBtn)