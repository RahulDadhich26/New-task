import React from 'react'
import { Github, Paperclip } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Container from '../ui/container';

const Header = () => {
    return (
        <>
            <Container className='justify-between'>
                <h1 className='text-2xl font-bold tracking-tight text-[#fdf9f0] flex gap-1 items-center'>
                    <Paperclip />
                    Github Timeline Digest
                </h1>
                <Link href={"https://www.google.com"} target='_blank'>
                    <Button effect="shineHover" className='hover: border border-[#313131] cursor-pointer'>
                        <Github />
                        Github
                    </Button>
                </Link>

            </Container>

        </>
    )
}

export default Header