// Recoge todos los datos de la tabla EMP
function datosEmpleado() {
    let xmlhttp = new XMLHttpRequest();
    let url = "./php/empleados.php";
    let empleados;
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            empleados = JSON.parse(this.responseText);

            let x = document.getElementById("numEmp").selectedIndex;
            let y = document.getElementById("numEmp").options;
            let texto = y[x].text;

            // Cumplimenta cada campo con los datos del empleado seleccionado.
            for (let i = 0; i < empleados.length; i++) {
                if (empleados[i].id == texto) {
                    document.getElementById('apellidos').value = empleados[i].apellidos;
                    document.getElementById('oficio').value = empleados[i].oficio;
                    document.getElementById('fechaAlta').value = empleados[i].alta;
                    document.getElementById('director').value = empleados[i].jefe;
                    document.getElementById('salario').value = empleados[i].salario;
                    document.getElementById('comision').value = empleados[i].comision;
                    document.getElementById('departamento').value = empleados[i].departamento;
                }
            }
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send();
}

// Recoge todos los datos de la tabla DEPT
function selectDepartamento() {
    let xmlhttp = new XMLHttpRequest();
    let url = "./php/departamento.php";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let departamentos = JSON.parse(this.responseText);

            let select = document.getElementById('departamento');

            for (let i = 0; i < departamentos.length; i++) {
                let option = document.createElement('option');
                option.value = departamentos[i].id;
                option.textContent = departamentos[i].nombre;
                select.appendChild(option);
            }
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send();
}

// Añade los options con sus valores al select con id "director".
function selectJefe() {
    let xmlhttp = new XMLHttpRequest();
    let url = "./php/jefe.php";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let jefes = JSON.parse(this.responseText);
            let select = document.getElementById('director');

            for (let i = 0; i < jefes.length; i++) {
                if (jefes[i].id != null) {
                    let option = document.createElement('option');
                    option.value = jefes[i].id;
                    option.textContent = jefes[i].id;
                    select.appendChild(option);
                } else {
                    let option = document.createElement('option');
                    option.value = 'null';
                    option.textContent = 'sin Jefe';
                    select.appendChild(option);
                }
            }
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send();
}

// Añade los options con sus valores al select con id "salario".
function selectSalario() {
    let xmlhttp = new XMLHttpRequest();
    let url = "./php/empleados.php";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let empleados = JSON.parse(this.responseText);
            let select = document.getElementById('salario');

            for (let i = 0; i < empleados.length; i++) {
                if (empleados[i].id != null) {
                    let option = document.createElement('option');
                    option.value = empleados[i].salario;
                    option.textContent = empleados[i].salario;
                    select.appendChild(option);
                }
            }
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send();
}

// Añade los options con sus valores al select con id "comision".
function selectComision() {
    let xmlhttp = new XMLHttpRequest();
    let url = "./php/empleados.php";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let empleados = JSON.parse(this.responseText);
            let select = document.getElementById('comision');

            for (let i = 0; i < empleados.length; i++) {
                if (empleados[i].comision != null) {
                    let option = document.createElement('option');
                    option.value = empleados[i].comision;
                    option.textContent = empleados[i].comision;
                    select.appendChild(option);
                } else {
                    let option = document.createElement('option');
                    option.value = 'null';
                    option.textContent = 'sin comisión';
                    select.appendChild(option);
                }
            }
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send();
}

// Resetea el valor de los todos los campos, dándole  al campo de "Num Empleado" un nuevo id (EMP_NO)
function nuevoRegistro() {

    let total = document.getElementById('numEmp').options.length - 1;
    let ultimoIDEmpleado = document.getElementById('numEmp').options[total].value;

    let select = document.getElementById('numEmp');
    let option = document.createElement('option');
    let contenido = document.createTextNode(parseInt(ultimoIDEmpleado) + 1);
    option.appendChild(contenido);
    select.appendChild(option);

    // Cumplimenta cada campo con los datos necesarios.
    document.getElementById("numEmp").value = parseInt(ultimoIDEmpleado) + 1;
    document.getElementById("apellidos").value = "";
    document.getElementById('oficio').value = "";
    document.getElementById("director").selectedIndex = 0;
    document.getElementById("fechaAlta").value = '';
    document.getElementById("salario").selectedIndex = 0;
    document.getElementById("comision").selectedIndex = 0;
    document.getElementById("departamento").selectedIndex = 0;
}

// Elimina un registro según su id, de la tabla 'emp' de la base de datos
function borrarRegistro(id) {

    let x = document.getElementById("numEmp").selectedIndex;
    let y = document.getElementById("numEmp").options;
    id = y[x].text;

    if (confirm("¿Estás seguro de que deseas eliminar este registro?")) {
        // Envia solicitud AJAX con método POST
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);
            }
        };
        xhttp.open("POST", "./php/delete.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("id=" + id);
    }
    document.getElementById("salida").innerHTML = "";
    actualizarTabla();
    nuevoRegistro();
}

