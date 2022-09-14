import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react'

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors?.gray100.value,
        }}>

            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Pokemon Logo"
                width={70}
                height={70}
            />
            <NextLink href={'/'} passHref>
                <Link color="primary">
                    <Text color='white' css={{ margin: '0', }} h2>P</Text>
                    <Text color='white' css={{ margin: '0', }} h3>okemon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href={'/favorites'} passHref>
                <Link color="primary">
                    <Text color='white'>Favoritos</Text>
                </Link>

            </NextLink>
        </div>
    )
}
