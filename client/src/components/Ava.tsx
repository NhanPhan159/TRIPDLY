import Avatar from '@mui/material/Avatar';
const Ava = ({imageUrl}:{imageUrl:string}) => {
    return ( 
        <div>
            <div className="relative -bottom-5 rounded-full flex items-center justify-center bg-red-900 object-center">
                <Avatar alt="Remy Sharp" src={imageUrl} sx={{ width: 30, height: 30 }} />
            </div>
        </div>
     );
}
 
export default Ava;