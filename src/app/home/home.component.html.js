/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}());
"row" >
    /** @class */ (function () {
        function class_2() {
        }
        return class_2;
    }());
"col-sm-12" >
    -nav - bar > /app-nav-bar>
    < /div>
    < div;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"col-sm-12" >
    /** @class */ (function () {
        function class_3() {
        }
        return class_3;
    }());
" card text-white bg-secondary" >
    /** @class */ (function () {
        function class_4() {
        }
        return class_4;
    }());
"card-body" >
    /** @class */ (function () {
        function class_5() {
        }
        return class_5;
    }());
"row" >
    /** @class */ (function () {
        function class_6() {
        }
        return class_6;
    }());
"col-sm-3";
align = "right" > /** @class */ (function () {
    function class_7() {
    }
    return class_7;
}());
"icon ion-md-search" > /i></div >
    /** @class */ (function () {
        function class_8() {
        }
        return class_8;
    }());
"col-sm-6" >
    /** @class */ (function () {
        function class_9() {
        }
        return class_9;
    }());
"form-control "[(ngModel)] = "searchText";
type = "search";
placeholder = "Búsqueda por equipo o jugador";
aria - label;
"Search" >
    /div>
    < div;
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"col-sm-3" > /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < div;
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
"col-sm-12" >
    /** @class */ (function () {
        function class_10() {
        }
        return class_10;
    }());
"jumbotron jumbotron-fluid" >
    /** @class */ (function () {
        function class_11() {
        }
        return class_11;
    }());
"container" >
    EQUIPOS;
/h3>
    < hr;
var default_4 = /** @class */ (function () {
    function default_4() {
    }
    return default_4;
}());
"my-4" >
    /** @class */ (function () {
        function class_12() {
        }
        return class_12;
    }());
"row" >
    /** @class */ (function () {
        function class_13() {
        }
        return class_13;
    }());
"col-sm-4" * ngFor;
" let nombre of arrayNombresEquipos | search: searchText; let indice=index " >
     * ngFor;
"let equipo of equipos" >
     * ngIf;
"equipo.nombre==nombre && indice<=6" >
    /** @class */ (function () {
        function class_14() {
        }
        return class_14;
    }());
"card"[routerLink] = "['/equipo',equipo.id]" >
    align;
"center" > /** @class */ (function () {
    function class_15() {
    }
    return class_15;
}());
"card-img-top img-fluid";
style = "width: 50%"[src] = "equipo.imagenUrl";
alt = "Card image cap" > /div>
    < div;
var default_5 = /** @class */ (function () {
    function default_5() {
    }
    return default_5;
}());
"card-body" >
    /** @class */ (function () {
        function class_16() {
        }
        return class_16;
    }());
"card-title";
style = "text-align: center" > {};
{
    equipo.nombre;
}
/h5>
    < p;
var default_6 = /** @class */ (function () {
    function default_6() {
    }
    return default_6;
}());
"card-text" > Liga;
{
    {
        equipo.liga;
    }
}
/p>
    < p;
var default_7 = /** @class */ (function () {
    function default_7() {
    }
    return default_7;
}());
"card-text" > Numero;
de;
Copas;
Internacionales: {
    {
        equipo.numeroCopasInternacionales;
    }
}
/p>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < div;
id = "demo";
var default_8 = /** @class */ (function () {
    function default_8() {
    }
    return default_8;
}());
"collapse" >
    /** @class */ (function () {
        function class_17() {
        }
        return class_17;
    }());
"col-sm-4" * ngFor;
" let nombre of arrayNombresEquipos | search: searchText; let indice=index " >
     * ngFor;
"let equipo of equipos" >
     * ngIf;
"equipo.nombre==nombre && indice>6" >
    /** @class */ (function () {
        function class_18() {
        }
        return class_18;
    }());
"card"[routerLink] = "['/equipo',equipo.id]" >
    align;
"center" > /** @class */ (function () {
    function class_19() {
    }
    return class_19;
}());
"card-img-top img-fluid";
style = "width: 50%"[src] = "equipo.imagenUrl";
alt = "Card image cap" > /div>
    < div;
