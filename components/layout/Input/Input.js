export default function Input({
  label,
  name,
  defaultValue,
  onChange = () => null,
  placeholder = '',
  type = 'text'
}) {
  return (
    <div className="w-full">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
          aria-describedby="email-description"
          onChange={onChange}
        />
      </div>
    </div>
  )
}
