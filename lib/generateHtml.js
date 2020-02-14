
module.exports = function generateHTML(managerArr, engineerArr, interArr) {
    return` 

    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/simplex/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://kit.fontawesome.com/3110c8d5de.js" crossorigin="anonymous"></script>
    <title>Team Org Chart</title>
</head>

<body>
    <div class="container">
        <div class="jumbotron">
            <h1 class="text-center">Team Org Chart</h1>
            <h4 class="text-muted text-center">Together we can! </h4>
            <hr>
        </div>
        <h3 class="text-muted">Management</h3>
        <div class="row justify-content-center mb-5">
        
        <!-- Manager Card -->
        ${managerArr.map(manager =>
        `<div class="card col-3">
            <div class="card-header">
            <h3><strong> ${manager.name}</strong></h3>
            <h3><strong> <i class="fa fa-coffee"></i> Manager</strong></h3>
            </div>
            <div class="card-body">
            <div>
            <h5><strong>Employee ID: </strong> <span>${manager.id}  </span></h5>
            <h5><strong>Email: </strong> <span>${manager.email} </span></h5>
            <h5><strong>Office Number Number: </strong> <span> ${manager.officeNumber} </span></h5>
            </div>
            </div>
            </div>`.trim()).join("")}
            <!-- End Manager Card -->
        </div>
            
            <h3 class="text-muted">Engineering</h3>
            <div class="row justify-content-center mb-5">    
            <!-- Engineer Cards -->
            ${engineerArr.map(engineer =>
            `<div class="card col-3 m-1">
                <div class="card-header">
                <h3><strong> ${engineer.name} </strong></h3>
                <h3><strong> <i class="fas fa-users-cog"></i> Engineer</strong></h3>
                </div>
                <div class="card-body">
                <div>
                <h5><strong>Employee ID: </strong> <span> ${engineer.id} </span></h5>
                <h5><strong>Email: </strong> <span> ${engineer.email} </span></h5>
                <h5><strong>GitHub username: </strong> <span> ${engineer.github} </span></h5>
                </div>
                </div>
                </div>`.trim()).join("")}    
                <!-- End Engineer Cards -->
            </div> <!-- end row -->
                
        <h3 class="text-muted">Interns</h3>
       <div class="row justify-content-center mb-5">
            <!-- Intern Cards -->
            ${interArr.map(intern =>
                `<div class="card col-3 m-1">
                <div class="card-header">
                    <h3><strong> ${intern.name} </strong></h3>
                    <h3><strong> <i class="fa fa-user"></i> Intern</strong></h3>
                </div>
                <div class="card-body">
                    <div>
                        <h5><strong>Employee ID:</strong> <span> ${intern.id} </span></h5>
                        <h5><strong>Email:</strong> <span> ${intern.email} </span></h5>
                        <h5><strong>School:</strong> <span> ${intern.school} </span></h5>
                    </div>
                </div>
            </div>`.trim()).join("")}

            <!-- End Intern Cards -->

        </div> <!-- end row -->    
    </div> <!-- end Container -->

</body>

</html>`
 }