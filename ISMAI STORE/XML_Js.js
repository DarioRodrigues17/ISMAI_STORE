function loadData() {
    var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    function reportStatus() {
        if (oXHR.readyState == 4)
            showTheList(this.responseXML);
    }

    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "sobre_nos.xml", true);
    oXHR.send();
}

function showTheList(xml) {

    var divBooks = document.getElementById('books');
    var Book_List = xml.getElementsByTagName('List');

    for (var i = 0; i<Book_List.length; i++) {

        var divLeft = document.createElement('div');
        divLeft.innerHTML = Book_List[i].getElementsByTagName("Text")[0].childNodes[0].nodeValue;

        divBooks.appendChild(divLeft);
    }
};