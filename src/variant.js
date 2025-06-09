export const fadeIn = (direaction,delay) => {
    return{
        hidden : {
            y : direaction === "up" ? 40 : direaction === 'down' ? -40 : 0 ,
            x : direaction === "left" ? 40 : direaction === 'right' ? -40 : 0 
        },
        show : {
            y : 0,
            x : 0 ,
            opacity : 1,
            transition : {
                type : "tween",
                duration : 1.2,
                delay : delay,
                ease : [0.25,0.25,0.25,0.75]
            } 
        }
    }
}