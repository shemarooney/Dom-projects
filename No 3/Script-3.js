const name = document.getElementById('userName')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('userNameError')
const errorElement2 = document.getElementById('passwordError')

form.addEventListener('submit', (e) => {

    errorElement.innerHTML=''
    errorElement2.innerHTML=''
    
    const usernamePattern = /^[a-z0-9_.]{5,10}$/

    if (name.value.trim() === '') {
        errorElement.innerHTML='Username is required'
        e.preventDefault()
    } else if (!usernamePattern.test(name.value)) {
        errorElement.innerHTML = 'Username must contain 5-10 characters and consist of lowercase letters, numbers, underscores (_), or periods (.) only.'
        e.preventDefault()
    }

    if (!CheckPassword(password.value)) {
        errorElement2.innerHTML='Password should contain 8-16 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character.'
        e.preventDefault()
    }
})

function CheckPassword(password) {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/
    return password.match(decimal) !== null
}