var lists = document.getElementById('container').children
let result = []
lists.forEach(node => {
  if (node.getAttribute('data-tag').match(/css/))
    result.push({
      name: node.children[1].innerText,
      url: node.children[1].children[0].href
    })
});

let iframe = document.createElement('iframe')
document.innerHTML = ''
document.body.appendChild(iframe)

function happen(element, event) {
  return new Promise(function (resolve) {
    let handler = () => {
      resolve()
      element.removeEventListener(event, handler)
    }
    element.addEventListener(event, handler)
  })
}

void async function () {
  for (let standard of result) {
    iframe.src = standard.url
    console.log(standard.name)
    await happen(iframe, "load")
  }
}