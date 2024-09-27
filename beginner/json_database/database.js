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
    var stString = '';
    for(var i = 0; i < record.starters.length; i++)
        stString += record.starters[i].name + "<br>";
    starters.innerHTML = stString;
}

let links = "";
database.forEach(element => {
    console.log(element.id);
    links += "<a href='#' onclick='display(" + element.id + ")'>" + element.title + "</a>";
});

list.innerHTML = links;