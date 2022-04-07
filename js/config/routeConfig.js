angular.module("listaTelefonica").config(function ($routeProvider) {
    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl",
        resolve: {
            contatos: function (contatosAPI) {
                return contatosAPI.getContatos();
            },
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });
    $routeProvider.when("/novo-contato", {
        templateUrl: "view/novoContato.html",
        controller: "novoContatoCtrl",
        resolve: {
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });
    $routeProvider.when("/detalhesContato/:codigo", {
        templateUrl: "view/detalhesContato.html",
        controller: "detalhesContatoCtrl",
        resolve: {
            contato: function (contatosAPI, $route) {
                return contatosAPI.getContato($route.current.params.codigo);
            }
        }
    });
    $routeProvider.when("/editar-contato/:codigo", {
        templateUrl: "view/editarContato.html",
        controller: "editarContatoCtrl",
        resolve: {
            contato: function (contatosAPI, $route) {
                return contatosAPI.getContato($route.current.params.codigo);
            },
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });
    $routeProvider.when("/operadoras", {
        templateUrl: "view/operadoras.html",
        controller: "listaOperadorasCtrl",
        resolve: {
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });
    $routeProvider.when("/nova-operadora", {
        templateUrl: "view/novaOperadora.html",
        controller: "novaOperadoraCtrl",
    });
    $routeProvider.when("/detalhes-operadora/:codigo", {
        templateUrl: "view/detalhesOperadora.html",
        controller: "detalhesOperadoraCtrl",
        resolve: {
            operadora: function (operadorasAPI, $route) {
                return operadorasAPI.getOperadora($route.current.params.codigo);
            }
        }
    });
    $routeProvider.when("/editar-operadora/:codigo", {
        templateUrl: "view/editarOperadora.html",
        controller: "editarOperadoraCtrl",
        resolve: {
            operadora: function (operadorasAPI, $route) {
                return operadorasAPI.getOperadora($route.current.params.codigo);
            }
        }
    });
    $routeProvider.otherwise({redirectTo: "/contatos"});
});