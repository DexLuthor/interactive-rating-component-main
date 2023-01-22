document.getElementById('submit-btn').onclick = () => {
    let desc = document.getElementsByClassName('modal__selection')[0];
    desc.innerText = desc.innerText.replace('${jsplaceholder}', rating)
    document.getElementById('rate-us').style.display = 'none'
    document.getElementById('thank-you').style.removeProperty('display')
}

let rating = 0

const buttons = [...document.getElementsByClassName('btn-rating')]
const onclick = clickedBtnIdx => {
    return () => {
        buttons.forEach(btn => {
            if (+btn.innerText === clickedBtnIdx) {
                btn.classList.add('btn-rating-active')
                rating = btn.dataset.value
            } else {
                btn.classList.remove('btn-rating-active')
            }
        })
    }
}
buttons.forEach((btn, i) => btn.onclick = onclick(i + 1))
