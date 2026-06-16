

        <div className="min-h-screen bg-gray-100 p-6">

            {/* ====================================================== */}
            {/* CONTENEDOR CENTRADO */}
            {/* ====================================================== */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">
                    Contenedor Centrado
                </h2>

                <p>
                    Contenido...
                </p>
            </div>


            {/* ====================================================== */}
            {/* FORMULARIO */}
            {/* ====================================================== */}
            <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">
                    Formulario
                </h2>

                <form className="space-y-4">

                    <div>
                        <label className="block mb-1 font-medium">
                            Nombre
                        </label>

                        <input
                            type="text"
                            className="w-full border border-blue-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingrese nombre"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            className="w-full border border-blue-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingrese email"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">
                            Categoría
                        </label>

                        <select className="w-full border border-blue-300 rounded-md px-3 py-2">
                            <option>Opción 1</option>
                            <option>Opción 2</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">
                            Descripción
                        </label>

                        <textarea
                            rows={4}
                            className="w-full border border-blue-300 rounded-md px-3 py-2"
                        />
                    </div>

                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Guardar
                    </button>

                </form>
            </div>


            {/* ====================================================== */}
            {/* CARD SIMPLE */}
            {/* ====================================================== */}
            <div className="max-w-sm bg-white rounded-lg shadow p-4 mb-8">
                <h3 className="text-lg font-semibold mb-2">
                    Título
                </h3>

                <p className="text-gray-600 mb-4">
                    Descripción corta.
                </p>

                <button className="bg-blue-600 text-white px-3 py-2 rounded">
                    Ver más
                </button>
            </div>


            {/* ====================================================== */}
            {/* GRID DE CARDS */}
            {/* ====================================================== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">

                <div className="bg-white rounded-lg shadow p-4">
                    Card 1
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    Card 2
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    Card 3
                </div>

            </div>


            {/* ====================================================== */}
            {/* LISTA SIMPLE */}
            {/* ====================================================== */}
            <div className="bg-white rounded-lg shadow overflow-hidden mb-8">

                <div className="border-b p-4 font-semibold">
                    Lista
                </div>

                <ul>

                    <li className="p-4 border-b hover:bg-gray-50">
                        Elemento 1
                    </li>

                    <li className="p-4 border-b hover:bg-gray-50">
                        Elemento 2
                    </li>

                    <li className="p-4 hover:bg-gray-50">
                        Elemento 3
                    </li>

                </ul>

            </div>


            {/* ====================================================== */}
            {/* TABLA RESPONSIVE */}
            {/* ====================================================== */}
            <div className="bg-white rounded-lg shadow overflow-x-auto mb-8">

                <table className="w-full">

                    <thead className="bg-blue-600 text-white">

                        <tr>
                            <th className="text-left p-3">ID</th>
                            <th className="text-left p-3">Nombre</th>
                            <th className="text-left p-3">Estado</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-b">
                            <td className="p-3">1</td>
                            <td className="p-3">Producto</td>
                            <td className="p-3">Activo</td>
                        </tr>

                        <tr>
                            <td className="p-3">2</td>
                            <td className="p-3">Producto</td>
                            <td className="p-3">Activo</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* ====================================================== */}
            {/* FLEX ENTRE EXTREMOS */}
            {/* ====================================================== */}
            <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center mb-8">

                <div>
                    Información
                </div>

                <button className="bg-blue-600 text-white px-3 py-2 rounded">
                    Acción
                </button>

            </div>


            {/* ====================================================== */}
            {/* DETALLE CLAVE - VALOR */}
            {/* ====================================================== */}
            <div className="bg-white rounded-lg shadow p-4 space-y-2 mb-8">

                <div className="flex justify-between">
                    <span className="font-medium">Nombre</span>
                    <span>Pizza</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-medium">Precio</span>
                    <span>$5000</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-medium">Stock</span>
                    <span>15</span>
                </div>

            </div>


            {/* ====================================================== */}
            {/* BOTONES */}
            {/* ====================================================== */}
            <div className="flex gap-2 flex-wrap mb-8">

                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Primario
                </button>

                <button className="bg-gray-500 text-white px-4 py-2 rounded">
                    Secundario
                </button>

                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">
                    Outline
                </button>

            </div>


            {/* ====================================================== */}
            {/* GRID FORMULARIO 2 COLUMNAS */}
            {/* ====================================================== */}
            <div className="bg-white rounded-lg shadow p-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <input
                        className="border border-blue-300 rounded px-3 py-2"
                        placeholder="Campo 1"
                    />

                    <input
                        className="border border-blue-300 rounded px-3 py-2"
                        placeholder="Campo 2"
                    />

                    <input
                        className="border border-blue-300 rounded px-3 py-2"
                        placeholder="Campo 3"
                    />

                    <input
                        className="border border-blue-300 rounded px-3 py-2"
                        placeholder="Campo 4"
                    />

                </div>

            </div>

        </div>
