export class Todo {
    id?: number
    task: string
    isDone: boolean

    constructor(newTask: string) {
        this.task = newTask
        this.isDone = false
    }
}
