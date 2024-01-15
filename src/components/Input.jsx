import { findInputError } from '../utils/findInputError'
import { isFormInvalid } from '../utils/isFormInvalid'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

export const Input = ({
  nameId,
  label,
  type,
  placeholder,
  validation,
  multiline,
  combos,
  comboValue,
  onChangeFunc
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputErrors = findInputError(errors, nameId)
  const isInvalid = isFormInvalid(inputErrors)

  const input_tailwind = 'p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60'
  
  return (
    <div className={`flex flex-col ${(type === 'file') ? 'text-xs w-auto' : 'w-full'} gap-2`}>
      <div className="flex justify-between">
        <label htmlFor={nameId} className="text-sm font-semibold capitalize">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <motion.p className="text-xs flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            >
              <MdError /> {inputErrors.error.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          id={nameId}
          type={type}
          className={`${input_tailwind} min-h-[10rem] max-h-[20rem] resize-y`}
          placeholder={placeholder}
          {...register(nameId, validation)}
        ></textarea>
      ) : (
      (type === 'select') ? (
        <select
          id={nameId}
          className={input_tailwind}
          {...register(nameId, validation)}
          onChange={onChangeFunc}
        >
          <option defaultValue={(comboValue === '') ? 'no' : comboValue}>{(placeholder === '') ? label : placeholder}</option>
          {combos.map((item,index) => <option key={index} value={index}>{item}</option> )}
        </select>
      ) : (<input
      id={nameId}
      type={type}
      className={`${input_tailwind} ${(type === 'file') ? '-mr-32' : null}`}
      placeholder={(placeholder === '') ? label : placeholder}
      {...register(nameId, validation)}
    />))}
    </div>
  )
}