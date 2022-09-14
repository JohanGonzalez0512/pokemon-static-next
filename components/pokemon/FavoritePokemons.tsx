import { Grid } from '@nextui-org/react'
import { FC } from 'react'
import { FavoriteCardPokemon } from './'

type Prop = {
    favoritePokemons: number[]
}

export const FavoritePokemons: FC<Prop> = ({ favoritePokemons }) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                favoritePokemons.map((id) => (
                    <FavoriteCardPokemon key={id} id={id} />
                )
                )
            }
        </Grid.Container>
    )
}
