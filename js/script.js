

// adding new 'li' into the to-do list 
let task = document.getElementById('task')
let addBtnDOM = document.querySelector('#liveToastBtn')
let ulDOM = document.querySelector('#list')
const alertDOM = document.querySelector('#alert')
const alertDOM2 = document.querySelector('#alert2')

const ALERT = ` 
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="...">
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
`
const ALERT2 = `
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="...">
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
`

addBtnDOM.addEventListener('click', formHandler)

function formHandler(event) {
    event.preventDefault()
    if (task.value) {
        addItem()
        task.value = ""
        alertDOM.innerHTML = ALERT
    } else {
        alertDOM2.innerHTML = ALERT2
    }
}


// create li
function addItem() {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = task.value
    ulDOM.append(liDOM)
    // create span
    const spanDOM = document.createElement('span')
    spanDOM.innerHTML = 'x'
    liDOM.appendChild(spanDOM)
    const closeDOM = document.querySelectorAll('ul#list>span')
    for( let index = 0; index < closeDOM.length; i++ ) {
        closeDOM[index].addEventListener('click', () => {
          closeDOM[index].parentElement.style.display = "none"
        })
    }
}


