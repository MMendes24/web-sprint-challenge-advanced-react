import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const formHeader = screen.getByRole('heading')
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    // lets store a lot of these in variables
    const fnIn = screen.getByLabelText(/first name/i)
    const lnIn = screen.getByLabelText(/last name/i)
    const addrIn = screen.getByLabelText(/address/i)
    const cityIn =screen.getByLabelText(/city/i)
    const stateIn = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)
    
    //firing section: broadside! 
    fireEvent.change(fnIn, { target: { value: 'Mars'} })
    expect(await screen.findByDisplayValue("Mars")).toBeInTheDocument()

    fireEvent.change(lnIn, { target: { value: 'Mendes'} })
    expect(await screen.findByDisplayValue("Mendes")).toBeInTheDocument()

    fireEvent.change(addrIn, { target: { value: 'mars@mars.com'} })
    expect(await screen.findByDisplayValue("mars@mars.com")).toBeInTheDocument()

    fireEvent.change(cityIn, { target: { value: 'Biloxi'} })
    expect(await screen.findByDisplayValue("Biloxi")).toBeInTheDocument()

    fireEvent.change(stateIn, { target: { value: 'MS'} })
    expect(await screen.findByDisplayValue("MS")).toBeInTheDocument()

    fireEvent.change(zip, { target: { value: '39530'} })
    expect(await screen.findByDisplayValue("39530")).toBeInTheDocument()

    //let's define and click the much dreaded button
    const checkoutB = screen.getByRole('button')
    fireEvent.click(checkoutB)

    expect(await screen.findByTestId('successMessage')).toBeInTheDocument()
});
