let advices = [];
const btnAdd = document.querySelector('.add');
const btnRemove = document.querySelector('.clear');
const btnShowAdvice = document.querySelector('.showAdvice');
const btnShowPossibilies = document.querySelector('.showOptions');
const input = document.querySelector('input');
let h1 = document.querySelector('h1');

const addAdvice = (e) => {
    e.preventDefault();

    if (input.value) {
        advices.push(input.value)
        console.log(advices)
        alert(`Thank you for help. Your list of advices: ${advices.join(', ')}`)
        input.value = '';
    } else {
        alert('Please write your advice!');
    }

}

btnAdd.addEventListener('click', addAdvice)


btnRemove.addEventListener('click', function(e) {
    e.preventDefault();
    advices.lenght = 0;
})

const showAdvice = () => {
    h1.textContent = advices[Math.floor(Math.random() * advices.length)]
}

btnShowAdvice.addEventListener('click', showAdvice)

const showPossibilities = function() {
    h1.textContent = advices.join('-- --');
}

btnShowPossibilies.addEventListener('click', showPossibilities)





// const showAdvice = () => {
//     const index = Math.floor(Math.random() * advices.length);
//     h1.textContent = advices[index];
// }

// btnShowAdvice.addEventListener('click', showAdvice)



// const addAdvice = (e) => {
//     e.preventDefault();
//     advices.push(input.value);
//     console.log(advices)
//     alert(`You added new option: ${ input.value}.`)
//     input.value = "";
// }
// btnAdd.addEventListener('click', addAdvice)



// const removeAdvices = (e) => {
//     e.preventDefault();
//     advices.length = 0;

// }

// btnRemove.addEventListener('click', removeAdvices)




// const showPossibilities = () => {
//     alert(advices.join('-- -- -- '));
// }

// btnShowPossibilies.addEventListener('click', showPossibilities)