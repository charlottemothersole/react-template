import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Profile from "./components/Profile";
import Recipe from "./components/Recipe";
import Gig from "./components/Gig";
import Counter from "./components/Counter";

test("Profile renders with the correct text and attributes", () => {
    // Setup - rendering the component on the page
    render(<Profile name='QUAAAAAACKIE' job='Duck' birthdate='Today'/>);
  
    // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("QUAAAAAACKIE");
    expect(screen.getByRole("heading")).toHaveAttribute('id', 'name');
    expect(screen.getByRole("job")).toHaveTextContent("Duck");
    expect(screen.getByRole("birthdate")).toHaveTextContent("Today");
});


test("Recipe renders with the correct text and attributes ", () => {
    // Setup - rendering the component on the page
    render(<Recipe title="Finnish cinammon buns" type="dessert" duration={60}/>);
  
    // Assert
    expect(screen.getByRole("title")).toHaveTextContent("Finnish cinammon buns");
    expect(screen.getByRole("duration")).toHaveTextContent(60);
    expect(screen.getByRole("type")).toHaveTextContent("dessert");
});

{/* <h3 id='artist'>Artist: {props.artist}</h3>
        <img height='300px' src={props.img}/>
        <p id='description'>Description: {props.description}</p>
        <p id='when'>When: {props.when}</p>
        <p id='where'>Where: {props.where}</p> */}

test("Gig renders with the correct text and attributes", () => {
    render(
        <Gig 
            artist='Avicii' 
            img='https://www.rollingstone.com/wp-content/uploads/2018/06/avicii-interview-rolling-stone-91816b43-19e9-4ef2-8a1e-857428f69960.jpg?w=1581&h=1054&crop=1'
            description='This is the brilliantly creative description!' 
            when='Midday 1st January 2024' 
            where='Brighton Beach'
        />
    );

    expect(screen.getByRole('gig')).toHaveTextContent('Artist: AviciiDescription: This is the brilliantly creative description!When: Midday 1st January 2024Where: Brighton Beach');
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://www.rollingstone.com/wp-content/uploads/2018/06/avicii-interview-rolling-stone-91816b43-19e9-4ef2-8a1e-857428f69960.jpg?w=1581&h=1054&crop=1')
})

test('Counter renders with correct count value and decreases on button click', async () => {
    render(<Counter />);

    expect(screen.getByRole('displayCount')).toHaveTextContent(0);

    await userEvent.click(screen.getByText('Decrement'));
})