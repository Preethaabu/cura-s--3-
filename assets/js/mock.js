
var table = ('#student');

async function mock() {
    let tbody = document.getElementById('tbody')
    console.log("In");
    let response = await fetch('https://63998c2516b0fdad774062c6.mockapi.io/appointment')
    let result = await (response.json())
    console.log(result);


    console.log("In1");
    let no = 1;
    result.forEach(element => {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML = no;
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.name
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.phno
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.email
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.id
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.date
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.time
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = element.location
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = `<div>
            <button class="tick" type = "submit" style="margin-right: 20px" onclick="sendmail('${element.email}','${element.id}','${element.phno}')" ><i class="fa fa-check"  style="color: rgb(8, 250, 8);"></i></button><button class="cancel" style="margin-right: 20px" onclick="delete_id('${element.id}','${element.phno}')" ><i class="fa fa-times" style="color: red;"></i></button>
            </div>`

        tr.appendChild(td)
        tbody.append(tr)
        no = no + 1
    });

}
mock();

async function sendmail(email, id,phno) {

    // response = await fetch('/admin/sendMail/' + email)
    // console.log(id);
    // let result = await (response.json())
    // console.log(result);

    var del  = await $.ajax({
        url: 'https://63998c2516b0fdad774062c6.mockapi.io/appointment/'+id,
        type: 'DELETE',
        async: false,
        dataType: 'json',
        enctype: 'multipart/form-data',
        success: function (data) {
            
        },
        error: function (jqXhr, textStatus, errorMessage) {
             
       }
    });

    var post = await $.post("https://63998c2516b0fdad774062c6.mockapi.io/Status",
    {
      phno: phno,
      status: "Approved"
    });
}

async function delete_id(id,phno) {


    // $(document).ready(function () {
    //     $('#Btn').click(function () {
    //         // url of the data to be delete
           
             var del  = await $.ajax({
                 url: 'https://63998c2516b0fdad774062c6.mockapi.io/appointment/'+id,
                 type: 'DELETE',
                 async: false,
                 dataType: 'json',
                 enctype: 'multipart/form-data',
                 success: function (data) {
                     
                 },
                 error: function (jqXhr, textStatus, errorMessage) {
                      
                }
             });
             
         
             var post = await $.post("https://63998c2516b0fdad774062c6.mockapi.io/Status",
             {
               phno: phno,
               status: "Rejected"
             });
    //     });
    // });
        // response = await fetch('/delete/' + id)
    // var req = await new XMLHttpRequest();
    // req.open("GET", "/delete/" + id, true);
    // req.send();
    // req.onreadystatechange = function () {
    //     if (req.readyState == 4 && req.status == 200) {
    //             obj.parentElement.remove();
    //     }
    // };

    // result= await $.ajax({
    //     url: 'https://638f5b8c4ddca317d7f644f9.mockapi.io/form_pg/'+id,
    //     type: 'DELETE',
    //     success: function (data) {
    //         // $("p").append("Delete request is Success.");
    //         console.log(data);
    //     },
    //     error: function (jqXhr, textStatus, errorMessage) {
    //         // $("p").append("Delete request is Fail.");
    //     }
    // });
}