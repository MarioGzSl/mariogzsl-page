export function Label(props: any) {
    const { children, type } = props;
    var view = <></>
    if(type === "cloud") {
        view = <>
            <span className="flex flex-row items-center justify-center h-6 w-24 rounded bg-opacity-40 bg-sky-200">
                <span className="text-slate-800 font-extrabold text-xs">
                    {children}
                </span>
            </span>
        </>
    }else if(type === "framework") {
        view = <>
            <span className="flex flex-row items-center justify-center h-6 w-24 rounded bg-opacity-40 bg-sky-400">
                <span className="text-slate-800 font-extrabold text-xs">
                    {children}
                </span>
            </span>
        </>
    }else if(type === "language") {
        view = <>
            <span className="flex flex-row items-center justify-center h-6 w-24 rounded bg-opacity-40 bg-sky-600">
                <span className="text-slate-800 font-extrabold text-xs">
                    {children}
                </span>
            </span>
        </>
    }else{
        view = <>
            <span className="flex flex-row items-center justify-center h-6 w-24 rounded bg-opacity-40 bg-yellow-200">
                <span className="text-slate-800 font-extrabold text-xs">
                    {children}
                </span>
            </span>
        </>
    }
    return <>{view}</>;
}