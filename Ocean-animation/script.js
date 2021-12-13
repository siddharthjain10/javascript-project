const trashContainer = document.querySelector('.trash-container');
const moneyEle = document.querySelector('.money');

const trashFormatter = new Intl.NumberFormat('en-us', { 
    maximumFractionDigits: 0,
    minimumIntegerDigits: 8,
    useGrouping: false
})

const currencyFormatter = new Intl.NumberFormat('en-us', { 
    style: 'currency', 
    currency: 'USD',
    maximumFractionDigits: 0    
})

const MAX_AMOUNT = 30000000;
setupTrash();

async function setupTrash(){
    const amountRaised = await fetch('https://tscache.com/donation_total.json')
    .then(response => response.json())
    .then(response => response.count);
    moneyEle.innerText = currencyFormatter.format(amountRaised);

    const amountLeftToRaise = Math.max(MAX_AMOUNT-amountRaised, 0);
    const stringifiedAmount  = trashFormatter.format(amountLeftToRaise);
    const trashAmount = {
        xxl:{
            amount: parseInt(`${stringifiedAmount.slice(0,2)}`),
            icon:'bag'
        },
        xl:{
            amount: parseInt(`${stringifiedAmount[2]}`),
            icon:'dineout'
        },
        lg:{
            amount: parseInt(`${stringifiedAmount[3]}`),
            icon:'headphone'
        },
        md:{
            amount: parseInt(`${stringifiedAmount[4]}`),
            icon:'phone'
        },
        sm:{
            amount: parseInt(`${stringifiedAmount[5]}`),
            icon:'toy'
        },
        xs:{
            amount: parseInt(`${stringifiedAmount[6]}`),
            icon:'bottle'
        },
    }
    Object.values(trashAmount).forEach(({amount,icon}) => {
        for(let i = 0; i <amount; i++){
            createTrash(icon);
        }
    })
}


function createTrash(icon){
    const img = document.createElement('img');
    const top = randomNumberBetween(0,50)
    const left = randomNumberBetween(0,100)
    const size = top/5+1
    img.classList.add('trash')
    img.src = `./imgs/${icon}.svg`
    img.style.top = `${top}vh`
    img.style.left = `${left}vw`
    img.style.width = `${size}vmin`
    img.style.height = `${size}vmin`
    img.style.setProperty("--rotation", `${randomNumberBetween(-40,40)}deg`)
    trashContainer.appendChild(img)
}


function randomNumberBetween(min, max){
    return Math.floor(Math.random() * (max-min+1) + min)
}