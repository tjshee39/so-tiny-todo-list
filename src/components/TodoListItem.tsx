import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, } from 'react-icons/md';
import '../scss/TodoListItem.scss';
import cn from 'classnames';

interface Todo {
    id: number;
    text: string;
    checked: boolean;
}

interface Props {
    todo: Todo;
    onRemove: (id: number) => void;  // 삭제
    onToggle: (id: number) => void;  // 완료/미완료
}

const TodoListItem = ({todo, onRemove, onToggle}: Props) => {
    const {id, text, checked} = todo;

    return (
        <div className='TodoListItem'>
            <div 
                className={cn('checkbox', {checked})}
                onClick={() => onToggle(id)}
            >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{text}</div>
            </div>
            <div 
                className='remove' 
                onClick={() => onRemove(id)}
            >
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListItem;