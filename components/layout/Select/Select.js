import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Select({
  label,
  options,
  placeholder = '',
  defaultValue = null,
  onChange = () => null
}) {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (defaultValue !== null) setSelected(defaultValue)
  }, [defaultValue])

  return (
    <div className="w-full">
      <Listbox
        value={selected}
        onChange={(value) => {
          setSelected(value)
          onChange(value)
        }}
      >
        <Listbox.Label className="block text-sm font-medium text-gray-700">
          {label}
        </Listbox.Label>
        <div className="mt-1 relative">
          <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <span className="block truncate">
              {selected ? selected.label : placeholder}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className={({ active }) =>
                    classNames(
                      active ? 'text-white bg-indigo-600' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9'
                    )
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={classNames(
                          selected ? 'font-semibold' : 'font-normal',
                          'block truncate'
                        )}
                      >
                        {option.label}
                      </span>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
