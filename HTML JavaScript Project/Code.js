let Reftable=document.createElement("table");

function addRecord(){

    let new_ninumber="",new_fullname="",new_phone="",new_address="",new_department="";

    if (document.getElementById("T_ninumber").value==""){

        document.getElementById("Error_ninumber").style.visibility="visible";

    }

    else{

        document.getElementById("Error_ninumber").style.visibility="hidden";
        new_ninumber=document.getElementById("T_ninumber").value;

    }

    if (document.getElementById("T_fullname").value==""){

        document.getElementById("Error_fullname").style.visibility="visible";

    }

    else{

        document.getElementById("Error_fullname").style.visibility="hidden";
        new_fullname=document.getElementById("T_fullname").value;

    }

    if (document.getElementById("T_phone").value==""){

        document.getElementById("Error_phone").style.visibility="visible";

    }

    else{

        document.getElementById("Error_phone").style.visibility="hidden";
        new_phone=document.getElementById("T_phone").value;

    }

    if (document.getElementById("T_address").value==""){

        document.getElementById("Error_address").style.visibility="visible";

    }

    else{

        document.getElementById("Error_address").style.visibility="hidden";
        new_address=document.getElementById("T_address").value;

    }

    if (document.getElementById("T_department").value==""){

        document.getElementById("Error_department").style.visibility="visible";

    }

    else{

        document.getElementById("Error_department").style.visibility="hidden";
        new_department=document.getElementById("T_department").value;

    }

    if (new_ninumber!=="" && new_fullname!=="" && new_phone!=="" && new_address!=="" && new_department!==""){

        QARecords.push(
            {

                "ninumber":new_ninumber,
                "fullname":new_fullname,
                "phone":new_phone,
                "address":new_address,
                "department":new_department,

            }

        );

    }

}

function showRecords(){

    Reftable.innerHTML="";

    document.getElementById("Error_ninumber").style.visibility="hidden";
    document.getElementById("Error_fullname").style.visibility="hidden";
    document.getElementById("Error_phone").style.visibility="hidden";
    document.getElementById("Error_address").style.visibility="hidden";
    document.getElementById("Error_department").style.visibility="hidden";


    Reftable.border=1;

    let TR=document.createElement("tr");

    TR.style.backgroundColor="blue";

    let TD_ninumber=document.createElement("td");
    let TD_fullname=document.createElement("td");
    let TD_phone=document.createElement("td");
    let TD_address=document.createElement("td");
    let TD_department=document.createElement("td");

    TD_ninumber.innerHTML="<b> NI Number </b>";
    TD_fullname.innerHTML="<b> Full Name </b>";
    TD_phone.innerHTML="<b> Phone Number </b>";
    TD_address.innerHTML="<b> Address </b>";
    TD_department.innerHTML="<b> Department </b>";

    TR.appendChild(TD_ninumber);
    TR.appendChild(TD_fullname);
    TR.appendChild(TD_phone);
    TR.appendChild(TD_address);
    TR.appendChild(TD_department);

    Reftable.appendChild(TR);

    for (let i=0;i<QARecords.length;i++){

        let TR=document.createElement("tr");

        TR.style.backgroundColor="green";

        let TD_ninumber=document.createElement("td");
        let TD_fullname=document.createElement("td");
        let TD_phone=document.createElement("td");
        let TD_address=document.createElement("td");
        let TD_department=document.createElement("td");

        TD_ninumber.innerHTML=QARecords[i].ninumber;
        TD_fullname.innerHTML=QARecords[i].fullname;
        TD_phone.innerHTML=QARecords[i].phone;
        TD_address.innerHTML=QARecords[i].address;
        TD_department.innerHTML=QARecords[i].department;

        TR.appendChild(TD_ninumber);
        TR.appendChild(TD_fullname);
        TR.appendChild(TD_phone);
        TR.appendChild(TD_address);
        TR.appendChild(TD_department);

        Reftable.appendChild(TR);

    }

    document.body.appendChild(Reftable);

}

