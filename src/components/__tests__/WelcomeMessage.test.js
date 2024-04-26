import React, { experimental_useEffectEvent } from "react";
import { render, getByText } from "@testing-library/react";
import WelcomeMessage from "../WelcomeMessage";
import ' @testing-library/jest-dom';
test('displays the message correctly', () => {
    const message = 'Welcome to our website!';
    const { getByText } = render(<WelcomeMessage message = {message}/>)
    const messageElement = getByText(message);
    expect(messageElement).toBeInTheDocument();
})