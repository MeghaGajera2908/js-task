window.alert("Hii");
let records = [];
const renderHTMLTAble = () => {
    document.getElementById("hello").innerHTML = records.map((item, index) => {
        return `<div style="margin-left: 50px">
    <div style="height: 100px; width: 100px; border: 1px solid black; margin-left: 20px; background-color:${item.color}"></div>
    <div>${item.id}</div>
    <div>${item.title}</div>
    <div>${item.message}</div>
    <div>${item.color}</div>
   </div>`})
}
const Myfunction = () => {
    const v = document.getElementById("id").value;
    console.log(v);
    const d = document.getElementById("title").value;
    console.log(d);
    const vd = document.getElementById("message").value;
    console.log(vd);
    const vkd = document.getElementById("color").value;
    console.log(vkd);
    const peopledata = { id: v, title: d, message: vd, color: vkd };
    console.log(peopledata);
    records.push(peopledata);
    console.log(records);
    renderHTMLTAble();
}