var default_9 = /** @class */ (function () {
    function default_9() {
    }
    return default_9;
}());
"card-body" >
    /** @class */ (function () {
        function class_20() {
        }
        return class_20;
    }());
"card-title";
style = "text-align: center" > {};
{
    equipo.nombre;
}
/h5>
    < p;
var default_10 = /** @class */ (function () {
    function default_10() {
    }
    return default_10;
}());
"card-text" > Liga;
{
    {
        equipo.liga;
    }
}
/p>
    < p;
var default_11 = /** @class */ (function () {
    function default_11() {
    }
    return default_11;
}());
"card-text" > Fecha;
de;
Creacion: {
    {
        equipo.numeroCopasInternacionales;
    }
}
/p>
    < !-- < a;
href = "#"[routerLink] = "['/equipo',equipo.id]";
var default_12 = /** @class */ (function () {
    function default_12() {
    }
    return default_12;
}());
"btn btn-primary" > /** @class */ (function () {
    function class_21() {
    }
    return class_21;
}());
"icon ion-md-today" > /i> Detalles</a > -- >
    /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < div;
var default_13 = /** @class */ (function () {
    function default_13() {
    }
    return default_13;
}());
"col-sm-12" > /div>
    < div;
var default_14 = /** @class */ (function () {
    function default_14() {
    }
    return default_14;
}());
"col-sm 12";
align = "center" * ngIf;
"arrayNombresJugadores.length>6" >
    type;
"button";
var default_15 = /** @class */ (function () {
    function default_15() {
    }
    return default_15;
}());
"btn btn-info";
data - toggle;
"collapse";
data - target;
"#demo" > Cargar;
mas < /button>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < div;
var default_16 = /** @class */ (function () {
    function default_16() {
    }
    return default_16;
}());
"col-sm-12" >
    /** @class */ (function () {
        function class_22() {
        }
        return class_22;
    }());
"jumbotron jumbotron-fluid" >
    /** @class */ (function () {
        function class_23() {
        }
        return class_23;
    }());
"container" >
    JUGADORES;
/h3>
    < hr;
var default_17 = /** @class */ (function () {
    function default_17() {
    }
    return default_17;
}());
"my-4" >
    /** @class */ (function () {
        function class_24() {
        }
        return class_24;
    }());
"row" >
    /** @class */ (function () {
        function class_25() {
        }
        return class_25;
    }());
"col-sm-3" * ngFor;
" let nombre of arrayNombresJugadores | search: searchText" >
     * ngFor;
"let jugador of jugadores" >
     * ngIf;
"jugador.nombre==nombre" >
    /** @class */ (function () {
        function class_26() {
        }
        return class_26;
    }());
"card"[routerLink] = "['/equipo',jugador.equipoIDFK.id,'/jugador/buscar/',jugador.id]" >
    align;
"center" > /** @class */ (function () {
    function class_27() {
    }
    return class_27;
}());
"card-img-top img-fluid"[src] = "jugador.imagenUrl";
alt = "Imagen Jugador" > /div>
    < div;
var default_18 = /** @class */ (function () {
    function default_18() {
    }
    return default_18;
}());
"card-body" >
    /** @class */ (function () {
        function class_28() {
        }
        return class_28;
    }());
"card-title";
style = "text-align: center" > {};
{
    jugador.nombreCamiseta;
}
{
    {
        jugador.nombreCompleoJugador;
    }
}
/h5>
    < p;
var default_19 = /** @class */ (function () {
    function default_19() {
    }
    return default_19;
}());
"card-text" > Numero;
Camiseta: {
    {
        jugador.numeroCamiseta;
    }
}
/p>
    < !-- < a;
var default_20 = /** @class */ (function () {
    function default_20() {
    }
    return default_20;
}());
"btn btn-primary" > /** @class */ (function () {
    function class_29() {
    }
    return class_29;
}());
"icon ion-md-today" > /i> Detalles</a > -- >
    /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>
    < /div>;
