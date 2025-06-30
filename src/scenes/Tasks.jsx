import TaskStyles from './Tasks.module.css';
import { locales } from '../locales';
import { TaskList, TaskListItem } from '../components';

function Tasks() {
  return (
    <div class={TaskStyles['tasks']}>
      <TaskList>
        <TaskListItem taskTitle={locales.taskTitle} taskDescription={locales.taskDescription}/>
        <TaskListItem />
        <TaskListItem />
      </TaskList>
    </div>
  )
}

export default Tasks;