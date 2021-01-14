import React from 'react'

const TestButton = ({ consoleLog }) => {

    const handleTestButton = () => {
        console.log('handleTestButton Response')
    }

    return <div >
        <button data-testid={'TestButton'} onClick={handleTestButton}>Test</button>
    </div>
}

export default TestButton
export const log = logMsg => console.log(logMsg);