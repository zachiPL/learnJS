const list = document.getElementById('list');
const displayElement = document.getElementById('display');
const title = document.getElementById('title');
const released = document.getElementById('released');
const platform = document.getElementById('platrofm');
const starters = document.getElementById('starters');

function display(id)
{
    let record = database.find(x => x.id == id);
    title.innerText = record.title;
    released.innerText = record.release_date;
    platform.innerText = record.platform;
    let starterNamesArr = [];
    record.starters.forEach(element => {
        starterNamesArr.push(element.name);
    });
    starters.innerHTML = starterNamesArr.join(', ');
}

let links = "";
database.forEach(element => {
    console.log(element.id);
    links += "<a href='#' onclick='display(" + element.id + ")'>" + element.title + "</a>";
});

list.innerHTML = links;