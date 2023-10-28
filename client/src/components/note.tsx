const Note = () => {
    return ( 
        <div className="flex flex-col gap-3">
            <div className="mt-3 ml-3 text-xl font-semibold text-slate-400">Keywords</div>
            <div className="border"></div>
            <div className="flex gap-9 p-3">
                <p className="font-medium">Note by</p>
                <p>Note conent</p>
            </div>
        </div>
     );
}
 
export default Note;