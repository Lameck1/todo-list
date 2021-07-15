import getElementAll from './getElementAll';
import getElement from './getElement';

export default (view, tasks) => {
  const taskItems = getElementAll('.task-container');
  const taskList = getElement('.task-list');
  let draggedId = 0;
  let draggedItem = null;

  const dragAfterNode = (container, y) => {
    const draggableNodes = [...container.querySelectorAll('.draggable:not(.dragging)')];

    return draggableNodes.reduce((closest, child) => {
      const card = child.getBoundingClientRect();
      const offset = y - card.top - (card.height / 2);
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  };

  taskItems.forEach((item) => {
    item.addEventListener('dragstart', (event) => {
      event.target.classList.add('dragging');
      draggedId = Number(event.target.getAttribute('data-id'));
      draggedItem = tasks.splice(draggedId, 1);
    });

    item.addEventListener('dragend', (event) => {
      event.target.classList.remove('dragging');
    });
  });

  taskList.addEventListener('dragover', (event) => {
    event.preventDefault();
    const afterNode = dragAfterNode(taskList, event.clientY);
    const draggable = getElement('.dragging');
    if (afterNode === null) {
      taskList.appendChild(draggable);
    } else {
      taskList.insertBefore(draggable, afterNode);
    }
  });

  taskList.addEventListener('drop', (event) => {
    event.preventDefault();
    const afterNode = dragAfterNode(taskList, event.clientY);
    if (!afterNode) {
      tasks = [...tasks, ...draggedItem];
      localStorage.setItem('tasks', JSON.stringify(tasks));
      view.showTasks(tasks);
      window.location.reload();
    }

    if (afterNode) {
      if (draggedId > Number(afterNode.getAttribute('data-id'))) {
        tasks.splice(Number(afterNode.getAttribute('data-id')), 0, draggedItem[0]);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        view.showTasks(tasks);
        window.location.reload();
      } else {
        tasks.splice(Number(afterNode.getAttribute('data-id')) - 1, 0, draggedItem[0]);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        view.showTasks(tasks);
        window.location.reload();
      }
    }
  });
};
