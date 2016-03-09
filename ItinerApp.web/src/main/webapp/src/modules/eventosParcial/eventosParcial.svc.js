(function (ng) {

    var mod = ng.module("eventospModule");

    mod.service("eventospService", ["$http", "eventospContext", function ($http, context) {
            /**
             * Obtener la lista de editorials.
             * Hace una petición GET con $http a /editorials para obtener la lista
             * de editorials
             * @returns {promise} promise para leer la respuesta del servidor}
             * Devuelve una lista de objetos de editorials con sus atributos y reviews
             */
            this.fetchRecords = function () {
                return $http.get(context);
            };

            /**
             * Obtener un registro de editorials.
             * Hace una petición GET a /editorials/:id para obtener
             * los datos de un registro específico de editorials
             * @param {number} id del registro a obtener
             * @returns {promise} promise para leer la respuesta del servidor
             * Devuelve un objeto de editorials con sus atributos y reviews
             */
            this.fetchRecord = function (id) {
                return $http.get(context + "/" + id);
            };

            /**
             * Guardar un registro de editorials.
             * Si currentRecord tiene la propiedad id, hace un PUT a /editorials/:id con los
             * nuevos datos de la instancia de editorials.
             * Si currentRecord no tiene la propiedad id, se hace un POST a /editorials
             * para crear el nuevo registro de editorials
             * @param {object} currentRecord instancia de book a guardar/actualizar
             * @returns {promise} promise para leer la respuesta del servidor
             * Devuelve un objeto de editorials con sus datos incluyendo el id
             */
            this.saveRecord = function (currentRecord) {
                if (currentRecord.id) {
                    return $http.put(context + "/" + currentRecord.id, currentRecord);
                } else {
                    return $http.post(context, currentRecord);
                }
            };

            /**
             * Hace una petición DELETE a /editorials/:id para eliminar un book
             * @param {number} id identificador de la instancia de book a eliminar
             * @returns {promise} promise para leer la respuesta del servidor
             * No devuelve datos.
             */
            this.deleteRecord = function (id) {
                return $http.delete(context + "/" + id);
            };
        }]);
})(window.angular);
