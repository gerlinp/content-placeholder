const header = document.querySelector('#header')
const title = document.querySelector('#title')
const excerpt = document.querySelector('#excerpt')
const profile_img = document.querySelector('#profile_img')
const name = document.querySelector('#name')
const date = document.querySelector('#date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1544785349-c4a5301826fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGRqfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="telephone wire sneakers">';
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, neque?'
    profile_img.innerHTML='<img src="https://pbs.twimg.com/profile_images/1345166857318363136/8cdizeYM_200x200.jpg" alt=""/>'
    name.innerHTML = 'Gerlin'
    date.innerHTML = 'Oct 08, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}