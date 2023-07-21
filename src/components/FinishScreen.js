function FinishScreen({ dispatch, points, maxPossiblePoints, highscore }) {
    const percentage = maxPossiblePoints / points
    
    let emoji;
    if(percentage === 100) emoji = '🥇'
    if(percentage >= 80 && percentage < 100) emoji = '🎉'
    if(percentage >= 50 && percentage < 80) emoji = '😃'
    if(percentage >= 0 && percentage < 50) emoji = '🤔'
    if(percentage === 0) emoji = '🤦🏽‍♂️'

    return (
        <>
        <p className="result">
         <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPossiblePoints}
          ({Math.ceil(percentage)}&#37;)
        </p>
        <p className="highscore">Highscore&#58;&nbsp;{highscore}</p>
        <button className="btn btn-ui" onClick={() => dispatch({ type: "restart"})}>Restart Quiz</button>
        </>
    )
}

export default FinishScreen
