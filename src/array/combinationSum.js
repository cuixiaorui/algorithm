var combinationSum = function (candidates, target) {
    candidates.sort( (a,b) => a - b)
    const rPath = [];
    const len = candidates.length;
    let totalNum = 0;
    const iteration = (start, path) => {
        for (let i = start; i < len; i++) {
            const currentVal = candidates[i];
            totalNum += currentVal;
            path.push(currentVal);

            if (totalNum < target) {
                iteration(i, path);
            } else {
                if (totalNum === target) {
                    rPath.push([...path])
                }
                totalNum -= path.pop();
                break;
            }
        }
        totalNum -= path.pop();
    }
    iteration(0, [])
    return rPath;
}
combinationSum([2, 3, 6, 7], 7);