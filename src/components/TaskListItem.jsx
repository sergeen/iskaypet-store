import { locales } from '../locales';
import TaskListItemStyles from './TaskListItem.module.css';

function TaskListItem({taskTitle, taskDescription}) {
  return (
    <div class={TaskListItemStyles['task-list-item']}>
      <div>
        { /* TODO: Manejo de error, quizas ocultar? */ }
        <h2>{taskTitle ? taskTitle : locales.noTaskTitle}</h2>
        {/* Debería ser cortado on logica, porque queda en el doom*/}
        <p>{taskDescription ? taskDescription : locales.noTaskDescription}</p>
      </div>
      <div>
        <button>
          <img src="/icons/icon-trash.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default TaskListItem;