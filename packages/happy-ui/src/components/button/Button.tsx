import React from 'react'
import cx from 'classnames'
import { isString } from '@xyb/utils'
import './index.scss'
export interface ButtonProps {
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
	 * 类型
	 */
	type?: 'default' | 'primary' | 'danger'
	/**
	 * 子节点
	 */
	children?: React.ReactNode
}

const Button = (props: ButtonProps) => {
	const { className, type, onClick, disabled, children } = props
	const _type = isString(type) ? type : ''
	return (
		<button
			type="button"
			className={cx(
				'happy-button',
				className,
				_type ? `happy-button-${_type}` : ''
			)}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
export default Button
