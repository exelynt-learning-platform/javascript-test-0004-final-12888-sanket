function printMatrixPattern() {
    for (let i = 0; i < 7; i++) {
        let line = '';
        
        let distFromCenter = Math.abs(i - 3);
        
        for (let j = 0; j < 7; j++) {
            let distFromCenterCol = Math.abs(j - 3);
            let num = 1 + Math.min(distFromCenter, distFromCenterCol);
            line += num + ' ';
        }
        
        console.log(line.trim());
    }
}

printMatrixPattern();
