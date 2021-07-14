export default class TaskModel {
  static tasks = JSON.parse(localStorage.getItem('tasks'));

  static samples = [
    { id: 1, description: 'Take child to school', complete: false },
    { id: 2, description: 'Learn about webpack', complete: true },
    { id: 3, description: 'Pick child from school', complete: false },
    { id: 4, description: 'Go shopping for groceries', complete: true },
  ];

  static refreshStorage() {
    localStorage.setItem('tasks', JSON.stringify(TaskModel.samples));
  }
}
