let $sidebarButton = $("#sidebar-button");

$sidebarButton.on('click', ()=>{
    console.log("Trying colapse");
    let $sidebar = $('aside');
    $sidebar.toggle("slide","", 500);
})