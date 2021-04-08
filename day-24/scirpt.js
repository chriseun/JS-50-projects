const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const progile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date= document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1500)

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1501594852399-9b80db815224?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="" />';
        title.innerHTML = 'Lorem ipsum dolor sit amet.'
        excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid';
        profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/90.jpg" alt="" />';
        name.innerHTML = 'John Doe'
        date.innerHTML = 'Oct 08, 2020'

        animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))

        animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}
