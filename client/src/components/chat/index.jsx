import { useMultiChatLogic,MultiChatWindow,MultiChatSocket } from "react-chat-engine-advanced"
import CustomerHeader from "@/components/customerHeader";
import StandardMessageForm from "@/components/customMessageForm/StandardMessageForm";
const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
     "pk",
     "08"
  )

  return (
    <div style={{flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height:"100vh"}}
      renderChatHeader={(chat)=> 
      <CustomerHeader chat= {chat}/>}
      //  urenderMessageForm={(props)=>{ 
      //    retrn(
        //    <StandardMessageForm props = {props} activeChat ={chatProps.chat}/>
        //  )}}
      />   
      </div>
  )
}

export default Chat