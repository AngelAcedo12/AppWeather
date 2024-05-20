import { Task } from "../task";

export interface AllTask{
    todoTask:Task[],
    doingTask:Task[],
    doneTask:Task[]
}