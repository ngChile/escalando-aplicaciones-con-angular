module.exports = function(runner) {
    const scoreMatrix = {
        'passed': 1,
        'failed': 0
    };
    let score = 0;
    let passes = 0;
    let failures = 0;

    runner.on('pass', function(test){
        passes++;
        // console.log('pass: %s', test.fullTitle());
        score += scoreMatrix[test.state] || 0;
    });

    runner.on('fail', function(test, err){
        failures++;
        // console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
        score += scoreMatrix[test.state] || 0;
    });

    runner.on('end', function(){
        // console.log('end: %d/%d', passes, passes + failures);
        console.log('----------------------------------------------');
        console.log(`|          Your score is ${score}            |`);
        console.log('----------------------------------------------')
    });
}