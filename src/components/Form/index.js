import React from 'react'
import { navigate } from 'gatsby-link'
import '../../styles/global.css'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
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
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="w-full max-w-xs">
                        <h1>Contact</h1>
                        <form
                            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                            name="contact"
                            method="post"
                            action="/Form/thanks/"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={this.handleSubmit}
                        >
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <div hidden>
                                <label>
                                    Don’t fill this out:{' '}
                                    <input
                                        name="bot-field"
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor={'name'}
                                >
                                    Your name
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
                            <div className="field">
                                <label className="label" htmlFor={'email'}>
                                    Email
                                </label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type={'email'}
                                        name={'email'}
                                        onChange={this.handleChange}
                                        id={'email'}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label" htmlFor={'message'}>
                                    Message
                                </label>
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        name={'message'}
                                        onChange={this.handleChange}
                                        id={'message'}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
  }
}
