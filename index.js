// let items = document.querySelector('.item')
// let btn = document.forms.submit

// // btn.forEach(item => {
// //     let btn = item.firstElementChild

// //     btn.onclick
// // })

// let form = document.forms.signup
// let inps = document.querySelectorAll('input')



// form.onsubmit = (event) => {
//     event.preventDefault();
//     let error = false
//     if(form.length === 0) {
//         error = true
//     } else {
//         inps.textContent = "ok"
//     }



//     if(error) {
//         alert('go home')
//     } else {
//         submit()
//     }
// }

// function submit() {
//     let user = {}

//     let fm = new FormData(form)

//     fm.forEach((value, key) => {
//         user[key] = value
//     })

//     console.log(user);
// }



let form = document.forms.signup
let inps = form.querySelectorAll('.js_inputs')



form.onsubmit = (event) => {
    event.preventDefault();
    let error = false

    inps.forEach(inp => {
        if(inp.value.length === 0) {
            error = true
            inp.classList.add('error')
        } else {
            inp.classList.remove('error')
        }
    })

    if(error) {
        alert('go home')
    } else {
        submit()
    }
}

function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}