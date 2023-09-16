const formArea = document.getElementById('volForm')
const Ans = document.getElementById('volumeAns')
let piVal = document.getElementById('pi')
let radiusVal = document.getElementById('radius')

formArea.addEventListener('submit', function (e) {
    e.preventDefault()

    const pi = parseFloat(piVal.value)
    const radius = parseFloat(radiusVal.value)
    const volume = (4 / 3) * pi * Math.pow(radius, 3)

    if (isNaN(pi) || isNaN(radius)) {
        Ans.innerText = 'Please enter valid numbers for Pi and Radius.'
    } else {
        Ans.innerText = 'The volume of the sphere is: ' + volume.toFixed(2)
    }
})



// let submit = document.getElementById('volume-ans')


// submit.onclick = function volumeDisplay(){
//     volumeAns.innetHTML=getVal()
// }
// first input the values in the form, the type 'console.log(getVal())' in the console to get tht result.