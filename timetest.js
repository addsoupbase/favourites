Elem.debug('Initiating time test...')
function testFactoryAgainstConstructor() {
    const warmupIterations = 5;
    const testIterations = 20;
    const loopCount = 1000;

    // Warm-up phase
    for (let i = warmupIterations; i--;) {
        for (let j = loopCount; j--;) document.createDocumentFragment();
        for (let j = loopCount; j--;) new DocumentFragment();
    }

    // Benchmarking
    const facttimes = [];
    const constructorTimes = [];

    for (let i = testIterations; i--;) {
        const startFact = performance.now();
        for (let j = loopCount; j--;) document.createDocumentFragment();
        facttimes.push(performance.now() - startFact);

        const startConstr = performance.now();
        for (let j = loopCount; j--;) new DocumentFragment();
        constructorTimes.push(performance.now() - startConstr);
    }

    return {
        factory: utilMath.average(...facttimes),
        constr: utilMath.average(...constructorTimes)
    };
}
const data = testFactoryAgainstConstructor();
if (data.constr < data.factory) {
    local.fragment = 'constructor'
}
else {
    local.fragment = 'factory'
}
Elem.success('Timetest completed. Results: ')
console.table(data)