import React from 'react'

const TestButton = ({ consoleLog }) => {

    const handleTestButton = () => {
        console.log(consoleLog)
    }

    return <div>
        <button onClick={handleTestButton}>Test</button>
    </div>
}

export default TestButton