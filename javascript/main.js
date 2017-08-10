var log = console.log;

$(document).ready(function () {
    var user_data = [
        {
            name: 'Gareth',
            surname: 'Williams',
            email: 'williams.gareth0@gmail.com',
            bio: "This is Gareth, born 11 June 1994 in Stellenbosch and is currently 23."
        },
        {
            name: 'Sabrina',
            surname: 'Legend',
            email: 'sabrina@gmail.com',
            bio: "This is Sabrina, born 20 May 1996 in Blackheath and is currently 21."
        },
         {
            name: 'John',
            surname: 'Doe',
            email: 'jdoe@gmail.com',
            bio: "This is John, born 11 February 1983 in Cape Town and is currently 34."
        }
    ];
    
        var data_source = document.querySelector('#my_data_table').innerHTML;
        var data_template = Handlebars.compile(data_source);
        var dashboard = document.querySelector('#myDashboard');
    
            $("#myDashboard").on('click', function (e) {
                let user_selection = e.target.parentElement.innerText;
                let user_selction_trim = user_selection.substring(0,4);
                
                function name(data) {
                    return data.name.includes(user_selction_trim);
                }
                
                let result = user_data.find(name);
                
                $.gritter.add({
                    position: 'bottom-left',
                    title: result.name,
                    time: 4000,
                    text: result.bio
                });
            })
    
    
    dashboard.innerHTML = data_template({
        users: user_data
    });
 
    log('Document loaded successfully!');
});