import { Link } from 'react-router-dom'

const Intro = () => {
    return <>
        <figure className='cookie strawberry-heart'></figure>
        <h1>Cookie</h1>
        <Link to="/game">
            <label>
                <input type="radio" className="nes-radio is-dark" name="start" checked />
                <span>Start</span>
            </label>
        </Link>
        <a href='https://github.com/anigandini' target='_blank'><h2>By Ani Gandini</h2></a>
    </>
}

export default Intro