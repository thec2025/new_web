import { render, screen } from '@testing-library/react';
import App from './App';
import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  	injectGlobal`
        
body {
    margin: 0; line-height: normal;
}
`;
        }

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
