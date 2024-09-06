import {Avatar,Stack,Typography,IconButton} from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import {useSelector} from 'react-redux'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function ChatScreenHeader(){
    let contactdata=useSelector((state)=>state.contacts.data)
    let Profile;
    let Name;
    let {Contact} = useParams()
    let Navigate=useNavigate()
    
    for(let x in contactdata){
        if(contactdata[x].Contact===Number(Contact)){
            Profile=contactdata[x].profile
            Name=contactdata[x].Name
        }
    }
    return(
    <Stack spacing={1} pl={"1.5%"} direction={"row"} py="9px" width="98.5%" justifyContent={"space-between"} flexdirection={"row"} sx={{backgroundColor:"#f0f2f5",border:"none"}}>
    <Stack direction={"row"}>
    <IconButton onClick={()=>Navigate("/")} sx={{display:{xs:(Contact)?'block':'none',sm:'none'}}}>
        <ArrowBackRoundedIcon/>
    </IconButton>
    <Avatar src={Contact ? Profile : ""}></Avatar>
    <Typography pl="15px" py="8px">{Contact ? Name : null}</Typography>
    </Stack>
    <Stack direction={"row"} spacing={3}>
    <IconButton direction={"row"} py="5px">
    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="#9c8d8d"><title>video-call</title><path d="M3.27096 7.31042C3 7.82381 3 8.49587 3 9.84V14.16C3 15.5041 3 16.1762 3.27096 16.6896C3.5093 17.1412 3.88961 17.5083 4.35738 17.7384C4.88916 18 5.58531 18 6.9776 18H13.1097C14.502 18 15.1982 18 15.7299 17.7384C16.1977 17.5083 16.578 17.1412 16.8164 16.6896C17.0873 16.1762 17.0873 15.5041 17.0873 14.16V9.84C17.0873 8.49587 17.0873 7.82381 16.8164 7.31042C16.578 6.85883 16.1977 6.49168 15.7299 6.26158C15.1982 6 14.502 6 13.1097 6H6.9776C5.58531 6 4.88916 6 4.35738 6.26158C3.88961 6.49168 3.5093 6.85883 3.27096 7.31042Z" fill="#9c8d8d"></path><path d="M18.7308 9.60844C18.5601 9.75994 18.4629 9.97355 18.4629 10.1974V13.8026C18.4629 14.0264 18.5601 14.2401 18.7308 14.3916L20.9567 16.3669C21.4879 16.8384 22.3462 16.4746 22.3462 15.778V8.22203C22.3462 7.52542 21.4879 7.16163 20.9567 7.63306L18.7308 9.60844Z" fill="#9c8d8d"></path></svg>
    </IconButton>
    <IconButton p="5px" >
    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>search-alt</title><path fill="#9c8d8d" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path></svg>
    </IconButton>
    <IconButton p="5px" mr="2%">
    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>menu</title><path fill="#9c8d8d" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
    </IconButton>
    </Stack>
    </Stack>
    )
}
export default ChatScreenHeader