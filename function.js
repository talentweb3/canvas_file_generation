//Function that draw axis and line.
function drawLine(ctx, startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}
//Function that draw line with color and width.
function drawLineWidth(ctx, startX, startY, endX, endY, opacity, width, color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.globalAlpha = opacity;
    ctx.lineWidth = width;
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}
//Function that draw circle.
function drawCircle(ctx, centerX, centerY, radius,opacity, color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.globalAlpha = opacity;
    ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);
    ctx.stroke();
}
//Function that draw circle with color.
function drawfillCircle(ctx,centerX, centerY, radius, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fill();
}
//Function that draw rect with color.
function drawfillRect(ctx,centerX, centerY, width, height, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.rect(centerX, centerY, width, height);
    ctx.closePath();
    ctx.fill();
}
//Function that write text.
function lavelText(ctx,positionX, positionY, text, color ){
    ctx.fillStyle=color;
    ctx.textAlign="center";
    ctx.font="lighter 12px Segoe UI"
    ctx.fillText(text,positionX,positionY);
}
//Function that write header.
function lavelHeader(ctx,positionX, positionY, text, color ){
    ctx.fillStyle=color;
    ctx.textAlign="center";
    ctx.font="lighter 28px Segoe UI Light"
    ctx.fillText(text,positionX,positionY);
}
//Function that draw polygon with color.
function drawfillPolygon(ctx,x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6,opacity, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.globalAlpha = opacity;
    ctx.moveTo(x1, y1);   // point 1
    ctx.lineTo(x2, y2);   // point 2
    ctx.lineTo(x3, y3);   // point 3
    ctx.lineTo(x4, y4);   // point 4
    ctx.lineTo(x5, y5);   // point 5
    ctx.lineTo(x6, y6);   // point 6
    ctx.closePath();      // go back to point 1
    ctx.fill();
}


