
function BlocTitre({text}){
    return (
        <div className="flex pt-3 pb-3">
            <div className="flex flex-row flex-wrap w-4/5 ">
                <p className="font-title text-white mb-3 text-xl">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default BlocTitre