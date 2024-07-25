import { getPokemons } from '@/lib/actions';
import Link from 'next/link';

export default async function Home({ params }: { params: { pokemon: string } }) {
  const pokemonsList = await getPokemons();

  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-bold py-8 uppercase">Pokèmons list</h1>
      <div className="grid place-content-center border rounded border-neutral-700 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl p-4 my-4 min-h-[600px]">
        {pokemonsList?.results?.map((pokemon) => (
          <Link key={pokemon.name} href={`/${pokemon.name}`} className="block p-4 bg-neutral-800 shadow-md rounded-lg text-center text-xl font-semibold hover:bg-neutral-900 hover:text-blue-200">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Link>
        ))}
      </div>
    </>
  );
}
