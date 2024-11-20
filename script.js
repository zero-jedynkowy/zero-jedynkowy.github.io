// let childElement = '<div class="char">_</div>'
// let myName = "Karol Ambrozinski"
// let myNick = "zero-jedynkowy"
// let enterTextSymbol = "|"

// console.log('ss')

// let index = 0
// let nowIsNick = false
// let mainElement = document.querySelector('.mainNick')
// let intervalHolder = null

// function fillName()
// {
//     mainElement.innerHTML += childElement.replace('_', myName[index])
//     index++
//     if(index >= myName.length) clearInterval(intervalHolder)
// }

///////////////////////////////////////////////////////////////////
let textEnterSymbol = document.querySelector('.textEnterSymbol')
let textEnterSymbolInterval = null
let textEnterSymbolMode = 0


function startTextEnterSymbol()
{
    textEnterSymbolInterval = setInterval(() => 
    {
        if(textEnterSymbolMode == 0)
        {
            textEnterSymbol.style.display = "block"
            textEnterSymbolMode = 1
        }
        else
        {
            textEnterSymbol.style.display = "none"
            textEnterSymbolMode = 0
        }
        console.log('sss')
    }, 250)
}
//////////////////////////////////////////////////////////////////

let mainText = document.querySelector('.mainText')
let childElement = '<div class="char">_</div>'
let myName = "Karol Ambrozinski"
let myNick = "zero-jedynkowy"
let mainTextMode = 0
let mainTextTemp = myName
let mainTextIndex = 0

function x()
{
    switch(mainTextMode)
    {
        case 0:
        {
            mainText.innerHTML += mainTextTemp[mainTextIndex];
            mainTextIndex++
            if(mainTextIndex >= mainTextTemp.length)
            {
                mainTextMode = 1
                mainTextIndex = mainTextTemp.length
            }
            break
        }
        case 1:
        {
            
            mainText.innerHTML = mainText.innerHTML.slice(0, mainTextIndex)
            mainTextIndex -= 1
            if(mainText.innerHTML.length == 0) mainTextMode = 2
            break
        }
        case 2:
        {
            if(mainTextTemp == myName)
            {
                mainTextTemp = myNick
            }
            else
            {
                mainTextTemp = myName
            }
            mainTextIndex = 0
            mainTextMode = 0
            break
        }

    }
    
}

function startFillText()
{
    setInterval(x, 100)
}
//////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////

function pulseFourierSeriesPart(n, tau, T)
{
    let part1 = Math.sin(Math.PI*n*(tau/T))
    part1 *= Math.cos(2*Math.PI*(1/T)*t)
    part1 *= (1/n)
    return part1
}

function getFourierPulse(A, tau, T, N)
{
    let part1 = 0
    for(let i=1; i<N; i++)
    {
        part1 += pulseFourierSeriesPart(i, tau, T)
    }
    part1 *= ((2*A)/(Math.PI))
    part1 += (A*tau)/T
    return part1
}

// let myCanva = document.querySelector('.myFourier')
// let myCanvaContext = myCanva.getContext('2d')

function drawFourier()
{
    myCanvaContext.fillStyle = "red";
    myCanvaContext.fillRect(0, 0, 500, 500);
    for(let i=0; i<500; i++)
    {
        let x = getFourierPulse(100, 5, 10, 100)
        myCanvaContext.beginPath();
        myCanvaContext.moveTo(0, 0);
        myCanvaContext.lineTo(500, 500);
        myCanvaContext.stroke();
    }



}

/////////////////////////////////////////////////////////////////////
function start()
{
    startTextEnterSymbol()
    startFillText()
    // drawFourier()
}

window.addEventListener('DOMContentLoaded', function() 
{
    
    
    start()






});