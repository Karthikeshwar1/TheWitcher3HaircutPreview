let hairStyle = "lgtbh";
let mustacheStyle = "cs";
// const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

// generate the radio groups        
// const group = document.querySelector("#group");
// group.innerHTML = sizes.map((size) => `<div>
//     <input type="radio" name="size" value="${size}" id="${size}">
//      <label for="${size}">${size}</label>
// </div>`).join(' ');

// add an event listener for the change event
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
    // if (this.checked) {
    //     document.querySelector('#output_hair').innerText = `You selected ${this.value}`;
    // }
    console.log(String(this.value));
    hairStyle = String(this.value);
    showPreview(hairStyle, mustacheStyle);
}
function showSelectedMustache(e) {
    console.log(e);
    // if (this.checked) {
    //     document.querySelector('#output_mustache').innerText = `You selected ${this.value}`;
    // }
    mustacheStyle = String(this.value);
    showPreview(hairStyle, mustacheStyle);

}

function showPreview(h, m) {
    console.log(h);
    console.log(h + '_' + m + '.png');
    document.getElementById('preview').src = String('./img/' + h + '_' + m + '_C.png');
}