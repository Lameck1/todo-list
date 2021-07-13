import TaskView from '../views/taskView';
import TaskModel from '../models/taskModel';

export default () => ({

  taskView: new TaskView(),
  taskModel: new TaskModel(),

  init() {
    this.taskView.showTasks(TaskModel.tasks);
  },
});