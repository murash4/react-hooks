import { useReducer } from 'react'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../types'
import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

export const GithubState = ({ children }) => {
	const initialState = {
		user: {},
		users: [],
		repos: [],
		loading: false
	}
	const [ state, dispatch ] = useReducer(githubReducer, initialState)

	const clearUsers = async () => {
		dispatch({
			type: CLEAR_USERS
		})
	}

	const setLoading = async () => {
		dispatch({
			type: SET_LOADING
		})
	}

	const search = async value => {
		setLoading()

		const response = await axios.get(
			`https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
		)

		dispatch({
			type: SEARCH_USERS,
			payload: response.data.items
		})
	}

	const getUser = async name => {
		setLoading()
		// ...
		dispatch({
			type: GET_USER,
			payload: {}
		})
	}

	const getRepos = async name => {
		setLoading()
		// ...
		dispatch({
			type: GET_REPOS,
			payload: []
		})
	}

	const { user, users, repos, loading } = state

	return (
		<GithubContext.Provider
			value={{
				user,
				users,
				repos,
				loading,
				search,
				getUser,
				getRepos,
				clearUsers,
				setLoading
			}}
		>
			{ children }
		</GithubContext.Provider>
	)
}
