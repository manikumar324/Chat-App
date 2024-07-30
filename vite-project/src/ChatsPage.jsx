import {PrettyChatWindow} from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    
  return (
    <div style={{height:'100vh'}}>
        <PrettyChatWindow
            projectId="
            065538fc-1cd8-4f5b-841d-a7e0902eb30d"
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
        
        />
    </div>
  )
}

export default ChatsPage