const topLeftEl = document.querySelector(".top_left");
const topMiddleEl = document.querySelector(".top_middle");
const topRightEl = document.querySelector(".top_right");
const leftMiddleEl = document.querySelector(".left_middle");
const centerEl = document.querySelector(".center");
const rightMiddleEl = document.querySelector(".right_middle");
const bottomLeftEl = document.querySelector(".bottom_left");
const bottomMiddleEl = document.querySelector(".bottom_middle");
const bottomRightEl = document.querySelector(".bottom_right");
const checkEl = document.querySelector(".check");
const playersEl = document.querySelector(".players");
const compEl = document.querySelector(".comp")

function ticTacToe()
{
    topLeftEl.addEventListener("click", function()
    {
        checkValue(topLeftEl);

    })
    
    topRightEl.addEventListener("click", function()
    {
        checkValue(topRightEl);

    })

    topMiddleEl.addEventListener("click", function()
    {
        checkValue(topMiddleEl);

    })

    leftMiddleEl.addEventListener("click", function()
    {
        checkValue(leftMiddleEl);

    })

    centerEl.addEventListener("click", function()
    {
        checkValue(centerEl);

    })

    rightMiddleEl.addEventListener("click", function()
    {
        checkValue(rightMiddleEl);

    })

    bottomMiddleEl.addEventListener("click", function()
    {
        checkValue(bottomMiddleEl);

    })

    bottomRightEl.addEventListener("click", function()
    {
        checkValue(bottomRightEl);

    })

    bottomLeftEl.addEventListener("click", function()
    {
        checkValue(bottomLeftEl);

    })
}

function player()
{
    playersEl.addEventListener("click", function()
    {
        compEl.classList.add("btnClose");
        playersEl.classList.add("btnClose");
    })
}

function  computer()
{
    compEl.addEventListener("click", function()
    {
        playersEl.classList.add("btnClose");
        
        let arr2 = 
            [topLeftEl, topMiddleEl, topRightEl, leftMiddleEl, centerEl,
            rightMiddleEl, bottomLeftEl, bottomMiddleEl, bottomRightEl
            ]
        let rand = arr2[Math.floor(Math.random() * arr2.length)];
        if(rand.innerHTML === "")
        {
            rand.innerHTML = "O";
        }
        else
        {
            alert("click again");
        }
        
    })
}

function checkResult()
{
    
    checkEl.addEventListener("click", function()
    {
        checkXs();
    })
}

function checkXs()
{
    if(topLeftEl.innerHTML === "X" && topMiddleEl.innerHTML === "X" && topRightEl.innerHTML === "X")
    {
        alert("X is the winner!");
    }
    else if(topLeftEl.innerHTML === "X" && leftMiddleEl.innerHTML === "X" && bottomLeftEl.innerHTML === "X")
    {
        alert("X is the winner!");
    }
    else if(topMiddleEl.innerHTML === "X" && centerEl.innerHTML === "X" && bottomMiddleEl.innerHTML === "X")
    {
        alert("X is the winner!");
    }
    else if(topRightEl.innerHTML === "X" && rightMiddleEl.innerHTML === "X" && bottomRightEl.innerHTML === "X")
    {
        alert("X is the winner!");
    }
    else if(topLeftEl.innerHTML === "X" && centerEl.innerHTML === "X" && bottomRightEl.innerHTML === "X")
    {
        alert("X is the winner!");
    }
    else if(topRightEl.innerHTML === "X" && centerEl.innerHTML === "X" && bottomLeftEl.innerHTML === "X")
    {
        alert("X is the winner!");
    }
    else if(leftMiddleEl.innerHTML === "X" && centerEl.innerHTML === "X" && rightMiddleEl.innerHTML === "X")
    {
        alert("X is the winner!");
    }
    else if(bottomLeftEl.innerHTML === "X" && bottomMiddleEl.innerHTML === "X" && bottomRightEl.innerHTML === "X")
    {
        alert("X is the winner!");
    }
    else
    {
        checkOs();
    }
}

function checkOs()
{
    if(topLeftEl.innerHTML === "O" && topMiddleEl.innerHTML === "O" && topRightEl.innerHTML === "O")
    {
        alert("O is the winner!");
    }
    else if(topLeftEl.innerHTML === "O" && leftMiddleEl.innerHTML === "O" && bottomLeftEl.innerHTML === "O")
    {
        alert("O is the winner!");
    }
    else if(topMiddleEl.innerHTML === "O" && centerEl.innerHTML === "O" && bottomMiddleEl.innerHTML === "O")
    {
        alert("O is the winner!");
    }
    else if(topRightEl.innerHTML === "O" && rightMiddleEl.innerHTML === "O" && bottomRightEl.innerHTML === "O")
    {
        alert("O is the winner!");
    }
    else if(topLeftEl.innerHTML === "O" && centerEl.innerHTML === "O" && bottomRightEl.innerHTML === "O")
    {
        alert("O is the winner!");
    }
    else if(topRightEl.innerHTML === "O" && centerEl.innerHTML === "O" && bottomLeftEl.innerHTML === "O")
    {
        alert("O is the winner!");
    }
    else if(leftMiddleEl.innerHTML === "O" && centerEl.innerHTML === "O" && rightMiddleEl.innerHTML === "O")
    {
        alert("O is the winner!");
    }
    else if(bottomLeftEl.innerHTML === "O" && bottomMiddleEl.innerHTML === "O" && bottomRightEl.innerHTML === "O")
    {
        alert("O is the winner!");
    }
    else
    {
        alert("Sorry no winner");
    }
}

function checkValue(val)
{
    if(val.innerHTML !== "")
    {
        alert("Value entered! Try another")
    }
    else
    {
        val.innerHTML = window.prompt("Enter X or 0 please").toUpperCase();
    }
}

ticTacToe();
checkResult();
computer();
player();
