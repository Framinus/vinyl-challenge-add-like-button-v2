console.log('hello from the browser JavaScript')

document.addEventListener('DOMContentLoaded', () => {
  const likebtn = document.querySelector('.like-btn')
  const counter = document.getElementById('counter')
  const count = Number(counter.innerHTML)

  const addALike = (event) => {
    event.preventDefault()
    const albumID = likebtn.getAttribute('data-id')
    const liked = likebtn.getAttribute('data-liked')
    console.log('liked', liked)
    if (liked === 'false') {
      fetch(`/albums/${albumID}/likes`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/JSON',
        },
        credentials: 'include',
        body: JSON.stringify({albumID}),
      })
        .then((response) => {
          response.json()
        })
        .then((addedLike) => {
          likebtn.classList.add('red-border')
          counter.innerHTML = count + 1
        })
    }
  }
  likebtn.addEventListener('click', addALike)
})
