import { Skeleton } from "../ui/skeleton";

const MessageLoading = () => {
    return (
        <div className="flex relative w-fit gap-3 group">
        {/* Text Element */}
        <h1 className="text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
          Getting Your Projects...
        </h1>
        
        {/* Blurred Background Containers */}
        <div className="relative h-52 w-[18vw] blur group-hover:blur-0 duration-150">
          <Skeleton className="w-full h-full rounded-xl" />
        </div>
        
        <div className="relative h-52 w-[18vw] blur group-hover:blur-0 duration-150">
          <Skeleton className="w-full h-full rounded-xl" />
        </div>
      </div>
      
    )
}

export default MessageLoading;