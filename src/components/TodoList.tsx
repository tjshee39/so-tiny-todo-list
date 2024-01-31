import TodoListItem from './TodoListItem';
import '../scss/TodoList.scss';

interface Todo {
    id: number;
    text: string;
    checked: boolean;
}

interface Props {
    todos: Todo[];  // Todo 타입의 배열
    onRemove: (id: number) => void;  // 삭제
    onToggle: (id: number) => void;  // 완료/미완료
}

const TodoList = ({todos, onRemove, onToggle}: Props) => {
    return (
        <div className='TodoList'>
            {todos.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
}

export default TodoList;