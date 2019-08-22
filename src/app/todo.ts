export class Todo {
    task: string
    isDone: boolean

    constructor(newTask: string) {
        this.task = newTask
        this.isDone = false
    }
}
