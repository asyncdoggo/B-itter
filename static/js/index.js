document.getElementById("login_form").addEventListener("submit",async function (e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

const response = await fetch("/api/login", {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
        "Authorization": "Basic " + btoa(data["uname"]+":"+data["passwd"])
    }
    }).then((response) => response.json())

    let status = response.status;
    if(status == "success"){
        let uname = response.uname
        localStorage.setItem("uname", uname);
        window.location.reload()
    }
    else{
        document.getElementById("error").innerHTML = response.status;
    }
})


function send_form(action, params) {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', action);

    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}


