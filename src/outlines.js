export const DrawRect = (detections,ctx)=>{
    detections.forEach(prediction=>{
        const [x,y,height,width] = prediction["bbox"]
        const text = prediction["class"]

        const color = 'red'
        ctx.strokeStyle = color
        ctx.font = '24px Arial'
        ctx.fillStyle = color
        
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,height,width)
        ctx.stroke()
    })
}