export default function PageSpinner() {
    return (
        <div className="flex absolute top-0 left-0    z-40 justify-center items-center bg-black opacity-30 h-full w-full ">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-green-900"></div>
        </div>
    )
}