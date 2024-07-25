import Image from 'next/image';
import Link from 'next/link';
import { getPokemon } from '@/lib/actions';

export default async function PokemonPage({ params }: { params: { pokemon: string } }) {
    const pokemonDetails = await getPokemon(params.pokemon);
    const pokemonSprites = pokemonDetails.sprites
    const pokemonImage = pokemonSprites.other?.['official-artwork'].front_default || pokemonSprites.front_default;
    return (
        <>
            <h1 className="text-4xl lg:text-5xl font-bold uppercase py-8">{`${params.pokemon.at(0)?.toUpperCase()}${params.pokemon.slice(1)}`}</h1>
            <div className='grid place-content-center border rounded border-neutral-700'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    <Image src={pokemonImage} alt={pokemonDetails.name} width={300} height={300} className='p-4' />
                    <Info data={pokemonDetails} />
                </div>
                <div className='grid place-content-center p-8'>
                    <Link href='/' className='text-lg lg:text-2xl hover:text-red-300'>⬅ Go Back</Link>
                </div>
            </div>
        </>
    );
}

function Info(
    { data: pokemonDetails }: { data: { name: string, height: number, weight: number, abilities: { ability: { name: string } }[], types: { type: { name: string } }[], base_experience: number } }
) {
    return (
        <div className='grid place-content-center gap-4 p-2'>
            <div className='flex w-full gap-2'>
                <p className='font-bold text-lg lg:text-2xl'>Name:</p>
                <p className='text-lg lg:text-2xl'>{pokemonDetails.name}</p>
            </div>
            <div className='flex w-full gap-2'>
                <p className='font-bold text-lg lg:text-2xl'>Base Experience:</p>
                <p className='text-lg lg:text-2xl'>{pokemonDetails.base_experience}</p>
            </div>
            <div className='flex w-full gap-2'>
                <p className='font-bold text-lg lg:text-2xl'>Height:</p>
                <p className='text-lg lg:text-2xl'>{pokemonDetails.height}</p>
            </div>
            <div className='flex w-full gap-2'>
                <p className='font-bold text-lg lg:text-2xl'>Weight:</p>
                <p className='text-lg lg:text-2xl'>{pokemonDetails.weight}</p>
            </div>

            <div className='flex w-full gap-2'>
                <p className='font-bold text-lg lg:text-2xl'>Abilities: </p>
                <p className='text-lg lg:text-2xl'>{pokemonDetails.abilities.map((ability) => ability.ability.name).join(', ')}</p>
            </div>

            <div className='flex w-full gap-2'>
                <p className='font-bold text-lg lg:text-2xl'>Types:</p>
                <p className='text-lg lg:text-2xl'>{pokemonDetails.types.map((type) => type.type.name).join(', ')}</p>
            </div>
        </div>
    )
}
