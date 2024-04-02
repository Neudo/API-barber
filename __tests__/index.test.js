import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from "../src/app/components/Header";
import ShopCard from "../src/app/components/ShopCard";


describe('Header heading', () => {
    it('renders a heading', () => {
        render(<Header />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeInTheDocument()
    })
})

describe('Card shop', () => {
    it('must contain a Link to the single shop',() => {
        render(<ShopCard/>)
        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument()

    })
})


describe('Header have logo', () => {
    it('renders a logo', () => {
        render(<Header />)
        const logo = screen.getByRole('img')
        expect(logo).toBeInTheDocument()
    })
})

// remove slot alreaduy in use
// form check if the form is fully fill
// Shop have prestations
//