function filterRecords(){

    Reftable.innerHTML="";
    
    document.getElementById("Error_ninumber").style.visibility="hidden";
    document.getElementById("Error_fullname").style.visibility="hidden";
    document.getElementById("Error_phone").style.visibility="hidden";
    document.getElementById("Error_address").style.visibility="hidden";
    document.getElementById("Error_department").style.visibility="hidden";

    if (document.getElementById("DPD").value==""){

        

    }

    else{

        Reftable.border=1;

        let TR=document.createElement("tr");

        TR.style.backgroundColor="blue";

        let TD_ninumber=document.createElement("td");
        let TD_fullname=document.createElement("td");
        let TD_phone=document.createElement("td");
        let TD_address=document.createElement("td");
        let TD_department=document.createElement("td");

        TD_ninumber.innerHTML="<b> NI Number </b>";
        TD_fullname.innerHTML="<b> Full Name </b>";
        TD_phone.innerHTML="<b> Phone Number </b>";
        TD_address.innerHTML="<b> Address </b>";
        TD_department.innerHTML="<b> Department </b>";

        TR.appendChild(TD_ninumber);
        TR.appendChild(TD_fullname);
        TR.appendChild(TD_phone);
        TR.appendChild(TD_address);
        TR.appendChild(TD_department);

        Reftable.appendChild(TR);

        for (let i=0;i<QARecords.length;i++){

            if (QARecords[i].department==document.getElementById("DPD").value){

            let TR=document.createElement("tr");

            TR.style.backgroundColor="green";

            let TD_ninumber=document.createElement("td");
            let TD_fullname=document.createElement("td");
            let TD_phone=document.createElement("td");
            let TD_address=document.createElement("td");
            let TD_department=document.createElement("td");

            TD_ninumber.innerHTML=QARecords[i].ninumber;
            TD_fullname.innerHTML=QARecords[i].fullname;
            TD_phone.innerHTML=QARecords[i].phone;
            TD_address.innerHTML=QARecords[i].address;
            TD_department.innerHTML=QARecords[i].department;

            TR.appendChild(TD_ninumber);
            TR.appendChild(TD_fullname);
            TR.appendChild(TD_phone);
            TR.appendChild(TD_address);
            TR.appendChild(TD_department);

            Reftable.appendChild(TR);

            }

        }

    }
        
    document.body.appendChild(Reftable);

}

function editRecord(){

    Reftable.innerHTML="";

    document.getElementById("Error_ninumber").style.visibility="hidden";
    document.getElementById("Error_fullname").style.visibility="hidden";
    document.getElementById("Error_phone").style.visibility="hidden";
    document.getElementById("Error_address").style.visibility="hidden";
    document.getElementById("Error_department").style.visibility="hidden";

    Reftable.border=1;

    let TR=document.createElement("tr");

    TR.style.backgroundColor="blue";

    let TD_ninumber=document.createElement("td");
    let TD_fullname=document.createElement("td");
    let TD_phone=document.createElement("td");
    let TD_address=document.createElement("td");
    let TD_department=document.createElement("td");

    TD_ninumber.innerHTML="<b> NI Number </b>";
    TD_fullname.innerHTML="<b> Full Name </b>";
    TD_phone.innerHTML="<b> Phone Number </b>";
    TD_address.innerHTML="<b> Address </b>";
    TD_department.innerHTML="<b> Department </b>";

    TR.appendChild(TD_ninumber);
    TR.appendChild(TD_fullname);
    TR.appendChild(TD_phone);
    TR.appendChild(TD_address);
    TR.appendChild(TD_department);

    Reftable.appendChild(TR);

    for (let i=0;i<QARecords.length;i++){

        if ((QARecords[i].ninumber==document.getElementById("T_ninumber").value) || (QARecords[i].fullname==document.getElementById("T_fullname").value) || (QARecords[i].phone==document.getElementById("T_phone").value) || (QARecords[i].address==document.getElementById("T_address").value)){

            let TR=document.createElement("tr");

            TR.style.backgroundColor="green";
    
            let TD_ninumber=document.createElement("td");
            let TD_fullname=document.createElement("td");
            let TD_phone=document.createElement("td");
            let TD_address=document.createElement("td");
            let TD_department=document.createElement("td");

            if (document.getElementById("E_ninumber").value!==""){

            QARecords[i].ninumber=document.getElementById("E_ninumber").value;

            }

            if (document.getElementById("E_fullname").value!==""){

            QARecords[i].fullname=document.getElementById("E_fullname").value;

            }

            if (document.getElementById("E_phone").value!==""){

            QARecords[i].phone=document.getElementById("E_phone").value;

            }

            if (document.getElementById("E_address").value!==""){

            QARecords[i].address=document.getElementById("E_address").value;

            }

            if (document.getElementById("E_department").value!==""){

            QARecords[i].department=document.getElementById("E_department").value;

            }
    
            TD_ninumber.innerHTML=QARecords[i].ninumber;
            TD_fullname.innerHTML=QARecords[i].fullname;
            TD_phone.innerHTML=QARecords[i].phone;
            TD_address.innerHTML=QARecords[i].address;
            TD_department.innerHTML=QARecords[i].department;
    
            TR.appendChild(TD_ninumber);
            TR.appendChild(TD_fullname);
            TR.appendChild(TD_phone);
            TR.appendChild(TD_address);
            TR.appendChild(TD_department);
    
            Reftable.appendChild(TR);

        }

        else{

            let TR=document.createElement("tr");

            TR.style.backgroundColor="green";
    
            let TD_ninumber=document.createElement("td");
            let TD_fullname=document.createElement("td");
            let TD_phone=document.createElement("td");
            let TD_address=document.createElement("td");
            let TD_department=document.createElement("td");
    
            TD_ninumber.innerHTML=QARecords[i].ninumber;
            TD_fullname.innerHTML=QARecords[i].fullname;
            TD_phone.innerHTML=QARecords[i].phone;
            TD_address.innerHTML=QARecords[i].address;
            TD_department.innerHTML=QARecords[i].department;
    
            TR.appendChild(TD_ninumber);
            TR.appendChild(TD_fullname);
            TR.appendChild(TD_phone);
            TR.appendChild(TD_address);
            TR.appendChild(TD_department);
    
            Reftable.appendChild(TR);

        }

    }

    document.body.appendChild(Reftable);

}

