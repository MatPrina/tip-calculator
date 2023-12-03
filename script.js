const botoes = document.querySelectorAll('.btnPercentage')
const inputBill = document.getElementById('input-bill')
const inputPerson = document.getElementById('input-people')
const inputCustom = document.getElementById('input-custom')
const tipValue = document.getElementById('tip-value')
const totalValue = document.getElementById('total-value')
const btnReset = document.getElementById('btnReset')

let bill = {
    value: 0,
    tip: 0,
    person: 0
}

function calculeTip(bill) {
    const tip = {
        tip: ((bill.value / 100) * bill.tip) / bill.person,
        total: ((bill.value / 100) * bill.tip + bill.value) / bill.person
    }
    tipValue.innerText = tip.tip.toFixed(2)
    totalValue.innerText = tip.total.toFixed(2)
}

inputBill.addEventListener('input', () => {
    bill.value = Number(inputBill.value)
    if(bill.tip !== 0 && bill.person !== 0) {
        calculeTip(bill)
    }
})

inputPerson.addEventListener('input', () => {
    bill.person = Number(inputPerson.value)
    if(bill.tip !== 0 && bill.value !== 0) {
        calculeTip(bill)
    }
})

inputCustom.addEventListener('input', () => {
    botoes.forEach((botao) => {
        botao.classList.remove('selecionado')
    })
    bill.tip = Number(inputCustom.value)
    if(bill.value !== 0 && bill.person !== 0) {
        calculeTip(bill)
    }
})

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        if(botao.classList.contains('selecionado')) {
            return
        } else {
            botao.classList.add('selecionado')
            inputCustom.value = ""
            bill.tip = Number(botao.value)
            if(bill.value !== 0 && bill.person !== 0) {
                calculeTip(bill)
            }
            for(let i = 0; i <=5; i++) {
                if(i !== index) {
                    botoes[i].classList.remove('selecionado')
                }
            }

        }
    })
})

btnReset.addEventListener('click', () => {
    inputBill.value = ""
    inputPerson.value = ""
    inputCustom.value = ""
    tipValue.innerText = "0.00"
    totalValue.innerText = "0.00"
    botoes.forEach((botao) => {
        botao.classList.remove('selecionado')
    })
    bill = {
        value: 0,
        tip: 0,
        person: 0
    }
})


