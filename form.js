// to append to csv file
function submitData() {
    var date = document.getElementById('year-input').value;
    var info = document.getElementById('player-num').value;
    var formData = { date, info };

    // send form data to node.js server
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to append data to CSV file');
        }
        console.log('Data appended successfully');
    })
    .catch(error => {
        console.error(error);
    });
}

