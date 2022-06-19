import React from 'react'
import cx from 'classnames'
import './index.scss'
export interface InputProps {
	/**
	 * click回调
	 */
	onClick?: () => void
	/**
	 * 是否禁用
	 */
	disabled?: boolean
	/**
	 * 自定义class
	 */
	className?: string
	/**
	 * 占位符
	 */
	placeholder?: string
	/**
	 * 类型
	 */
	type?:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week'
}

const Input = (props: InputProps) => {
	const {
		className,
		type = 'text',
		onClick,
		disabled,
		placeholder = '请输入',
	} = props
	return (
		<input
			type={type}
			className={cx(
				'happy-input',
				className,
				type ? `happy-button-${type}` : ''
			)}
			onClick={onClick}
			disabled={disabled}
			placeholder={placeholder}
		/>
	)
}
export default Input
