import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { App } from './App';
import { ThemeProvider } from './components/context/Theme_context';
import i18n from '../src/utils/i18n';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const Index = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </I18nextProvider>
  );
};
root.render(<Index />);
