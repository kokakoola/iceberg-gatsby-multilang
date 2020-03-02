import React from 'react'
import props from 'react'
import { navigate } from 'gatsby-link'
import '../../styles/global.css'

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
}

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isValidated: false }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch(error => alert(error))
    }


    render() {
        const { name, email, message, send } = this.props
        return (
            <>
                <form
                    name="contact"
                    method="post"
                    action="/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                        <label>
                            Don’t fill this out:{' '}
                            <input
                                name="bot-field"
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="sm:flex mb-4">
                        <div className="w-full sm:w-1/2">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor={'name'}
                            >
                                {name}
                            </label>
                            <div className="control">
                                <input
                                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                                    type={'text'}
                                    name={'name'}
                                    onChange={this.handleChange}
                                    id={'name'}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="sm:ml-4 w-full sm:w-1/2">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor={'email'}
                            >
                                {email}
                            </label>
                            <div className="control">
                                <input
                                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                                    type={'email'}
                                    name={'email'}
                                    onChange={this.handleChange}
                                    id={'email'}
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor={'message'}
                        >
                            {message}
                        </label>
                        <div className="control">
                            <textarea
                                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                                name={'message'}
                                onChange={this.handleChange}
                                id={'message'}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <button
                            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            {send}
                        </button>
                    </div>
                </form>
            </>
        )
    }
}
