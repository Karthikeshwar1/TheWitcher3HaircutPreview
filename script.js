let hairStyle = "lgtbh";
let mustacheStyle = "cs";

const radioButtons_hair = document.querySelectorAll('input[name="hair"]');
const radioButtons_mustache = document.querySelectorAll('input[name="mustache"]');
for (const radioButton of radioButtons_hair) {
    radioButton.addEventListener('change', showSelectedHair);
}
for (const radioButton of radioButtons_mustache) {
    radioButton.addEventListener('change', showSelectedMustache);
}

function showSelectedHair(e) {
    console.log(e);
   
    console.log(String(this.value));
    hairStyle = String(this.value);
    showPreview(hairStyle, mustacheStyle);
}
function showSelectedMustache(e) {
    console.log(e);
   
    mustacheStyle = String(this.value);
    showPreview(hairStyle, mustacheStyle);

}

function showPreview(h, m) {
    console.log(h);
    console.log(h + '_' + m + '.png');
    document.getElementById('preview').src = String('./img/' + h + '_' + m + '_C.png');
}
