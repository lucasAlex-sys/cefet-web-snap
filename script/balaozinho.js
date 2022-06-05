const balloon = document.getElementById('balaozinho');
const tags = document.getElementsByClassName('marcacao');
const title = document.createElement('h2');
const content = document.createElement('p');

for(const tag of tags) { tag.addEventListener('mouseover', () => {

    const color = tag.attributes.getNamedItem('data-cor').value;

    title.textContent = tag.attributes.getNamedItem('data-titulo').value;
    content.textContent = tag.attributes.getNamedItem('data-conteudo').value;
    balloon.style.backgroundColor = color
    balloon.appendChild(title);
    balloon.appendChild(content);

  });
}
for(const tag of tags) { tag.addEventListener('mouseout', (e) => {
    balloon.innerHTML = '';
    balloon.display = 'none'
  });
}
for(const tag of tags) { tag.addEventListener('mousemove', ({ pageX, pageY }) => {
    balloon.style.top = `${pageY}px`;
    balloon.style.left = `${pageX}px`;
  });
}