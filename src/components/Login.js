import React, { Component } from 'react';

class Login extends Component {


    function iniciarSesion() {
       
        //$("#cardIniciarSesion").addClass("d-block"); 
        $("#formIniciar").removeClass("d-none");
    
    }
    
    function enviarLogin() {
        var resultado = false;
        
        
        $.ajax('datajson.json', 
        {
            dataType: 'json',
            type: 'POST',
            success: function (datajson,status,xhr) {
                
                if (status == "success")
                {
                    for (var i = 0; i < datajson['data'].length; i++)
                    {
                        if (datajson['data'][i].email == $("#email").val())
                        {
                            if (datajson['data'][i].clave == calcMD5($("#clave").val()))
                            {
                                resultado = true;
                                break;
                            }
                        }
                    }
                    
                    if (resultado)
                    {
                        $("#cardIniciarSesion").addClass("d-none");
                        $("#cardIniciarSesionOk").removeClass("d-none");
                        $("#formIniciar").addClass("d-none");
                    }
                    else
                    {
                        alert("Email y/o clave incorrecto.");
                    }	
                }
            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log('Error: ' + errorMessage);
            }
        });
        
        return false;
        
    }
    
    function cerrarSesion() {
        
        $("#cardIniciarSesion").removeClass("d-none");
        $("#cardIniciarSesionOk").addClass("d-none");
    
    }

    render() {
        return (
            <div id="loginComponent">
                <h2>Codigo HTML aqui</h2>
                <i>Esto es JSX, basicamente HTML dentro de js</i>
                <div id="cardIniciarSesionOk" class="card text-center d-none">
                    <div class="row m-3">
                        <div class="col-12 m-2" style="background-color: #7892BB;">¡Hola!</div>
                        <div class="col-4">
                            <i class="fas fa-file-alt fa-5x w-100" style="color: #7892BB;"></i>
                            <p>Mis trámites</p>
                        </div>
                        <div class="col-4">
                            <i class="fas fa-folder fa-5x w-100" style="color: #7892BB "></i>
                            <p>Mi carpeta</p>
                        </div>
                        <div class="col-4">
                            <a onClick="javascript: cerrarSesion();">
                                <i class="fas fa-sign-out-alt fa-5x w-100" style="color: #7892BB"></i>
                                <p>Cerrar sesión</p>
                            </a>
                        </div>
                    </div>
                </div>

                //Form login
                <div id="formIniciar" class="card d-none">
                    <form class="text-center  p-4" action="#!">

                        <p class="h4 mb-4">Login</p>

                        // Email
                        <input type="email" id="email" class="form-control mb-4" placeholder="E-mail"/>

                        // Password
                        <input type="password" id="clave" class="form-control mb-4" placeholder="Password"/>

                        <div class="d-flex justify-content-around">
                            <div>
                                // Remember me
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"/>
                                    <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                                </div>
                            </div>
                            <div>
                            // Forgot password 
                                <a href="">Forgot password?</a>
                            </div>
                        </div>

                        // Sign in button
                        <button type="button" onclick="javascript: enviarLogin();" class="btn mdb-color white-text btn-block my-4"
                            >Login</button>

                        // Register -->
                        <p>Not a member?
                            <a href="">Register</a>
                        </p>

                    </form>
                    // Default form login
                </div>


            </div>
        );
    }

}

export default Login;
