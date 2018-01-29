console.log('hello from the browser JavaScript')

const likeBtn = document.querySelector('#like-btn')
const likeCount = document.querySelector('.like-count')
let count = Number(likeCount.innerHTML)
console.log('count', count)


const likeAlbum = (event) => {
  event.preventDefault()
  const id = likeBtn.getAttribute('data-id')
  fetch(`/albums/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({id}),
  })
    .then(response => response.json())
    .then((sentLike) => {
      console.log('sentLike', sentLike)
      // change the button border to red.
      likeBtn.classList.add('red-border')
      likeBtn.disabled = true
      // update the likes count.
      count += 1
      likeCount.innerHTML = count
    })
    .catch((err) => {
      console.error(err)
    })
}

likeBtn.addEventListener('click', likeAlbum)
