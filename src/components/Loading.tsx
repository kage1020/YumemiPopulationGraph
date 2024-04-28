export function Loading() {
  return (
    <div className="grid w-fit grid-cols-2 gap-4">
      <span className="h-5 w-5 animate-flip bg-indigo-700 [animation-delay:-0.75s]"></span>
      <span className="h-5 w-5 animate-flip bg-indigo-300 [animation-delay:-0.5s]"></span>
      <span className="h-5 w-5 animate-flip bg-indigo-300 [animation-delay:-0.25s]"></span>
      <span className="h-5 w-5 animate-flip bg-indigo-700"></span>
    </div>
  )
}
