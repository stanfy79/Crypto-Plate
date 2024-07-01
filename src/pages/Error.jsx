import '../App.css'

export default function Error() {


    return (
        <>
            <div className="error-container">
                <h1>404</h1>
                <div>This Page Does Not Exist.</div>
                <button><a href="/">GO Home</a></button>
            </div>
        </>
    )
}