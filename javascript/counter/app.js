//set initial count
let count = 0 

let value = document.querySelector('#value')
let btns = document.querySelectorAll('.btn')

console.log(btns)

btns.forEach(button => {
    button.addEventListener('click',e => {
       const styles = e.currentTarget.className
       console.log(styles)
       switch(styles){
         case 'btn decrease':
             count--
             value.textContent = count
             value.style.color = 'red'
             break;
         case 'btn reset':
             count = 0 
             value.textContent = count
             value.style.color = 'black'
             break;
         case 'btn increase':
            count++
            value.textContent = count
            value.style.color = 'green'
            break;
       }
    } )
})
