/*******************************
 * 새로운 항목 입력
 * state를 통해 input 상태 관리
 ******************************/

import { useForm } from 'react-hook-form';
import { MdAdd } from 'react-icons/md';
import '../scss/TodoInsert.scss';

interface TodoInsertProps {
    onInsert: (text: string) => void;
}

interface todoContent {
    content: string
}

const TodoInsert = ({onInsert}: TodoInsertProps) => {
    // TypeScript에서 useForm 사용할 때는 
    // formData interface 만들고 타입 명시해줘야하는듯
    const {register, handleSubmit, reset} = useForm<todoContent>();

    const onSubmit = (data: todoContent) => {
        console.log("data::", data)
        onInsert(data.content)  // 할 일
        reset();
    };

    return (
        <form className="TodoInsert" onSubmit={handleSubmit(onSubmit)}>
            <input
                type='text'
                placeholder="할 일을 입력하세요"
                {...register('content', {
                    required: '할 일을 입력하세요'
                })}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;