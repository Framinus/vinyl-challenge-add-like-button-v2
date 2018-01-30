console.log('hello from the browser JavaScript')

const likeBtn = document.querySelector('#like-btn')
const likeCounter = document.querySelector('#like-counter')

let counter = Number(likeCounter.innerHTML)

const addLike = (event) => {
  event.preventDefault()
  const albumId = likeBtn.getAttribute("data-id")
  fetch(`/albums/${albumId}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((addedLike) => {
      if (addedLike) {
        likeBtn.classList.add('red-border')
        likeBtn.disabled = true
        counter += 1
        likeCounter.innerHTML = counter
      }
    })
}

likeBtn.addEventListener('click', addLike)
