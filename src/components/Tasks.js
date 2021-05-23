import Task from './Task'



const Tasks = ({ tasks }) => {
    return (
        <>
        {tasks.map((task) => (
            <Task Key={task.id} task={task} />
            ))}

        </>
    )
}

export default Tasks
