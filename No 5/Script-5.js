function sortTable(columnIndex) {
    let table, rows, switching, i, x, y, shouldSwitch
    table = document.getElementById("myTable")
    switching = true
    while (switching) {
        switching = false
        rows = table.rows
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false
            x = rows[i].getElementsByTagName("TD")[columnIndex]
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex]
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true
                break
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            switching = true
        }
    }
}

document.querySelectorAll("th").forEach((header, index) => {
    header.addEventListener("click", () => {
        const isAscending = header.classList.contains("sorted-asc")
        const isDescending = header.classList.contains("sorted-desc")
        document.querySelectorAll("th").forEach((otherHeader) => {
            otherHeader.classList.remove("sorted-asc", "sorted-desc")
        })
        if (!isAscending && !isDescending) {
            header.classList.add("sorted-asc")
            sortTable(index);
        } else if (isAscending) {
            header.classList.add("sorted-desc")
            sortTable(index);
        }
    })
})