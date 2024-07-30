import {PrettyChatWindow} from "react-chat-engine-pretty";

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

export default ChatsPage;

//This is the way to create a ChatsPage using the react-chat-engine-advanced library.

// import React from 'react';
// import {MultiChatWindow,MultiChatSocket,useMultiChatLogic} from 'react-chat-engine-advanced';

// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         '065538fc-1cd8-4f5b-841d-a7e0902eb30d',
//         props.user.username,
//         props.user.secret
//       );
    
//   return (
//     <div style={{height:"100vh"}}>
//          <MultiChatWindow {...chatProps} />
//          <MultiChatSocket {...chatProps} style={{height:"100%"}}/>
//     </div>
//   )
// }

// export default ChatsPage;