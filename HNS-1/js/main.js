window.onload = function(){
    
    //Simulate data population.
    let data = [{
        domain:'owndomain1.hh',
        type:'Otto',
        expiration:'11/25/2019', 
        action:'Available'                                        
    },{
        domain:'owndomain1.hh',
        type:'File',
        expiration:'11/25/2019', 
        action:'Available'                                        
    },{
        domain:'owndomain1.hh',
        type:'File',
        expiration:'11/25/2019', 
        action:'Unavailable'                                        
    },
    {
        domain:'owndomain1.hh',
        type:'File',
        expiration:'11/25/2019', 
        action:'Unavailable'                                        
    },
    {
        domain:'owndomain1.hh',
        type:'Otto',
        expiration:'11/25/2019', 
        action:'Available'                                        
    },
    
    {
        domain:'owndomain1.hh',
        type:'File',
        expiration:'11/25/2019', 
        action:'Available'                                        
    },
    
    {
        domain:'owndomain1.hh',
        type:'File',
        expiration:'11/25/2019', 
        action:'Unavailable'                                        
    },{
        domain:'owndomain1.hh',
        type:'File',
        expiration:'11/25/2019', 
        action:'Unavailable'                                        
    }]


    let tableBody = document.querySelector('body table tbody');
    console.log(tableBody);
    console.log(data);

    data.map(row => {
        let tr = document.createElement("tr");
        tr.classList.add("responsive-data");

        let tdDomain = document.createElement("td");
        tdDomain.classList.add("dta");
        tdDomain.innerHTML = row.domain;
        tr.appendChild(tdDomain);

        let tdType = document.createElement("td");
        tdType.classList.add("dta");
        tdType.innerHTML = row.type;
        tr.appendChild(tdType);

        let tdExpiration = document.createElement("td");
        tdExpiration.classList.add("dta");
        tdExpiration.innerHTML = row.expiration;
        tr.appendChild(tdExpiration);

        let tdAction = document.createElement("td");
        tdAction.classList.add("cta");
        tdAction.innerHTML = row.action;
        if(row.action === 'Unavailable') {
            tdAction.id = 'red';
        }
        tr.appendChild(tdAction);

        let tdImg = document.createElement("td");
        tdImg.classList.add("img");
        let aTag = document.createElement("a");
        aTag.setAttribute("href","/domain-purchase.html");
        let img = document.createElement("img");
        img.src = "images/cart.png";
        if(row.action === 'Unavailable') {
            img.classList.add("unavailable-light");
        }
        aTag.appendChild(img);
        tdImg.appendChild(aTag);
        tr.appendChild(tdImg);

        tableBody.appendChild(tr);

        // tableBody.appendChild(`
        // <tr class="responsive-data"> 
        //     <td class="dta">${row.domain}</td>
        //     <td class="dta">${row.type}</td>
        //     <td class="dta">${row.expiration}</td> 
        //     <td class="cta" id=${row.action === 'Unavailable'?'red':''}>${row.action}</td>
        //     <td class="img"><img src="images/img4.png" class=${row.action === 'Unavailable' ? 'unavailable-light':''}></td>
        // </tr>
        // `)
    })
}