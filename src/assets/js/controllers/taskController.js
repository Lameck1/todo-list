import TaskView from '../views/taskView';
import TaskModel from '../models/taskModel';
import dragHandler from '../helpers/dragHandler';

export default () => ({

  taskModel: new TaskModel(),
  taskView: new TaskView(),

  init() {
    if (localStorage.getItem('tasks') === null) {
      TaskModel.refreshStorage();
    }
    this.taskView.showTasks(TaskModel.tasks);
    dragHandler(this.taskView, TaskModel.tasks);
  },
});