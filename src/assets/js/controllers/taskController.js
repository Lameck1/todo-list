import TaskView from '../views/taskView';
import TaskModel from '../models/taskModel';
import dragHandler from '../helpers/dragHandler';
import getElementAll from '../helpers/getElementAll';

export default () => ({

  taskModel: new TaskModel(),
  taskView: new TaskView(),

  handletoggleTaskStatus() {
    getElementAll('.checkbox').forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        TaskModel.toggleTaskStatus(Number(checkbox.getAttribute('data-id')));
        localStorage.setItem('tasks', JSON.stringify(TaskModel.tasks));
        window.location.reload();
      });
    });
  },

  init() {
    if (localStorage.getItem('tasks') === null) {
      TaskModel.refreshStorage();
    }
    this.taskView.showTasks(TaskModel.tasks);
    dragHandler(this.taskView, TaskModel.tasks);
    this.handletoggleTaskStatus();
  },
});