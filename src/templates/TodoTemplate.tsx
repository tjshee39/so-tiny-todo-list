/*********************************
 * 화면 가운데 정렬
 * 앱 타이틀
 * children => 내부 JSX props
*********************************/

import '../scss/TodoTemplate.scss';

interface Props {
    children: React.ReactNode;
}

const TodoTemplate = (props: Props) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정관리</div>
            <div className="content">{props.children}</div>
        </div>
    );
}

export default TodoTemplate;