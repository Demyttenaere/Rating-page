const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const btn = document.getElementById('btn');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.choice');

btn.addEventListener("click", () => {         /* lorsqu'on click sur btn */
    page2.classList.remove('hidden');         /* on fait apparaitre la page 2 en enlevant hidden qui contient le display none */
    page1.style.display = "none" ;            /* on fait disparaitre la page 1 avec display none*/
})

rates.forEach((rate) => {                       /* pour chaque élément de rates */ 
rate.addEventListener("click", () =>{           /* lorsque l'on click sur un éleément de rates donc rate*/ 
    rating.innerHTML = rate.innerHTML;          /* on remplace rating par la valeur de rate selectionné */
})
})
