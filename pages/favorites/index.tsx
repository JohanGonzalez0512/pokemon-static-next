import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons());
    }, [])


    return (
        <Layout title='Pokemones - Favoritos'>
            {
                favoritePokemons.length === 0
                    ? <NoFavorites />
                    : <FavoritePokemons favoritePokemons={favoritePokemons} />

            }


        </Layout >
    )
}

export default FavoritesPage