// Crea un nuevo registro y lo añade a la tabla 'emp' de la base de datos
function updateRegistro(id) {

    // Obtenemos la información de la tabla "EMP"
    let xmlhttp = new XMLHttpRequest();
    let url = "./php/empleados.php";
    let empleados;

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            empleados = JSON.parse(this.responseText);

            // Obtiene los datos del formulario
            let emp_no = document.getElementById('numEmp').value;
            let apellidos = document.getElementById('apellidos').value;
            let oficio = document.getElementById('oficio').value;
            let jefe = document.getElementById('director').value;
            let fechaAlta = document.getElementById('fechaAlta').value;
            let salario = document.getElementById('salario').value;
            let comision = document.getElementById('comision').value;
            let departamento = document.getElementById('departamento').value;

            // Según exista o no el id (emp_no), realiza un UPDATE o un INSERT
            for (let i = 0; i < empleados.length; i++) {
                // Aquí realiza el UPDATE.
                if (emp_no == empleados[i].id) {

                    // Crea una solicitud POST utilizando fetch()
                    fetch('./php/update.php', {
                        method: 'POST',
                        body: new URLSearchParams({
                            'EMP_NO': emp_no,
                            'COGNOM': apellidos,
                            'OFICI': oficio,
                            'CAP': jefe,
                            'DATA_ALTA': fechaAlta,
                            'SALARI': salario,
                            'COMISSIO': comision,
                            'DEPT_NO': departamento
                        })
                    })
                        .then(response => response.text())
                        .then(data => console.log(data))
                        .catch(error => console.error(error));
                    actualizarTabla();
                    return;
                }
            }
            // Aquí realiza el INSERT.
            for (let i = 0; i < empleados.length; i++) {
                if (emp_no != empleados[i].id) {

                    // Crea una solicitud POST utilizando fetch()
                    fetch('./php/insert.php', {
                        method: 'POST',
                        body: new URLSearchParams({
                            'EMP_NO': emp_no,
                            'COGNOM': apellidos,
                            'OFICI': oficio,
                            'CAP': jefe,
                            'DATA_ALTA': fechaAlta,
                            'SALARI': salario,
                            'COMISSIO': comision,
                            'DEPT_NO': departamento
                        })
                    })
                        .then(response => response.text())
                        .then(data => console.log(data))
                        .catch(error => console.error(error));
                    actualizarTabla();
                    return;
                }
            }
        }
    };

    xmlhttp.open("POST", url, true);
    xmlhttp.send();

    document.getElementById("salida").innerHTML = "";

}

// Pinta en pantalla un tabla con la información de los empleados y rellena los select con sus opciones.
function pintarTablaEmpleados() {

    let xmlhttp = new XMLHttpRequest();
    let url = "./php/empleados.php";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let empleados = JSON.parse(this.responseText);

            // Crea una tabla con los empleados (id, apellidos)
            crearTabla(empleados);
            rellenarSelect('numEmp', empleados);
            selectDepartamento();
            selectJefe();
            selectSalario();
            selectComision();
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send();
}

// Pinta en pantalla los datos actualizados de la tabla,
function actualizarTabla() {
    let xmlhttp = new XMLHttpRequest();
    let url = "./php/empleados.php";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let empleados = JSON.parse(this.responseText);

            // Crea una tabla con los empleados (id, apellidos)
            crearTabla(empleados);
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send();
}

// Muestra una tabla según el filtro espeficado
function mostrarFiltro() {
    document.getElementById('salida').innerHTML = "";

    let patron = /^[0-9]+$/;
    let str = prompt('Escoge un filtro: ');

    while (!(patron.test(str))) {
        str = prompt('Filtra: ');
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {

        let empleados = JSON.parse(this.responseText);
        crearTabla(empleados);
    }
    xhttp.open("GET", "./php/filtro.php?q=" + str);
    xhttp.send();
}

// Crea una tabla con los datos seleccionados,
function crearTabla(datos) {
    let arrayCabecera = ['EMP_NO', 'APELLIDOS'];

    let tabla = document.createElement('table');
    tabla.id = "idTabla";
    let caption = document.createElement('caption');
    let contenidoTitulo = document.createTextNode('Empleados');
    caption.appendChild(contenidoTitulo);
    tabla.appendChild(caption);

    let tr = document.createElement('tr');

    for (let i = 0; i < 2; i++) {
        let td = document.createElement('td');
        let contenido = document.createTextNode(arrayCabecera[i]);
        td.appendChild(contenido);
        tr.appendChild(td);
    }
    tabla.appendChild(tr);

    for (let i = 0; i < datos.length; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < 1; j++) {
            let td = document.createElement('td');
            let contenido = document.createTextNode(datos[i].id);
            td.appendChild(contenido);
            tr.appendChild(td);
        }

        for (let j = 1; j < 2; j++) {
            let td = document.createElement('td');
            let contenido = document.createTextNode(datos[i].apellidos);
            td.appendChild(contenido);
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    document.getElementById('salida').appendChild(tabla);
}

// Rellena un select con options según parámetros,
function rellenarSelect(id, datos) {
    let select = document.getElementById(id);

    for (let i = 0; i < datos.length; i++) {
        let option = document.createElement('option');
        option.value = datos[i].id;
        option.textContent = datos[i].id;
        select.appendChild(option);
    }
}

window.onload = function () {
    pintarTablaEmpleados();
}
