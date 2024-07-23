import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId='b1555235-41d1-430f-a8b7-b17e3489f978'
            username={props.user.username}
            secret={props.user.username}
            style={{height: '100%'}}
        />
    </div>
    )
}


export default ChatsPage