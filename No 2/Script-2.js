const formArea = document.getElementById('volForm')
const Ans = document.getElementById('volumeAns')
let radiusVal = document.getElementById('radius')

formArea.addEventListener('submit', function (e) {
    e.preventDefault()

    const radius = parseFloat(radiusVal.value)
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)

    if (isNaN(radius)) {
        Ans.innerText = 'Please enter valid value for the Radius.'
    } else {
        Ans.innerText = 'The volume of the sphere is: ' + volume.toFixed(2)
    }
})