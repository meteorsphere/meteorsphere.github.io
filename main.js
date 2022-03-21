// window.addEventListener('load', function() {
//   let page = location.hash.replace('#');
//   if (!page) page = "README";
//   loadPage(page);
// });

// async function loadPage(page) {
//   let markdown = await (await fetch("https://raw.githubusercontent.com/meteorsphere/meteorsphere.github.io/main/" + page + ".md")).text();
//   let converter = new showdown.Converter({metadata: true});
//   let html = converter.makeHtml(markdown);
//   document.body.innerHTML = html;
// }
window.location = "https://meteorsphere.github.io/pages";
