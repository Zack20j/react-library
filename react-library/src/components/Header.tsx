const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Biblioteca Virtual</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Inicio</a></li>
          <li><a href="#" className="hover:underline">Catálogo</a></li>
          <li><a href="#" className="hover:underline">Sobre Nosotros</a></li>
          <li><a href="#" className="hover:underline">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;