import { Fragment } from 'react'

const Repos = ({ repos }) => (
	<Fragment>
		{ repos.map(repo => (
			<div
				key={ repo.id }
				className="card mb-3"
			>
				<div className="card-body">
					<h5>
						<a
							href={ repo.html_url }
							rel="noreferrer"
							target="_blank"
						>{ repo.name }</a>
					</h5>
				</div>
			</div>
		)) }
	</Fragment>
)

export default Repos
