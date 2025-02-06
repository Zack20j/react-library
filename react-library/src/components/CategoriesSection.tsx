const CategoriesSection = () => {
    return (
        <section className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Categorías</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="font-medium text-gray-700">Ficción</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="font-medium text-gray-700">Historia</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="font-medium text-gray-700">Ciencia</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="font-medium text-gray-700">Arte</p>
            </div>
          </div>
        </section>
    );
}

export default CategoriesSection
        