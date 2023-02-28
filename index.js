// Вкажіть принаймні один спосіб доступу до кожного з перелічених нижче DOM вузлів:

// До DOM вузла <div>?

document.body.children[0]; // Вписать в консоль браузера
document.body.firstElementChild; // Вписать в консоль браузера
document.body.childNodes[1]; // Вписать в консоль браузера

// До DOM вузла <ul>?

document.body.lastElementChild; // Вписать в консоль браузера
document.body.children[1]; // Вписать в консоль браузера

// До другого <li> (Петро)?

document.body.lastElementChild.lastElementChild; // Вписать в консоль браузера