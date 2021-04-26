let color = 100;
document.body.style.backgroundColor = `rgb(${color},${color},${color})`;
window.addEventListener('keydown', (e) => {
    //38 gora 40 dol
    const brigh = brightness(e)
    document.body.style.backgroundColor = `rgb(${brigh},${brigh},${brigh})`;
})
const brightness = (e) => {
    switch (e.keyCode) {
        case 38:
            color <= 255 ? ++color : color;
            return color;

        case 40:
            color > 0 ? --color : color;
            return color;
    }
}