function deleteRecord(){

    Reftable.innerHTML="";

    document.getElementById("Error_ninumber").style.visibility="hidden";
    document.getElementById("Error_fullname").style.visibility="hidden";
    document.getElementById("Error_phone").style.visibility="hidden";
    document.getElementById("Error_address").style.visibility="hidden";
    document.getElementById("Error_department").style.visibility="hidden";

    Reftable.border=1;

    let TR=document.createElement("tr");

    TR.style.backgroundColor="blue";

    let TD_ninumber=document.createElement("td");
    let TD_fullname=document.createElement("td");
    let TD_phone=document.createElement("td");
    let TD_address=document.createElement("td");
    let TD_department=document.createElement("td");

    TD_ninumber.innerHTML="<b> NI Number </b>";
    TD_fullname.innerHTML="<b> Full Name </b>";
    TD_phone.innerHTML="<b> Phone Number </b>";
    TD_address.innerHTML="<b> Address </b>";
    TD_department.innerHTML="<b> Department </b>";

    TR.appendChild(TD_ninumber);
    TR.appendChild(TD_fullname);
    TR.appendChild(TD_phone);
    TR.appendChild(TD_address);
    TR.appendChild(TD_department);

    Reftable.appendChild(TR);

    for (let i=0;i<QARecords.length;i++){

        if ((QARecords[i].ninumber==document.getElementById("T_ninumber").value) || (QARecords[i].fullname==document.getElementById("T_fullname").value) || (QARecords[i].phone==document.getElementById("T_phone").value) || (QARecords[i].address==document.getElementById("T_address").value)){

            QARecords[i].ninumber="";
            QARecords[i].fullname="";
            QARecords[i].phone="";
            QARecords[i].address="";
            QARecords[i].department="";

        }

        else{

            let TR=document.createElement("tr");

            TR.style.backgroundColor="green";
    
            let TD_ninumber=document.createElement("td");
            let TD_fullname=document.createElement("td");
            let TD_phone=document.createElement("td");
            let TD_address=document.createElement("td");
            let TD_department=document.createElement("td");
    
            TD_ninumber.innerHTML=QARecords[i].ninumber;
            TD_fullname.innerHTML=QARecords[i].fullname;
            TD_phone.innerHTML=QARecords[i].phone;
            TD_address.innerHTML=QARecords[i].address;
            TD_department.innerHTML=QARecords[i].department;
    
            TR.appendChild(TD_ninumber);
            TR.appendChild(TD_fullname);
            TR.appendChild(TD_phone);
            TR.appendChild(TD_address);
            TR.appendChild(TD_department);
    
            Reftable.appendChild(TR);

        }

    }

    document.body.appendChild(Reftable);

}