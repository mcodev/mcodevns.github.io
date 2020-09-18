// Download function

// function download(uri, name) {
//     var link = document.createElement("a");
//     link.setAttribute('download', name);
//     link.href = uri;
//     document.body.appendChild(link);
//     link.click();
//     link.remove();

// }


var count = 1;

function download(uri, name) {
    if (count % 2 != 0) {
        var link = document.createElement("a");
        link.setAttribute('download', name);
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    count += 1;
}