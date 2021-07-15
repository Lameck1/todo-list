export default class TaskModel {
  static tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  static refreshStorage() {
    localStorage.setItem('tasks', JSON.stringify(TaskModel.tasks));
  }

  static toggleTaskStatus(index) {
    const task = TaskModel.tasks[index];
    task.complete = !task.complete;
    TaskModel.refreshStorage();
  }
}
