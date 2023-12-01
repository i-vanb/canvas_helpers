function bzCurve(points, ctx, f = 0.3, t = 0.6) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    let m = 0;
    let dx1 = 0;
    let dy1 = 0;
    let dx2 = 0;
    let dy2 = 0;


    let preP = points[0];

    for (let i = 1; i < points.length; i++) {
        let curP = points[i];
        let nexP = points[i + 1];
        if (nexP) {
            m = gradient(preP, nexP);
            dx2 = (nexP.x - curP.x) * -f;
            dy2 = dx2 * m * t;
        } else {
            dx2 = 0;
            dy2 = 0;
        }

        ctx.bezierCurveTo(
            preP.x - dx1, preP.y - dy1,
            curP.x + dx2, curP.y + dy2,
            curP.x, curP.y
        );

        dx1 = dx2;
        dy1 = dy2;
        preP = curP;
    }
    ctx.stroke();
}
