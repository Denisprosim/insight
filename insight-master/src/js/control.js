const draggables = document.querySelectorAll('.icon');
const containers = document.querySelectorAll('.place');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault();

    const draggable = document.querySelector('.dragging');
    container.appendChild(draggable);
  });
})


