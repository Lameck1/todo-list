import getElement from '../helpers/getElement';
import createElement from '../helpers/createElement';

export default class TaskView {
  constructor() {
    this.main = getElement('.main');

    this.headerDiv = createElement('div', { class: 'header-div d-flex' });
    this.heading = createElement('h2', { }, "Today's To Do");
    this.refreshDiv = createElement('div', { class: 'refresh-div' });
    this.refreshIcon = createElement('span', { class: 'material-icons refresh-icon' }, 'autorenew');
    this.pendingCount = createElement('span', { class: 'pending-count d-flex' });
    this.refreshDiv.append(this.refreshIcon, this.pendingCount);
    this.headerDiv.append(this.heading, this.refreshDiv);

    this.taskForm = createElement('form', { class: 'task-form d-flex' });
    this.input = createElement('input', {
      type: 'text',
      placeholder: 'Add to your list...',
      name: 'task',
    });
    this.submit = createElement('input', {
      type: 'button',
      tabindex: '-1',
      title: 'Click this or press enter to submit.',
    });
    this.submit.value = '\u21B2';

    this.taskForm.append(this.input, this.submit);

    this.taskList = createElement('ul', { class: 'task-list d-flex' });

    this.clearButton = createElement('button', {
      class: 'clear-button',
    }, 'Clear all completed');

    this.main.append(this.headerDiv, this.taskForm, this.taskList, this.clearButton);
  }

  showTasks(tasks) {
    while (this.taskList.firstChild) {
      this.taskList.removeChild(this.taskList.firstChild);
    }

    if (tasks.length) {
      this.pendingCount.textContent = `${tasks.filter((task) => task.complete === false).length}`;
      tasks.forEach((task) => {
        const { description, complete } = task;

        const listItem = createElement('li', { class: 'task-container d-flex draggable', 'data-id': `${tasks.indexOf(task)}`, draggable: true });

        const checkbox = createElement('input', { type: 'checkbox', 'data-id': `${tasks.indexOf(task)}`, class: 'checkbox' });
        checkbox.checked = complete;

        const taskDesc = createElement('span', {
          contentEditable: true,
          class: 'editable',
          'data-id': `${tasks.indexOf(task)}`,
        }, description);

        const deleteButton = createElement('button', {
          class: 'delete material-icons delete-button d-none',
          'data-id': `${tasks.indexOf(task)}`,
        }, 'delete');

        const dragButton = createElement('button', {
          class: 'more_vert material-icons drag-button',
          'data-id': `${tasks.indexOf(task)}`,
          title: 'Hold and drag item, drop to reorder.',
        }, 'more_vert');

        listItem.append(checkbox, taskDesc, deleteButton, dragButton);
        this.taskList.appendChild(listItem);
      });
    }
  }
}
