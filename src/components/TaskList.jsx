import TaskListStyles from './TaskList.module.css';

function TaskList({ children }) {
  return (
    <div class={TaskListStyles['task-list']}>
      {children}
    </div>
  )
}

export default TaskList;