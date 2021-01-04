import { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Alert = () => {
	const { alert, hide } = useContext(AlertContext)

	if (!alert) return null

	return (
		<div
			className={`alert alert-${alert.type || 'secondary'} alert-dismissible`}
			role="alert"
		>
			{ alert.text }
			<button
				type="button"
				className="close"
				onClick={ hide }
			><span aria-hidden="true">×</span><span className="sr-only">Close alert</span></button>
		</div>
	)
}
