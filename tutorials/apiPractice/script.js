//HTML
const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = './logo.png'

const container = document.createElement('div')
container.className = 'container'

const errorMessage = document.createElement('marquee')
errorMessage.textContent = 'Gah ,its not working!'
app.append(errorMessage)

app.append(logo)
app.append(container)




var request = fetch('https://ghibliapi.herokuapp.com/films')
request
.then(response => response.json())
.then(data => collectData(data))
.catch(err => console.log(error))

console.log(app)

function collectData(data){
    data.forEach(movie => {
        //create div with card class
        const card = document.createElement('div')
        card.className = 'card'
        
        //Create an h1 and set the text content to the films title 
        const  h1 = document.createElement('p')
        h1.textContent = movie.title

        //create a p and set the text content to the films desrciption 
        const p = document.createElement('p')
        movie.description = movie.description.substring(0, 300) // limits to 300chars
        p.textContent = `${movie.description}...` //end with ellipses

        //Append the cars to the container element 
        container.append(card)

        card.append(h1)
        card.append(p)
            })
}

