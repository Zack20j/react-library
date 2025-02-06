import { useState } from "react";
import data from '../data_mock.json';
import SearchBar from "./SearchBar";
import BookList from "./BookList";

const HeroSection = () => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSearch = () => {
    console.log('Buscando:', value);
  };

  const handleBookClick = (bookTitle: string) => {
    setValue(bookTitle);
    console.log('Texto del buscador actualizado:', bookTitle);
  };

  const filteredBooks = value
    ? data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
    : [];

  return (
    <section className="bg-white rounded-lg shadow-md p-6 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Bienvenido a la Biblioteca Virtual</h2>
      <p className="text-gray-600 mt-4">Encuentra tus libros favoritos de manera fácil y rápida.</p>
      
      <SearchBar value={value} onChange={onChange} onSearch={onSearch} />
      {value && <BookList books={filteredBooks} onBookClick={handleBookClick} />}
      
    </section>
  );
};

export default HeroSection;
