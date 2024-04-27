import '@testing-library/jest-dom';
import { render, getByText } from "@testing-library/react";
import WelcomeMessage from "../WelcomeMessage";


test('displays the message correctly', () => {
    const message = 'Welcome to our website!';
    const { getByText } = render(<WelcomeMessage message = {message}/>)
    const messageElement = getByText(message);
    expect(messageElement).toBeInTheDocument();
})