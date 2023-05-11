const book = {
    title: 'One Piece Volume 1',
    author: 'Oda Eiichiro',
    publisher: 'VIZ MEDIA',
    release: 1997,
    units: 35000000,
    price: '€9,99'
}

let output = document.querySelector('.output');
output.innerHTML = `
<p>${book.title}</p>
<p>${book.author}</p>
<p>${book.publisher}</p>
<p>${book.release}</p>
<p>${book.units}</p>
<p>${book.price}</p>`
;