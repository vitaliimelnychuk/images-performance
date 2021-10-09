export default function Button({ children, onClick = () => null }) {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center h-10 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
