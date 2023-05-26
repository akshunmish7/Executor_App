function change_link(ids)
{
    /* if no task is selected for deletion, then the user will be prompted to select atleast one task to delete*/
    /* but still the task will be added. */
    if(ids.length==0)
    {
        window.alert('Please select atleast one task to delete!');
    }
    /* this is the very important portion of the js file. it will replace the value of href attribute with suitable query params in a single string */
    s="/delete-tasks/?"
    let count=0;
    /* making the end point. in a form of "/delete-tasks/?id0=...&id1=...&..." */
    for(let id of ids)
    {
        s+="id"+count+"="
        s+=id;
        if(count<ids.length-1)
        {
            s+="&";
        }
        count++;
    }
    /* replacing the href of the delete button/link to the desired query params */
    document.querySelector('#task-action>a').setAttribute('href', s);
}
/* adding event listener to the add button, so that the action href changes to a desired end point. */
document.querySelector('#task-action>a').addEventListener('click', function()
{
    
    let ids=new Array();
    for(let checkbox of document.querySelectorAll('input[type="checkbox"]'))
    {
        if(checkbox.checked)
        {
            ids.push(checkbox.getAttribute('id'));
        }
    }
    change_link(ids);
})


// data handler
for (let date of document.querySelectorAll('.text-muted'))
{
    date.innerText=date.innerText.toString().substring(0, 15);
}

// logo part JS  
for (let logo of document.querySelectorAll('.logo'))
{
    if(logo.innerText=='Choose a Category')
    {
        logo.style.display="none"
    }
}


// Add button exclamation
document.querySelector('button[type="submit"]').addEventListener('click', function()
{
    if(document.querySelector('textarea').value==""||document.querySelector('#two-dropdowns select').value=="Choose a Category"||document.querySelector('#two-dropdowns input').value=="")
    {
        window.alert('Remember to fill all the fields from next time.\nAn empty task will be added for you!');
    }
})