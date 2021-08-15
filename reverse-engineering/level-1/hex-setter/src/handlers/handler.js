
export const colorSelection = (event) => {
    let hexColor1 = event.target.form.first.value;
    let hexColor2 = event.target.form.second.value;
    let hexColor3 = event.target.form.third.value;
    let hexColor4 = event.target.form.fourth.value;
    let hexColor5 = event.target.form.fifth.value;
    let hexColor6 = event.target.form.sixth.value;
    const finalColor = `#${hexColor1}${hexColor2}${hexColor3}${hexColor4}${hexColor5}${hexColor6}`
    document.body.style.background = finalColor;
    // console.log(`#${hexColor1}${hexColor2}${hexColor3}${hexColor4}${hexColor5}${hexColor6}`);
    document.getElementById('new-style').innerHTML = "background-color:"+ finalColor;
}